import React from "react";
import "./playlist.css";
import SpotifyPlayer from 'react-spotify-player';

function Playlist() {
  const size = {
    width: '100%',
    height: 500,
  };
  const view = 'coverart';
  const theme = 'black';

  return (
    <div className="container" id="playlistContainer">
      <h1 className="playlistHeader">Playlist curated for you</h1>
      <SpotifyPlayer className="SpotifyPlayer"
        uri="spotify:playlist:35vz6hV0QQgSHeAT6stHnA"
        size={size}
        view={view}
        theme={theme}
      />
    </div>
  )
}

export default Playlist;