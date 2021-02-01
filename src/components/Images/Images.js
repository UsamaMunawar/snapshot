import React from 'react'
import Image from './Image/Image';

const Images = ({ imageList }) => (
    <div className="row">
        {imageList.map(image =>
            <div key={image.id} className="card col-4">
                <div className="card-body">
                    <Image path={image.urls.full} />
                </div>
            </div>
        )}
    </div>
)  

export default Images;
