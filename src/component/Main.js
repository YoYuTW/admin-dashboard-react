import React from "react";
import '../style/Main.css';
import Project from "./Project";
import Card from "./Card";
import Announcement from "./Announcement";
import Trending from "./Trending";

function Main() {
  const projects = ["Cool Project", "Pretty Cool", "Sad", "Mango", "Oyster", "Television"];
  const announcements = ["Site Maintenance", "Community Share Day", "Updated Privacy Policy", "Some Other Announcement"];
  const trending = {
    booba: "Watson Detective",
    bloop: "Atlantis",
    deadbeat: "Death Sensei",
    KFPemployee: "KFP",
  };
  const dummyParagraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

  return (
    <main>
      <div>
        <h3>Your Projects</h3>
        <div>
          {projects.map((title,id) => 
            <Project title={title} content={dummyParagraph} key={id} />)}
        </div>
      </div>
      <div>
        <h3>Announcements</h3>
        <Card>
          {announcements.map((title, id) => 
            <Announcement title={title} content={dummyParagraph} key={id} />)}
        </Card>
      </div>
      <div>
        <h3>Trending</h3>
        <Card>
          {Object.entries(trending).map(([user, org], id) => 
            <Trending user={user} org={org} key={id} />)}
        </Card>
      </div>
    </main>
  )
};

export default Main;