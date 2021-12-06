import React, { useEffect, useState } from "react";
import "./_post.scss";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useSelector } from "react-redux";
import ReactPlayer from 'react-player/lazy'


function Post({
  name,
  description,
  message,
  imageUrl,
  times,
  videoUrl,
  photoUrl,
}) {
const user = useSelector(state=> state.auth.user)
const instant = Date.now();

const [border, setBorder] = useState(false);
const showBorder = () => {
    if (`${instant}-${times}` < 10) {
      setBorder(true);
    } else {
      setBorder(false);
    }
  };

function secondsToHms(value) {
    const sec = parseInt(value, 10); 
    let hours = Math.floor(sec / 3600); 
    let minutes = Math.floor((sec - hours * 3600) / 60); 
    let seconds = sec - hours * 3600 - minutes * 60;
    if (hours < 10) {      hours =  + hours;    }
    if (minutes < 10) {      minutes = '0' + minutes;    }
    if (seconds < 10) {      seconds = '0' + seconds;    }
    if (hours == 0) {
      return +minutes +"m" ; // Return in MM:SS format
    } else {
      return hours + "h"; // Return in HH:MM:SS format
    }
  }

  



  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  const size = useWindowSize();
  
  return (
    <div  className={`post ${
        (`${instant}` - ` ${times}`) / 1000 < 10 && "post__new"}`}>

        <img
         src={photoUrl}
          className="profileImage"
        />
        
        <div className="post__info">
          <div className="post__postInfo">
            <h3>{name}</h3>
            <h4>@{name}</h4>
            <h4>▪</h4>
            <h4>{secondsToHms((`${instant}` - ` ${times}`) / 1000)}</h4>
          </div>

          {message && (
            <div className="postView">{message}</div>
          )}
            
          {imageUrl && imageUrl != "" && (
            <LazyLoadImage
              effect="blur"
              className="postImage" 
              src={imageUrl}  
              loading="lazy"
              width={`${size.width}`>600 ? "460px" : "300px"}
              height={`${size.width}`>600 ? "320px" : "200px"}
              placeholderSrc={imageUrl}  
            />
          )}

          {videoUrl && videoUrl != "" && (
            <ReactPlayer
              className="postVideo"
              progressInterval="1000"
              width={`${size.width}`>600 ? "460px" : "300px"}
              height={`${size.width}`>600 ? "320px" : "200px"}
              playing={false}
              url={videoUrl} 
              volume={1}
              controls
             
            />
          )}
        </div>
        
    </div>
  );
}

export default Post;
