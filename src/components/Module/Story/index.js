import React from 'react';
import { CircleImage, ParallelCard } from '../../Base';

const Story = ({ title, content, image, alt, caption }) => (
  <ParallelCard>
    <div className="story">
      <div className="story__shape">
        <div className="story__image">
          <CircleImage
            image={image}
            alt={alt}
            caption={caption}
          />
        </div>
      </div>
      <div className="story__text">
        <div className="heading-tertiary u-margin-bottom-small">{title}</div>
        <p>{content}</p>
      </div>
    </div>
  </ParallelCard>
)

export default Story
