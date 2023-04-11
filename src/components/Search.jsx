const {useCallback} = React;

var Search = ({searchField, setSearchField, getYoutubeSearchResults}) => {

  var debounced = _.debounce(setSearchField, 500);

  const onSearchChange = (event) => {

    // console.log('you typed in serach');

    debounced(event.target.value);
  };



  return (

    <form className="search-bar form-inline" >
      <input className="form-control" type="text" onChange = {onSearchChange} />
      <button className="btn hidden-sm-down" type="submit" >
        <span className="glyphicon glyphicon-search"></span>
        <div></div>
      </button>
    </form>

  /*<div className="search-bar form-inline">
      <input className="form-control" type="text" onChange = {onSearchChange} />
      <button className="btn hidden-sm-down" >
        <span className="glyphicon glyphicon-search"></span>
        <div></div>
      </button>
    </div>*/
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;


//'abc'

//event > 'a' ... 'b' ... 'c' = 'ac'
// 'a' ... 'ab' ... 'abc' = "a" > 'ab'