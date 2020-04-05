import React from "react";
import "./playlist.css";
import SpotifyPlayer from 'react-spotify-player';
import styled, { ThemeProvider, keyframes, withTheme } from 'styled-components';

function Playlist() {
  const size = {
    width: '100%',
    height: 500,
  };
  const view = 'coverart';
  const theme = 'black';

  const PlaylistContainer = styled.div`
  color: ${props => props.theme.playlistContainerCol};
  `;

  PlaylistContainer.defaultProps = {
    theme: {
      playlistContainerCol: "coral"
    }
  }


  const VotePlaylistButtons = styled.button`
    color: ${props => props.theme.votePlaylistButtonsCol};
    &: hover {
      color: ${props => props.theme.votePlaylistButtonsFocusCol};
    };
  `

  VotePlaylistButtons.defaultProps = {
    theme: {
      votePlaylistButtonsCol: "#FBA589",
      votePlaylistButtonsFocusCol: "#FBD6C8"
    }
  }

  return (
    <PlaylistContainer className="container" id="playlistContainer">
      <h1 className="playlistHeader">Playlist curated for you</h1>
      <SpotifyPlayer
        uri="spotify:playlist:35vz6hV0QQgSHeAT6stHnA"
        size={size}
        view={view}
        theme={theme}
      />
      <div className="votePlaylist">
        <VotePlaylistButtons className="likePlaylist">
          <i className="fas fa-thumbs-up"></i>
        </VotePlaylistButtons>
        <VotePlaylistButtons className="dislikePlaylist">
          <i className="fas fa-thumbs-down"></i>
        </VotePlaylistButtons>
      </div>

    </PlaylistContainer>
  )
}

export default Playlist;