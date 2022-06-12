import React from "react";
import "./MainVideo.scss";
import Views from "../../../src/assets/Images/Icons/views.svg";
import Likes from "../../../src/assets/Images/Icons/likes.svg";


export default function MainVid({MainVideos}) {
  let formatDate = new Date(MainVideos.timestamp).toLocaleDateString()

    return (
      <section className="main">
          <div>
                <video className="main__video-container" poster={MainVideos.image}></video>
            </div>        
        <div className="main__title-container"> 
          <p className="main__title">{MainVideos.title}</p>
        </div>

        <div className="main__video-container"> 
          <p className="main__video">{}</p>
        </div>
        
        <div className="main__info-container">
          <p className="main_video-channel">By {MainVideos.channel}</p>
          <p className="main_video-views"><img className="main__views-icon" src={Views} alt="views"/>{MainVideos.views}</p>
          <p className="main_video-date">{formatDate}</p>
          <p className="main_video-likes"><img className="main__likes-icon" src={Likes} alt="views"/>{MainVideos.likes}</p>
        </div>

        <div className="main__description-container">
          <p className="main__video-description">{MainVideos.description}</p>
        </div>
        
      </section>
    );
    }

  
  


