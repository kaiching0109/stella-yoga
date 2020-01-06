import React, { useState, useEffect } from "react";
import { Story, Book } from "../../components/Module";
import { BackgroundVideo } from "../../components/Base";
// import image from "public/nat-10.jpg"

const VIDEO_SOURCES = [
  {filename: "video", type: "mp4"},
  {filename: "video", type: "webm"}
]

const Landing = () => {
  return (
      <main>
        <section className="section-stories">
          <BackgroundVideo
            sources={VIDEO_SOURCES}
            autoPlay={true}
            muted={true}
            loop={true}
          />
          <Story
            title="I had the best week ever with my family"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui."
            image="nat-8.jpg"
            alt="Person on a tour"
            caption="Mary Smith"
          />
        </section>
        <section className="section-booking">
          <div className="row">
            <Book
              image={"nat-10.jpg"}
              alt="Card Backgroud"
            />
          </div>
        </section>
      </main>
  )
}

export default Landing
