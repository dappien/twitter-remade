import React, { useState, useEffect } from "react";
import "./_share.scss";
import { AiOutlineVideoCameraAdd, AiOutlineSmile } from "react-icons/ai";
import { BiImage, BiWorld } from "react-icons/bi";
import { IoMdStats } from "react-icons/io";
import { BsCalendar2Day } from "react-icons/bs";
import { storage } from "../../firebase";
import { useSelector } from "react-redux";
import LinearDeterminate from "./progress";
import { db } from "../../firebase";
import firebase from "firebase/compat/app";
import Post from "../postCard/post";

const iconStyle = {
  marginRight: "10px",
  height: "35px",
  fontSize: "20px",
  color: "#1DA1F2",
  cursor: "pointer",
};
const iconStylePrevent = {
  marginRight: "10px",
  height: "35px",
  fontSize: "20px",
  color: "#1DA1F2",
  cursor: "pointer",
  pointerEvents: "none",
};

function Share() {

  function truncate(string,n) {
    return string?.length > n ? string.substr(0,n-1)+'...' :string;
  }

  const [show, setShow] = useState(false);
  const [display, setDisplay] = useState(false);
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState([]);
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const user = useSelector((state) => state.auth.user);


  //Image Uploading
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
    
  };

  const handleChangeVideo = (e) => {
    if (e.target.files[0]) {
      setVideo(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
            setVideoUrl("");
          });
      }
    );
  };

  const handleUploadVideo = () => {
    const uploadTaskVideo = storage.ref(`videos/${video.name}`).put(video);
    uploadTaskVideo.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("videos")
          .child(video.name)
          .getDownloadURL()
          .then((videoUrl) => {
            setVideoUrl(videoUrl);
            setUrl("");
          });
      }
    );
  };


  //Getting Data From Database
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  //Pushing Data to database
  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.name,
      description: "this is a test",
      message: input,
      photoUrl:user.photoUrl || "",
      imageUrl: url,
      videoUrl:videoUrl,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
    setImage("");
    setUrl("");
    setVideoUrl("");
  };

  console.log("image", image);
  console.log("video", video);
  return (
    <div>
      <div className="share">
        <h3>Home</h3>

        <div className="share--top">
          <img
          className="share__profileImage"
            src={user?.photoUrl}
            alt=""
          />
          <div>
            <form>
              <textarea
                type="text"
                placeholder="What's Happening"
                onClick={() => setShow(true)}
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </form>

            {url && (
              <img src={url} className="share__preview" /> 
            )}

            {videoUrl && (
              <video src={videoUrl} alt="" className="share__preview"/> 
            )}

          </div>
        </div>

        {show && (
          <div className="inputPopup">
            <BiWorld style={{ marginRight: "5px" }} />
            <h5>Everyone Can Reply</h5>
          </div>
        )}

        <div className="share--middle">
          <div>

            {(!videoUrl && !url) && (
              <>
                <label for="upload-photo">
                  <BiImage style={iconStyle} onClick={() => setDisplay(true)} />
                </label>
                <input
                  type="file"
                  name="photo"
                  id="upload-photo"
                  onChange={handleChange}
                  hidden
                />
              </>
            )}

            {(!videoUrl && !url) && (
            <>
              <label for="upload-video">
                <AiOutlineVideoCameraAdd style={iconStyle} onClick={() => setDisplay(true)}/>
              </label>
              <input
                type="file"
                name="video"
                id="upload-video"
                onChange={handleChangeVideo}
                hidden
              />
            </>
            )}

            <IoMdStats style={iconStyle} />
            <AiOutlineSmile style={iconStyle} />
            <BsCalendar2Day style={iconStyle} />
          </div>
          <div className="buttonBlock">
            <button onClick={sendPost}>Tweet</button>
          </div>
        </div>
        <div>
          {display && (
            <div className="imageBlock">
              {(image) &&  (
                <>
                  <h4>{image?.name} </h4>
                    <div onClick={handleUpload} className="uploadButton">
                      Upload
                    </div>
                </>
              )}

           {(video) && (
            <>
              <h4>{video?.name} </h4>
                <div onClick={handleUploadVideo} className="uploadButton">
                  Upload
                </div>
            </>
           )}
              
            </div>
           )}
        </div>
        <LinearDeterminate progress={progress} />
      </div>

      <div>
      {posts.map(
          ({
            id,
            data: { name, description, message, imageUrl, timestamp,videoUrl ,photoUrl},
          }) => (
            <Post
              key={id}
              name={name}
              description={description}
              message={message}
              imageUrl={imageUrl}
              videoUrl ={videoUrl}
              times={Number(timestamp && timestamp.toDate().getTime())}
              photoUrl={photoUrl}
            />
          )
        )}
      {console.log(posts)}
      </div>
      
    </div>
  );
}

export default Share;
