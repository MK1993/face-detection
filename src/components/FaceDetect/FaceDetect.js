import React from 'react'
import './FaceDetect.css'

function FaceDetect({ imageUrl, box }) {
    return (
        <div className="center ma">
           <div className="absolute mt2">
               <img id="inputimage" alt="" src={imageUrl} style={{width:"250px", height:"auto"}} />
               <div className="bounding-box"
                style={{
                    top: box.topRow,
                    right: box.rightCol,
                    bottom: box.bottomRow,
                    left: box.leftCol,
                }}>  
                </div>
           </div>
        </div>
    );
}
  
export default FaceDetect;