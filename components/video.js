import React, { useState, useRef, useEffect } from 'react'
import Icon from './icon'
import '../stylus/components/video.styl'

const Video = ({title, sources, poster}) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoTarget = useRef()
  const videoPoster = useRef()

  const handleClick = (event) => {
    setIsPlaying(!isPlaying);
  }

  useEffect(() => {
    if (isPlaying) {
      const { current } = videoTarget
      current.play()
      videoPoster.current.classList.add('is-hidden')
    } else {
      const { current } = videoTarget
      current.pause()
      videoPoster.current.classList.remove('is-hidden')
    }
  }, [isPlaying])

  const { webm, mp4, mobile } = sources
  return (
    <div className="vh-video-wrapper">
      <div
        ref={videoPoster}
        className="vh-video-play-poster"
        onClick={handleClick}
      >
        <Icon name="play"/>
      </div>
      <video
        ref={videoTarget}
        onClick={handleClick}
        alt={title}
        preload="auto"
        poster={poster}
        loop
        playsInline
      >
        <source src={webm} type="video/webm"/>
        <source src={mp4} type="video/mp4"/>
        <source src={mobile} type="video/mp4"/>
      </video>
    </div>
  )
}

export default Video
