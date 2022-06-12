import React from "react";
import { NavLink } from "react-router-dom";
import VideoOutput from "../multiVid/MultiVid";
import "./NextVideo.scss";


export default function NextVideo({TotalVideos}) {

    return (
      <section className="comments">
   
{/* mapping through the array to target the comments section (Can look under components within inspector to see the comments within the current comment thats set in state) */}
        <div className="">
                {TotalVideos.map((video) => {
                  console.log(video.id);
                    return(
                        <NavLink to={`/videos/${video.id}`} key={video.id}>
                        <VideoOutput
                        
                        title={video.title}
                        name={video.channel}
                        image={video.image}
                        />
                        </NavLink> 
                    ) 
                })}
        </div>
      </section>
    );
  }
  


