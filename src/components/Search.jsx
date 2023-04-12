const {useCallback} = React;

var Search = ({searchField, setSearchField, getYoutubeSearchResults}) => {

  var debounced = _.debounce(setSearchField, 500);

  const onSearchChange = (event) => {
    debounced(event.target.value);
  };

  return (
    <form className="search-bar form-inline" >
      <input className="form-control" type="text" onChange = {onSearchChange} />
      <button className="btn hidden-sm-down" type="submit" >
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </form>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;