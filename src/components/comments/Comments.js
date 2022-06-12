import React from "react";
import CommentOutput from "../commentsOutput/CommentOutput";
// import AvatarImg from "../../../src/assets/Images/Mohan-muruge.jpg";
import "./Comments.scss";


export default function Comments({MainVideos}) {
console.log(MainVideos);
    return (
      <section className="comments">
<div className="comment__amount-container">
  <p className="comment__amount">3 Comments</p>
</div>

<div className="comment__content-container">
<img className="comments__avatar" alt="" src="" />
            <p className="comment__title">Join the Conversation</p>
          <input
            class="comment__input" placeholder="Add a New Comment"
          />
</div>

        <div 
        className="comment__container">
            
          <div className="comment__button-container">
            <img className="comment__button-image" alt="" src=""/>
                <button className="comment__button"> Comment</button>
            </div>
        </div>

{/* mapping through the array to target the comments section (Can look under components within inspector to see the comments within the current comment thats set in state) */}
        <div className="">
            <ul>
                {MainVideos ? MainVideos.comments.map((comment) => {
                  
                    return<li >
                        
                        <CommentOutput
                        name={comment.name}
                        comment={comment.comment}
                        timestamp={comment.timestamp}
                        />
                        </li> 
                }): ""}
            </ul>
        </div>
      </section>
    );
  }
  


