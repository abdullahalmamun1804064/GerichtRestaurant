import React, { useRef, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants/index';
import './Intro.css';


const Intro = () => {

  const [playVideo, setPlayVideo] = useState(false);
  let vidRef = useRef(null);
  const handelVideo = () => {
    setPlayVideo(!playVideo);
    if (!playVideo) vidRef.current.play();
    else vidRef.current.pause();
  }
  return (
    <div className='app__video'>
      <video
        src={meal}
        muted
        type="video/mp4"
        loop
        ref={vidRef}
      />

      <div className="video_overly_contest ">
        <div className="video_content"
          onClick={handelVideo}
        >
          {
            playVideo ? (
              <BsPauseFill color="#fff" fontSize={27} />

            ) : (
              <BsFillPlayFill color="#fff" fontSize={27} />
            )

          }
            
      
        </div>
      </div>
    </div>
  )
};
export default Intro;
