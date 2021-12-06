import React, { useEffect } from "react";
import "./_app.scss";
import Homepage from "./screens/HomePage";
import Login from "./screens/Login";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router";

function App() {
  const { accessToken, loading } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !accessToken) {
      navigate("/login");
    }
  }, [accessToken, loading, navigate]);

  return (
    <Routes>
      <Route exact path="/"element={
          <div className="App">
            <Homepage />
          </div>
        }
      />
       <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default App;
