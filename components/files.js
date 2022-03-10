import React, {useRef, useState} from 'react';
import axios from 'axios';

const Files = () => {

    const [ file, setFile ] = useState(null)

    const hiddenFileInput = useRef(null);

  const handleChange = event => {

    // const fileToBase64 = (file, cb) => {
    //     const reader = new FileReader()
    //     reader.readAsDataURL(file)
    //     reader.onload = function () {
    //       cb(null, reader.result)
    //     }
    //     reader.onerror = function (error) {
    //       cb(error, null)
    //     }
    // }

    if (event.target.files && event.target.files[0]) {
      
    //   fileToBase64(event.target.files[0], (err, result) => {
    //     if (result) {
    //         console.log(result)
    //         setFile(result)
            var bodyData = new FormData();
            bodyData.append("pdf", event.target.files[0]);
            bodyData.append("projectid", "62293ad2659aa962d3b9a85c")

            axios.post('http://localhost:5000/api/posts/addFile', {
                data: bodyData,
                headers: { "content-type": "multipart/form-data" }
            })
            .then(res => console.log(res))
            .catch(err => console.log(err))
        // }
    }
      

      


    }


  const handleClick = event => {
    hiddenFileInput.current.click();
  };
    return (
        <>
            <div className='columns-3 grid-flow-col h-[50vh] w-[80vw]'>

            </div>
            <input type="file"
                ref={hiddenFileInput}
                onChange={handleChange}
                accept="image/*"
                style={{ display: 'none' }}
            />
            <button type="button" className='bg-blue-500 text-white absolute bottom-0 right-0 p-5' onClick={handleClick}>File Upload</button>
        </>
    );
}

export default Files;
