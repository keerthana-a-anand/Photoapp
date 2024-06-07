import React from 'react'
import Nav from './Nav'

const SearchPhotoapp = () => {
  return (
    <div>
        <Nav/>
        <center><h2>SEARCH</h2></center>
       <div className="container">
        <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12">
                 <label htmlFor="" className="form-label">Photoid</label>
                 <input type="text" className="form-control" />
            </div>
            <div className="col col-12 col-sm-6 col-md-6">
                <button className="btn btn-success">Search</button>
            </div>
        </div>
       </div> 
    </div>
  )
}

export default SearchPhotoapp