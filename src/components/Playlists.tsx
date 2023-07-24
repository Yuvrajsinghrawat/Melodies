// src/components/Playlists.tsx
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
// import { RootState } from '../store/store';

const Playlists: React.FC = () => {
  //   const playlists = useSelector((state: RootState) => state.playlists.playlists);

  const options = {
    method: "GET",
    url: "https://shazam.p.rapidapi.com/shazam-events/list",
    params: {
      artistId: "73406786",
      l: "en-US",
      from: "2022-12-31",
      limit: "50",
      offset: "0",
    },
    headers: {
      "X-RapidAPI-Key": "3a05dad67amshaa28900cba03eedp138c15jsnf470026fc926",
      "X-RapidAPI-Host": "shazam.p.rapidapi.com",
    },
  };

  const [first, setfirst] = useState([]);
  useEffect(() => {
    const sample = async () => {
      try {
        const response = await axios.request(options);
        console.log(response.data);
        setfirst(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    sample();
  }, []);

  return (
    <div>
      <h3>Playlists</h3>
      <button>Create Playlist</button>
      {/* Display user's playlists */}
    </div>
  );
};

export default Playlists;
