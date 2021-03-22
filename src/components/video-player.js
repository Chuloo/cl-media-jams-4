import React, { useEffect } from "react"
import cloudinary from "cloudinary-core"
import "lodash/lodash.js"
import "cloudinary-video-player/dist/cld-video-player.js"
import "cloudinary-video-player/dist/cld-video-player.min.css"


export const VideoPlayer = ({ publicId }) => {
  let cld = cloudinary.Cloudinary.new({ cloud_name: "chuloo", secure: true })
    // if (typeof window !== "undefined") {
    //   if (!window.ga && window.gaGlobal) {
    //     console.log("google analytics started")
    //     window.ga = window.gaGlobal
    //   }
    //   if (!window.ga) {
    //     console.log("google analytics script is not loaded")
    //     window.ga = (arg) => {
    //       console.log(arg)
    //     }
    //   }
    // }

  useEffect(() => {
    // create a new cloudinary instance with config
    let vidPlayer = cld.videoPlayer("cl-vp", {
      loop: true,
      controls: true,
      autoPlay: true,
      width: 500,
      analytics: true
    })

    vidPlayer.source(publicId)
    vidPlayer.on("play", console.log("Video is being played"))
    vidPlayer.on("pause", console.log("Video is being paused"))
  })


  return (
    <div style={{ maxWidth: "500px" }}>
      <video id={"cl-vp"} />
    </div>
  )
}
