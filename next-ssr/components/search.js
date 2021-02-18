
const Search = () => {
    return (
        <div className="main">
         <div className="input-group">
          <input type="text" className="form-control" placeholder="Search"/>
          <div className="input-group-append">
            <button className="btn btn-secondary" type="button">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    )
}

export default Search
