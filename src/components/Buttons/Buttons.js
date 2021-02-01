import React from 'react'

const Buttons = ({ searchPhotos }) => ( 
        <div className="container text-center">
            <button type="button" className="btn btn-primary btn-sm m-2" onClick={searchPhotos}>Cats</button>
            <button type="button" className="btn btn-primary btn-sm m-2" onClick={searchPhotos}>Dogs</button>
            <button type="button" className="btn btn-primary btn-sm m-2" onClick={searchPhotos}>Birds</button>
            <button type="button" className="btn btn-primary btn-sm m-2" onClick={searchPhotos}>Mountains</button>
        </div>
)
export default Buttons;