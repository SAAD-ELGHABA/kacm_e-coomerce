import React, { useRef, useState } from 'react'
import {FaVideo} from 'react-icons/fa'

function Video({handleData}) {
  const videoRef = useRef();
  const [videofile,setVideoFile] = useState(null);
  console.log(videofile);
  function handleVideo(e){
    const file = e.target.files[0]
    if(file){
      const url = URL.createObjectURL(file);
      setVideoFile(url)
      handleData(
        {
          element:'video',
          dependencies:{
            urlVideo:file
          }
        }
      )
    }
  } 
  return (
    <div style={{height:'500px'}} className='border rounded'>
      <div style={{height:'450px',cursor:'pointer'}} className='d-flex justify-content-center align-items-center border rounded border-secondary elementHoverd ' onClick={()=>videoRef.current.click()}>
          <FaVideo className='fs-1' style={{display:videofile?'none':'block'}} />
          <input type="file" name="" id="video" style={{display:'none'}} ref={videoRef} onChange={(e)=>handleVideo(e)}/>
            <div style={{display:videofile?'block':'none'}} className='w-100 h-100'>
                <video src={videofile}  className='w-100 h-100' controls autoplay loop muted type="video/mp4" width={100}></video>
          </div>
      </div>
          {/* <div className='' style={{zIndex:'9999',display:videofile?'block':'none'}}>
              <ul className='row'>
                <li className='col'>
                  <label htmlFor="">Autoplay : </label>
                  <input type="checkbox" name="" id="" />
                </li>
                <li className='col'>
                  <label htmlFor="">Autoplay : </label>
                  <input type="checkbox" name="" id="" />
                </li>
                <li className='col'>
                  <label htmlFor="">Muted : </label>
                  <input type="checkbox" name="" id="" />
                </li>
              </ul>
          </div> */}
    </div>
  )
}

export default Video