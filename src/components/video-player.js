import React, { useEffect } from "react"
import cloudinary from "cloudinary-core"
import "lodash/lodash.js"
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
      analytics: {
        events: [
          'play',
          'pause',
          'ended',
          { type: 'percentsplayed', percents: [10, 40, 70, 90] },
          'error',
          'volumechange',
          'mute',
          'unmute',
          'qualitychanged',
        ]
      }
    })

    vidPlayer.source(publicId)
  }, [publicId])


  return (
    <div style={{ maxWidth: "500px" }}>
      <video id={"cl-vp"} />
    </div>
  )
}
