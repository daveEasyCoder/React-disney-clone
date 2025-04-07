import { useState,useRef, useEffect } from 'react'
import './App.css'
import './index.css'
import Navbar from '../component/Navbar';
import Hero from '../component/Hero';
import Card from '../component/card';
import VieoCard from '../component/VideoCard';
import Footer from '../component/Footer';
import RecommandedVideos from '../component/RecommandedVideos';
import PopularVideo from '../component/PopularVideo';
import p4 from "/gallery/p4.jpg";


function App() {
  const[show,setShow] = useState(false);
  const[trailers,setTrailer] = useState('');

  const openVideo = (id,type) => {
    setShow((prevshow) => !prevshow) 
     const videotype = type === "recommanded" ? RecommandedVideos : PopularVideo;
     let video = videotype.find(video => video.id === id)
     setTrailer(video.trailer);
  }

  const closeVideo = () => {
    setShow((prevshow) => !prevshow);
    setTrailer('');
  }

  return (
    <>
      <Navbar />
      <Hero />
      <Card />
      <img src={p4} alt="" />
      <img src={`${import.meta.env.BASE_URL}p4.jpg`} alt="Banner" />
      <VieoCard  videos ={RecommandedVideos} 
                 openVideo = {openVideo} 
                 title = "Recommanded for you"
                 type = "recommanded"
                     />
      <VieoCard  videos ={RecommandedVideos} 
                 openVideo = {openVideo} 
                 title = "Recommanded for you"
                 type = "recommanded"
                     />
      <VieoCard videos ={PopularVideo}
                openVideo = {openVideo} 
                title = "Popular on disney"
                 type = "popular"
                />
      <VieoCard videos ={PopularVideo}
                openVideo = {openVideo} 
                title = "Only on disney"
                 type = "popular"
                />

     
      <div style={{display:show === true ? 'block' : 'none'}} className='video-popup'>
        <video src={`src/assets/movie/${trailers}`}
          controls autoPlay
          />
        <div className='close-btn' onClick={closeVideo}>
          <p>x</p>
        </div>
      </div>

    <Footer />

    </>
  )
}

export default App
