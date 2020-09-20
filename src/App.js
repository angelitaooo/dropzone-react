import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Uploader from "./Uploader";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

const thumbWrapper = {
  display: 'flex'
} 

function App() {
  const [acceptedFiles, setAcceptedFiles] = useState([]);

  const thumbs = acceptedFiles.map((file, index) => {
    console.log("All files", file);
    return (
      <div style={thumbWrapper}>
        <div style={thumb} key={file.name}>
          <div style={thumbInner}>
            <img src={file.preview} style={img} />
          </div>
        </div>
        <div>
          <button
            onClick={() => {
              const newFiles = acceptedFiles.filter(
                (f) => f.name !== file.name
              );
              setAcceptedFiles(newFiles);
            }}
          >
            Delete me
          </button>
        </div>
      </div>
    );
  });

  

  return (
    <div className="App">
      <Uploader
        acceptedFormats="image/jpeg, image/png"
        onComplete={(newFiles) => {
          setAcceptedFiles([...acceptedFiles, ...newFiles]);
        }}
        // onStatusUpdate={(status) =>{
        //   if (status === 'loading') {

        //   }
        //   if (status === 'done') {
            
        //   }
        //   if (status === 'failed') {
            
        //   }
        // }}
      />
      <div style={thumbsContainer}>
        <h4>Files</h4>
        <ul>
          <li>{thumbs}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
