import React, { useContext, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Grid } from "@material-ui/core";
import { Details, Main } from "../";
import useStyles from "../../styles";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { ExpenseTrackerContext } from "../../context/context";
const ExpensePage = () => {
  const classes = useStyles();
  const { isAuthenticated, loginWithPopup, user } = useAuth0();
  let navigate = useNavigate();
  if (!isAuthenticated) {
    navigate("/login");
  }
  return (
    <div className="bg">
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={4} className={classes.mobile}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
          <Details title="Expense" />
        </Grid>
        {/* <PushToTalkButtonContainer>
          <PushToTalkButton />
        </PushToTalkButtonContainer> */}
      </Grid>
    </div>
  );
};

export default ExpensePage;
