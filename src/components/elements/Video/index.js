import React, { useState } from 'react';
import { isEmpty } from 'lodash';
import { string, bool } from 'prop-types';
import { Waypoint } from 'react-waypoint';
import ReactPlayer from 'react-player';

import VideoPlaceholder from '../VideoPlaceholder';

const Video = (props) => {
  const {
    poster, wrapClassName, videoClassName, autoPlay, controls, loop, muted,
    playsInline, playing, videoUrl,
  } = props;

  const [shouldPlay, updatePlayState] = useState(false);

  const handleEnterViewport = () => {
    if (window.innerWidth > 300) {
      updatePlayState(true);
    }
  };
  const handleExitViewport = () => {
    updatePlayState(false);
  };

  if (isEmpty(videoUrl)) return <VideoPlaceholder />;

  return (
    <div className={wrapClassName}>
      <Waypoint
        onEnter={handleEnterViewport}
        onLeave={handleExitViewport}
      >
        <div>
          <ReactPlayer
            className={videoClassName}
            config={{
              file: {
                attributes: {
                  poster: `${poster}`,
                },
              },
            }}
            playing={playing || shouldPlay}
            autoPlay={autoPlay}
            url={videoUrl}
            controls={controls}
            loop={loop}
            muted={muted}
            playsinline={playsInline}
            width={props.width}
            height={props.height}
          />
        </div>
      </Waypoint>
    </div>
  );
};

Video.propTypes = {
  poster: string,
  wrapClassName: string,
  videoClassName: string,
  playing: bool,
  videoUrl: string,
  autoPlay: bool,
  controls: bool,
  loop: bool,
  muted: bool,
  playsInline: bool,
  width: string,
  height: string,
};

Video.defaultProps = {
  poster: '',
  wrapClassName: '',
  videoClassName: '',
  videoUrl: '',
  playing: false,
  autoPlay: false,
  controls: false,
  loop: true,
  muted: false,
  playsInline: false,
  width: '100%',
  height: '100%',
};

export default Video;
