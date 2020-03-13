import React, {useCallback} from 'react';
import Dropzone, {useDropzone} from 'react-dropzone';
import axios from 'axios';
import './FileDropAndUpload.css';

const FileUploadZone = (props) => {
    return (
        <div className="fileUploadZone" style={{background:props.background}}>
            <FileDropZone {...props}/>
        </div>
    );
}

function FileDropZone({fileUploadUrl, description, elseDescription, textcolor}) {
    const onDrop = useCallback(acceptedFiles => {
      // Do something with the files
      const file = acceptedFiles[0];
      console.log(file);

      const formData = new FormData();
      formData.append("file", file);
      
      axios.post(fileUploadUrl,
          formData, 
          {
            headers: {
              "Content-Type":"multipart/form-data"
            }
          }
      ).then(() => {console.log("File uploaded successfully")})
      .catch(err => {
        console.log(err);
      })
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  
    return (
      <div {...getRootProps()} style={{color:textcolor}}>
        <input {...getInputProps()} />
        { isDragActive ? (<p>{description}</p>) : (
            <p>{elseDescription}</p>
        )
        }
      </div>
    )
  }

export default FileUploadZone;