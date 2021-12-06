import * as React from "react";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { FiMoreHorizontal } from "react-icons/fi";
import {FcApproval} from "react-icons/fc";
import "./_clickaway.scss";
import { useSelector } from "react-redux";
import { logout } from "../../redux/actions/auth.action";
import { useDispatch } from "react-redux";

export default function ClickAway() {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logout());
  };

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };



  
  const user = useSelector(state=> state.auth.user)
  console.log(user?.photoUrl)

  const styles = {
    position: "absolute",
    top: -198,
    right: 0,
    left: 5,
    zIndex: 1,
    borderRadius:3,
    p: 1,
    bgcolor: "background.paper",
    width: "270px",
    height: "180px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  };

  const boxStyle={
    position:"fixed",
    bottom:25,
    width:220,
    cursor:"pointer",
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={boxStyle}>
        <div onClick={handleClick} className="clickaway__block">
          <img
            src={user?.photoUrl}
            alt=""
          />
          <div >
            <h3>{user?.name}</h3>
            <h4>@{user?.name}</h4>
          </div>
          <FiMoreHorizontal style={{ fontSize: "20px" }} />
        </div>
        {open ? (
          <Box sx={styles}>
            <div onClick={handleClick} className="clickaway__block--inline">
              <img
                src={user?.photoUrl}
                alt=""
              />
             
              <div >
                <h3>{user?.name}</h3>
                <h4>@{user?.name}</h4>
              </div>
              <FcApproval style={{ fontSize: "30px" }} />
            </div>
            <div className="clickaway__singleBlock">Add an existing account</div>
            <div className="clickaway__singleBlock"  onClick={logOut}>Logout @{user?.name}</div>
          </Box>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
}
