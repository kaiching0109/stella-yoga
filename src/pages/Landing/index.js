import React, { useState, useEffect } from 'react';
import { Story } from '../../components/Module';
import { BackgroundVideo } from '../../components/Base';

const VIDEO_SOURCES = [
  {filename: 'video', type: 'mp4'},
  {filename: 'video', type: 'webm'}
]

const Landing = () => {
  return (
    <div className='section-stories'>
      <BackgroundVideo
        sources={VIDEO_SOURCES}
        autoPlay={true}
        muted={true}
        loop={true}
      />
      <Story
        title='I had the best week ever with my family'
        content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.'
        image='nat-8.jpg'
        alt='Person on a tour'
        caption='Mary Smith'
      />
    </div>
  )
}

export default Landing
