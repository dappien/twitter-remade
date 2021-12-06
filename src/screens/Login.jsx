import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { login } from '../redux/actions/auth.action';
import './_Login.scss'
import {BsTwitter} from 'react-icons/bs';
import {FcGoogle} from 'react-icons/fc';

function Login() {
    const dispatch = useDispatch();

    const accessToken = useSelector((state) => state.auth.accessToken);
    const handleLogin = () => {
      dispatch(login());
    };
  
    const navigate = useNavigate();
    useEffect(() => {
      if (accessToken) {
        navigate("/");
      }
    }, [accessToken, navigate]);
    return (
        <div className="login" >
          <div  className="login--left">
            <img src="https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Nnx8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80" className="login__image" loading="lazy" />
            <BsTwitter className="login__icon"/>
          </div>
          
          <div  className="login--right" >
            <BsTwitter color="#1DA1F2"/>
            <h4 >Happening now</h4>
            <h6>Join Twitter Today</h6>
            <button onClick={handleLogin} >
              <FcGoogle fontSize="36px"/>
              <h5>Login With Google</h5>
            </button>
          </div>
            
        </div>
    )
}

export default Login
