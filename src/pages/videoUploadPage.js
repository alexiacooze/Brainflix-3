import React from "react";
import Upload from "../../src/assets/Images/Icons/upload.svg";
import { NavLink } from "react-router-dom";
import "../../src/pages/videoUploadPage.scss";
import thumbnail from "../assets/Images/Icons/upload-video-preview.jpg";

function VideoUpload() {

const submitHandler = (e) => {
    e.preventDefault()
    const form = e.target
    const title = form.target.value
    const description = form.description.value

    if (title || !description) return alert("Please fill out all fields")
    if (title && description) return alert("Upload successful")
    }

    return (
    <form onSubmit={submitHandler} className="video">
        <NavLink to="/upload">
            <h1 className="video__upload"> Upload Video</h1>
        <div className="video__thumbnail-container">
            <p className="video__thumbnail">video thumbnail</p>
            <img className="video__image" alt="" src={thumbnail}/>
        </div>

        <div className="video__publish-container">
            <div className="video__title-container">
                <p className="video__title">title your video</p>
                <input className="video__title-input" placeholder="Add a title to your video"></input>

                <p className="video__description">add a video description</p>
                <input className="video__description-input" placeholder="Add a description of your video"></input>

                <button className="video__publish-button"><img className="video__upload-icon" src={Upload} alt="views"/>publish</button>

                <div className="video__cancel-container">
                    <button className="video__cancel-button">cancel</button>
                </div>
                
            </div>
        </div>
        </NavLink>
    </form>
    );
}
    

export default VideoUpload;