import React from 'react';

const CircleImage = ({image, alt, caption}) => (
    <figure className='circle-image'>
      <img className='circle-image__img' src={`/${image}`} alt={alt ? alt : ''}/>
      {caption &&
        <figcaption className='circle-image__caption'>
          {caption}
        </figcaption>
      }
    </figure>
)

export default CircleImage
