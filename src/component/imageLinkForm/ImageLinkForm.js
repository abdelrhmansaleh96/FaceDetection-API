import React from "react";
import './ImageLinkForm.css';

const ImageLinkForm=({onInputChange,onButtonSubmit})=>{
    return(
        <div>
            <p className='f3'>{'This will detect faces in your pictures. Try the magic'}</p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                     <input onChange={onInputChange} type='text' placeholder='Enter the image link in JPG' className='f4 pa2 w-70 center'></input>
                    <button onClick={onButtonSubmit} className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
                </div>
            </div>
          
        </div>
    );
}

export default ImageLinkForm;