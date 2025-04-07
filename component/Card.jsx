import React, { useState,useRef } from 'react'
import VideoItem from '../component/VideoItem';

const Card = () => {

    const videoRef = useRef();
    const handleMouseEnter = (index) => {
      
        videoRef.current = document.getElementById(`video-${index}`);
        videoRef.current.play();
        videoRef.current.style.display = "block";
    }

    const handleMouseLeave = (event) => {
          videoRef.current.pause();
         videoRef.current.style.display = "none";
    }
  return (
        <div className="container">
            <div className='container-item'>
              {
                VideoItem.map((video,index) => (

                  <div key={video.id} className='video-card' onMouseEnter={()=>handleMouseEnter(index)} onMouseLeave={handleMouseLeave} >
                    <img src={`${import.meta.env.BASE_URL}${video.img}`} alt="image" />
                    <video
                       id={`video-${index}`}
                       muted loop 
                       src={`${import.meta.env.BASE_URL}${video.videoUrl}`} />
                  </div>
                ))
              
              }
            </div>
        </div>
       
  )
}

export default Card