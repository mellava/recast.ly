import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '/src/data/exampleVideoData.js';

const {useState} = React;

var App = () => {
  const [videos, setVideos] = useState(exampleVideoData);
  const [playVideo, setPlayVideo] = useState(exampleVideoData[0]);

  const changePlayVideo = ({video}) => (setPlayVideo(video));

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em> <Search/></em> view goes here</h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><h5><em><VideoPlayer video = {playVideo}/></em></h5></div>
        </div>
        <div className="col-md-5">
          <div><h5><em><VideoList videos ={videos} changePlayVideo={changePlayVideo}/></em> </h5></div>
        </div>
      </div>
    </div>
  );

};


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
