import React from 'react';

const CircleImage = ({image, alt}) => (
    <figure className='circle-image'>
      <img src={`/${image}`} alt={alt ? alt : ''}/>  
    </figure>
)

export default CircleImage
