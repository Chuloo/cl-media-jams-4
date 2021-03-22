import React, { useEffect } from "react"
import cloudinary from "cloudinary-core"
import "cloudinary-video-player/dist/cld-video-player.js"
import "cloudinary-video-player/dist/cld-video-player.min.css"


export const VideoPlayer = ({ publicId }) => {
  let cld = cloudinary.Cloudinary.new({ cloud_name: "chuloo", secure: true })

  useEffect(() => {
    // create a new cloudinary instance with config
    let vidPlayer = cld.videoPlayer("cl-vp", {
      loop: true,
      controls: true,
      autoPlay: true,
      width: 500,
      playedEventPercents: [10, 50, 90],
      analytics: {
        events: [
          "play",
          "pause",
          "ended",
          "percentsplayed",
          "error",
          "volumechange",
          "mute",
          "unmute",
          "qualitychanged",
          "seek",
          "fullscreenchange"
        ]
      }
    })

    vidPlayer.source(publicId)
  }, [publicId, cld])


  return (
    <div style={{ maxWidth: "500px" }}>
      <video id={"cl-vp"} />
    </div>
  )
}
