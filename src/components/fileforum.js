// src/components/FileForum.js
import React, { useState } from 'react'

const FileForum = () => {
  const [files, setFiles] = useState([])
  const [newFile, setNewFile] = useState(null)

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    setNewFile(file)
  }

  const uploadFile = () => {
    // Upload the file to your server or a file storage service
    // and add it to the files state
    setFiles([...files, newFile])
    setNewFile(null)
  }

  return (
    <div>
      <h3>File Forum</h3>
      <input type="file" onChange={handleFileUpload} />
      <button onClick={uploadFile} disabled={!newFile}>
        Upload File
      </button>
      <ul>
        {files.map((file, index) => (
          <li key={index}>
            <a href={file.url} target="_blank" rel="noopener noreferrer">
              {file.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FileForum