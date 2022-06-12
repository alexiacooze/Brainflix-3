import React from "react";
import "./homePage.scss";
import { Component } from 'react';
import axios from "axios";
import MainVid from "../components/main/MainVideo";
// import CommentOutput from "../components/commentsOutput/CommentOutput";
import Comments from "../components/comments/Comments";
import NextVideo from "../components/nextVideo/NextVideo";




class HomePage extends Component {
  // SETTING STATE AND GETTING AXIOS DATA
  state = {
    totalVideos: [],
    nextVideos: [],
    mainVideos: "",
    comments: [],
  }
  componentDidMount(){
    axios.get("https://project-2-api.herokuapp.com/videos/?api_key=39409682-c86d-4f4c-8990-41808ce8a87c")
      .then(response => {
        this.setState({
          ...this.state,
          totalVideos: response.data,
                  })
          console.log(response);

          axios
          .get(
            "https://project-2-api.herokuapp.com/videos/"+response.data[0].id +"?api_key=39409682-c86d-4f4c-8990-41808ce8a87c"
          ).then(response => {
            this.setState({
              ...this.state,
              mainVideos: response.data,       
            })
            console.log(response);
          })
          

        }
        )
  }

  // SWITCHING VIDEOS
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      axios
        .get(
          "https://project-2-api.herokuapp.com/videos/"+this.props.match.params.id+"?api_key=39409682-c86d-4f4c-8990-41808ce8a87c"
        )
        .then(response => {
          console.log(response);
          this.setState({ 
            mainVideos: response.data, 
            totalVideos: this.state.totalVideos.filter(
              video => video.id !== this.props.match.params.id
            )});
        });
    }
  }

  render () {

    return (
      // REFERENCING STATE FOR PROPS
      <div className="App">
      <div className='mainBody'>
        <div>
          <MainVid MainVideos={this.state.mainVideos} />
          {/* <CommentOutput MainVideos={this.state.mainVideos} /> */}
        <Comments MainVideos={this.state.mainVideos} />
        </div>
      <NextVideo TotalVideos={this.state.totalVideos}/>
      </div>
    </div>
  );
}
}
export default HomePage;