import { useAuth0 } from "@auth0/auth0-react";
import { Grid } from "@material-ui/core";
import React from "react";
import { Image } from "react-bootstrap";
import DetailsCard from "../Details/Details";
import List from "./List/List";
import useStyles from "../../styles";

const Profile = () => {
  const classes = useStyles();

  const { user, isAuthenticated } = useAuth0();
  return (
    //  (
    //   <div>
    //     <Image src={user.picture}></Image>
    //     Profile is{JSON.stringify(user, null, 2)}
    //   </div>
    isAuthenticated && (
      <div className="container text-center">
        <div className="row profile">
          <div className="col-md-12 mt-5">
            <div className="profile-sidebar">
              <div className="profile-userpic">
                <img src={user.picture} className="img-responsive" alt="" />
              </div>

              <div className="profile-usertitle">
                <div className="profile-usertitle-name">{user.name}</div>
                <div className="profile-usertitle-job">
                  A Expense Manager User
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-md-12 mt-5">
                    <h3>My All Transactions</h3>
                  </div>
                </div>
              </div>
              <List></List>
              <Grid item xs={12} sm={4} className={classes.desktop}>
                <DetailsCard title="Income" />
              </Grid>
              <>
                <DetailsCard title="Expense" />
              </>
              <>
                <DetailsCard title="Income" />
              </>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default Profile;
