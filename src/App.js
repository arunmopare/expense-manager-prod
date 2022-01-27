import React, { useContext, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  useNavigate,
} from "react-router-dom";

import { SpeechState, useSpeechContext } from "@speechly/react-client";

import Navigation from "./components/Navigation/Navigation";
import ExpensePage from "./components/ExpensePage/ExpensePage";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import PageNotFound from "./components/PageNotFoud/PageNotFound";
import Stats from "./components/Stats/Stats";
import { useAuth0 } from "@auth0/auth0-react";
import { ExpenseTrackerContext } from "./context/context";

const App = () => {
  const { isAuthenticated, user } = useAuth0();
  const { speechState } = useSpeechContext();
  const main = useRef(null);
  const { getTransactionsByUser } = useContext(ExpenseTrackerContext);

  const executeScroll = () => main.current.scrollIntoView();
  useEffect(() => {
    if (isAuthenticated) {
      getTransactionsByUser(user.email);
    }
  }, [isAuthenticated, user]);
  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      executeScroll();
    }
  }, [speechState]);

  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/expense" element={<ExpensePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
