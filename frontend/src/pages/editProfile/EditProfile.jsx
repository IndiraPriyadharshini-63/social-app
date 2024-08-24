import {
  AccountCircleOutlined,
  HelpOutline,
  VpnKeyOutlined,
} from "@mui/icons-material";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";
import PersonalInfo from "../../components/personalInfo/PersonalInfo";
import Topbar from "../../components/topbar/Topbar";
import "./editProfile.css";
import PasswordUpdate from "../../components/passwordUpdate/PasswordUpdate";
import HelpComp from "../../components/helpComp/HelpComp";

function EditProfile() {
  const [tab, setTab] = useState();

  const personalInfo = () => {
    setTab(0);
  };
  const Security = () => {
    setTab(1);
  };
  const Help = () => {
    setTab(2);
  };

  return (
    <>
      <Topbar />
      <div className="editProfile">
        <div className="editProfileLeft">
          <List>
            <ListItem>
              <ListItemButton
                sx={
                  tab === 0
                    ? { borderLeft: "3px solid rgb(0, 128, 255)" }
                    : null
                }
              >
                <AccountCircleOutlined
                  color={tab === 0 ? "info" : "disabled"}
                />
                <ListItemText primary="Personal Info" onClick={personalInfo} />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                sx={
                  tab === 1
                    ? { borderLeft: "3px solid rgb(0, 128, 255)" }
                    : null
                }
              >
                <VpnKeyOutlined color={tab === 1 ? "info" : "disabled"} />
                <ListItemText primary="Security" onClick={Security} />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                sx={
                  tab === 2
                    ? { borderLeft: "3px solid rgb(0, 128, 255)" }
                    : null
                }
              >
                <HelpOutline color={tab === 2 ? "info" : "disabled"} />
                <ListItemText primary="Help" onClick={Help} />
              </ListItemButton>
            </ListItem>
          </List>
        </div>
        <hr style={{ opacity: "0.7" }} />
        <div className="editProfileRight">
          {tab === 0 && <PersonalInfo />}
          {tab === 1 && <PasswordUpdate />}
          {tab === 2 && <HelpComp />}
        </div>
      </div>
    </>
  );
}

export default EditProfile;
