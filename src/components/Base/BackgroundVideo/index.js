import React from 'react';

const BackgroundVideo = ({sources, autoPlay, muted, loop}) => (
  <div className="bg-video">
    <video
      className="bg-video__content"
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
    >
      {
        sources.map(({type, filename}, i) =>
          <source src={`/${filename}.${type}`} type={`video/${type}`}/>)
      }
      Your browser is not supported!
    </video>
  </div>
)

export default BackgroundVideo
