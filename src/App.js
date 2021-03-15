import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Common/Navbar";
import Main from "./components/Homepage/Main";
import Footer from "./components/Common/Footer";
import AboutPage from "./components/About/AboutPage";
import ActivitiesPage from "./components/Activities/ActivitiesPage";
import AimPage from "./components/Aim/AimPage";
import FamilyPage from "./components/Family/FamilyPage";
import HelpPage from "./components/Help/HelpPage";
import BranchPage from "./components/Branches/BranchPage";
import ContactPage from "./components/Contact/ContactPage";
import AdminLogin from "./components/Admin/AdminLogin";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/about" component={AboutPage} />
        <Route path="/activities" component={ActivitiesPage} />
        <Route path="/aim" component={AimPage} />
        <Route path="/family" component={FamilyPage} />
        <Route path="/help" component={HelpPage} />
        <Route path="/branches" component={BranchPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
