import { PermMedia } from "@mui/icons-material";
import { Dialog, DialogTitle, IconButton, styled } from "@mui/material";
import "./personalInfo.css";

import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

import CloseIcon from "@mui/icons-material/Close";
// const rel = [
//   { id: 1, value: "Single" },
//   {
//     id: 2,
//     value: "Married",
//   },
//   {
//     id: 3,
//     value: "Prefer Not to Say",
//   },
// ];

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function PersonalInfo() {
  const { user } = useContext(AuthContext);

  const [file, setFile] = useState(null);
  const username = useRef();
  const desc = useRef();
  const city = useRef();
  const from = useRef();
  const relationship = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateUser = {
      userId: user._id,
      username: username.current.value,

      desc: desc.current.value,
      city: city.current.value,
      from: from.current.value,
      relationship: relationship.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      updateUser.profilePicture = fileName;
      console.log(updateUser.profilePicture);

      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      await axios.put(`/users/${user._id}`, updateUser);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="personalInfo">
      <h1>Personal Info</h1>
      {/* <div className="pictures">
        <Avatar
          sx={{ width: 120, height: 120, marginBottom: 1 }}
          src={img.length ? img : ""}
        />
        <div>
          <Button variant="outlined" onClick={handelClickOpen}>
            Change Profile Photo
          </Button>
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose}
            >
              Upload Image
            </BootstrapDialogTitle>
            <DialogContent htmlFor="file">
              <Avatar1
                id="file"
                width={windowSize.innerWidth > 900 && 300}
                height={windowSize.innerWidth > 500 ? 300 : 150}
                onCrop={onCrop}
                onClose={onClose}
              />
            </DialogContent>
            <DialogActions>
              <Button autoFocus variant="contained" onClick={saveImage}>
                Upload
              </Button>
            </DialogActions>
          </BootstrapDialog>
        </div>
      </div> */}
      <form className="personalInfoForm" onSubmit={handleSubmit}>
        <label htmlFor="file" className="shareOption">
          <PermMedia htmlColor="tomato" className="shareIcon" />
          <span className="shareOptionText">Upload your profile picture</span>
          <input
            type="file"
            id="file"
            accept=".png,.jpeg,.jpg"
            onChange={(e) => setFile(e.target.files[0])}
            style={{ display: "none" }}
          />
        </label>

        <input
          placeholder="Username"
          type="text"
          className="personalInfoInput"
          ref={username}
          defaultValue={user.username}
        />
        <input
          placeholder="Description"
          type="text"
          className="personalInfoInput"
          ref={desc}
          defaultValue={user.desc}
        />
        <input
          placeholder="From"
          type="text"
          className="personalInfoInput"
          ref={from}
          defaultValue={user.from}
        />
        <input
          placeholder="City"
          type="text"
          className="personalInfoInput"
          ref={city}
          defaultValue={user.city}
        />
        <input
          placeholder="Relationship"
          type="text"
          className="personalInfoInput"
          ref={relationship}
          defaultValue={user.relationship}
        />
        <div className="Submit">
          <button type="submit" className="submitBtn">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default PersonalInfo;
