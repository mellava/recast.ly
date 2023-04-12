import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '/src/data/exampleVideoData.js';
import searchYoutube from '/src/lib/searchYouTube.js';

const {useState, useEffect} = React;

var App = () => {
  const [videos, setVideos] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [playVideo, setPlayVideo] = useState(exampleVideoData[0]);

  const changePlayVideo = ({video}) => setPlayVideo(video);

  useEffect(() => {
    searchYoutube(searchField, setVideos);
  }, [searchField]);

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em> <Search searchField = {searchField} setSearchField = {setSearchField}/></em></h5></div>
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