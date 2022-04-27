import React from "react";
import { useDropzone } from "react-dropzone";

// const Preview = ({ meta }) => {
//   const { name, percent, status } = meta
//   return (
//     <span style={{ alignSelf: 'flex-start', margin: '10px 3%', fontFamily: 'Helvetica' }}>
//       {name}, {Math.round(percent)}%, {status}
//     </span>
//   )
// }

function DragAndDrop({ onDrop, accept }) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
  });

  // console.log("wsdfgbgfdf")
  //console.log(acceptedFiles)
  return (
    <div className="dropzone-div" {...getRootProps()}>
      <input className="dropzone-input" {...getInputProps()} />
      <div className="text-center">
        
        {isDragActive ? (
          <p className="dropzone-content">Release to drop the files here</p>
        ) : (
          <p className="dropzone-content">
            Drag 'n' drop some files here, or click to select files
          </p>
        )}
      </div>
    </div>
  );
}

export default DragAndDrop;
