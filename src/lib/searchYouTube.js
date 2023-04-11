import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  // TODO
  $.ajax({
    type: 'GET',
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    data: {q: query},
    success: callback,
    dataType: 'json',
    error: function() {
      console.log('failed to GET videos');
    },
  });

};

export default searchYouTube;
