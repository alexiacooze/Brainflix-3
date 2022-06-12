// function for the next vids to reference the .map in the nextvid file

import './MultiVid.scss';

function VideoOutput({image, title, name}) {
    return (
    <header className="multi">
      <div className="multi__image-container">
        <img
          className="multi__image"
          src={image}
          alt="Next Video"
        />
      </div>

      <div className="multi__content-container">
        <p className="multi__title">
          {title}
        </p>
        <p className="multi__channel">
          {name}
        </p>
      </div>
    </header>
    );
}

export default VideoOutput;