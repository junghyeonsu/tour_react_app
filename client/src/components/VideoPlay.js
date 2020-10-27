import PropTypes from 'prop-types';
import React from 'react';


class YouTubeVideo extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    
  };
  state = {
      player : null
  }
  componentDidMount = () => {
    // On mount, check to see if the API script is already loaded

    if (!window.YT) { // If not, load the script asynchronously
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';

      // onYouTubeIframeAPIReady will load the video after the script is loaded
      window.onYouTubeIframeAPIReady = this.loadVideo;

      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    } else { // If script is already there, load the video directly
      this.loadVideo();
    }
  };

  loadVideo = () => {
    const { id } = this.props;

    // the Player object is created uniquely based on the id in props
    this.state.player = new window.YT.Player(`youtube-player-${id}`, {
      videoId: id,
      events: {
        onReady: this.onPlayerReady,
      },
    });
    
  };

  onPlayerReady = event => {
    event.target.seekTo(this.props.startTime);
    event.target.playVideo(5);
  };

  
  render = () => {
    const { id } = this.props;
    return (
      <div>
        <div id={`youtube-player-${id}`} />
        <p>
        {this.props.startTime === 0 ? Object.entries(this.props.seek).map(([key,value]) => {
            return(
                <button onClick={() => {this.state.player.seekTo(value)}}>{key}</button>
            )
        }): ''}
        </p>
      </div>
    );
  };
}

export default YouTubeVideo;