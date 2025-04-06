import React, { useRef } from 'react'
const VideoCard = (props) => {
 
  const videoSlide = useRef();
  const slideNext = (e) => {
    videoSlide.current.style.scrollBehavior = "smooth";
    videoSlide.current.scrollLeft += 300;
  }
  const slideBack = (e) => {
    videoSlide.current.style.scrollBehavior = "smooth";
    videoSlide.current.scrollLeft -= 300;
  }
  return (
     
    <div className='recommanded'>
        <h2>{props.title}</h2>
        <button className='video-slider-btn video-prev-btn' onClick={slideBack}>&#10094;</button>
        <button className='video-slider-btn video-next-btn' onClick={slideNext}>&#10095;</button>
        <div className='recommanded-video-container' ref={videoSlide}>
            { 
             props.videos.map((video) => (
                <div key={video.id} className='recommanded-video-item' onClick={() =>props.openVideo(video.id,props.type)}>
                  <img className='recommanded-video-item-image' src={`src/assets/${props.paths}/${video.image}`} alt="" />
                  <div className='video-item-tool'>
                      <div className='video-item-tool-content'>
                          <p className='video-item-title'>{video.title}</p>
                          <p className='description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum quam nequ</p>
                          <img className='rating' src="src/assets/icons/rating.png" alt="" />
                      </div>
                  </div>
              </div>
             ))
            }
        
        </div>
    </div>
  )
}

export default VideoCard