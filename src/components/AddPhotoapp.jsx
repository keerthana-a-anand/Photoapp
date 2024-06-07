import React from 'react'
import Nav from './Nav'

const AddPhotoapp = () => {
  return (
    <div>
        <Nav/>
        <br></br>
        <center><h2>ALBUM</h2></center>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6">
                    <label htmlFor="" className="form-label">Albumid</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6">
                <label htmlFor="" className="form-label">Photoid</label>
                <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6">
                <label htmlFor="" className="form-label">Title</label>
                <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6">
                <label htmlFor="" className="form-label">Upload Image</label>
                <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6">
                <label htmlFor="" className="form-label">Folder</label>
               <select name="" id="" className="form-control">
                <option value="favourites">favourites</option>
                <option value="latest">latest</option>
                <option value="old">old</option>
               </select>
                </div>
                <div className="col col-12 col-sm-6 col-md-6">
                <label htmlFor="" className="form-label">Date of upload</label>
                <input type="date" name="" id="" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6">
                    <button className="btn btn-success">Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPhotoapp