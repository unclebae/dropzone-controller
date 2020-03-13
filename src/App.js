import React from 'react';
import logo from './logo.svg';
import './App.css';
import FileDropAndUpload from './FileDropAndUpload';

function App() {
  let userId = 'id0001';
  let fileUploadInfo = {
    fileUploadUrl: `http://localhost:8080/api/v1/${userId}/upload`, 
    description: 'Drag n Drop File here',
    elseDescription: 'Drag n Drop File. And Click here.',
    background: '#deeffc',
    textcolor: '#000'
  }
  return (
    <div className="App">
      <FileDropAndUpload {...fileUploadInfo}/>
    </div>
  );
}

export default App;
