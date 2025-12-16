"use client";
import { useState } from "react";
import Navigation from "../NavBar/NavBar";
import Dashboard from "../Landing/DashboardPage";
import Subscriptions from "../Landing/Subscriptions";
import { Applications } from "../Landing/Applications";
import { Billing } from "../Landing/Billing";
import Profile from "../Landing/Profile";
import {Footer} from "./Footer";

const Home = () => {
  const [activePage, setActivePage] = useState("dashboard");
   const handleNavigate = (toPage) => {
    setActivePage(toPage);
  };

  return (
    <>
      <Navigation activePage={activePage} onNavigate={setActivePage} />

      <main className="bg-white dark:bg-gray-900">
        {activePage === "dashboard" && <Dashboard onNavigate={handleNavigate}/>}
        {activePage === "applications" && <Applications onNavigate={handleNavigate}/>}
        {activePage === "subscriptions" && <Subscriptions onNavigate={handleNavigate}/>}
        {activePage === "billing" && <Billing onNavigate={handleNavigate}/>}
        {activePage === "profile" &&<Profile onNavigate={handleNavigate}/>}
      </main>
      {/* <Footer/> */}
      <Footer onNavigate={handleNavigate} />
    </>
  );
};

export default Home;
