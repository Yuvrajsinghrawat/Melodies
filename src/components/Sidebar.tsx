import React from "react";
import "./styles.css";
import Home from "./Home";
import Search from "./Search";
import Favourites from "./Favourites";
import Playlists from "./Playlists";

const Sidebar: React.FC = () => {
  return (
    <div>
      <div className="sidebar">
        {/* menu item */}
        <ul>
          <li>
            <a href="#">
              <span className="item">
                <Home />
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="item">
                <Search />
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="item">
                <Favourites />
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="item">
                <Playlists />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
