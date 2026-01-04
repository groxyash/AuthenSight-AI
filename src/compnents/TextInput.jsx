import { useRef, useState } from "react"

import cameraIcon from "../assets/inputCamera.png"
import audioIcon from "../assets/inputAudio.png"
import mediaIcon from "../assets/inputMedia.png"
import sendIcon from "../assets/inputButton.png"

function TextInput() {
  const fileRef = useRef(null)
  const videoRef = useRef(null)

  const [selectedFile, setSelectedFile] = useState(null)
  const [cameraStream, setCameraStream] = useState(null)
  const [previewURL, setPreviewURL] = useState(null)

  const openMediaPicker = () => {
    fileRef.current.click()
  }

  const handleMediaChange = (e) => {
    const file = e.target.files[0]
    if (!file) return

    if (cameraStream) {
      cameraStream.getTracks().forEach(track => track.stop())
      setCameraStream(null)
    }

    if (previewURL) URL.revokeObjectURL(previewURL)

    setSelectedFile(file)
    setPreviewURL(URL.createObjectURL(file))
  }

  const openCamera = async () => {
    try {
      setSelectedFile(null)
      if (previewURL) {
        URL.revokeObjectURL(previewURL)
        setPreviewURL(null)
      }

      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      videoRef.current.srcObject = stream
      setCameraStream(stream)
    } catch (err) {
      console.log(err)
    }
  }

  const removeMedia = () => {
    if (cameraStream) {
      cameraStream.getTracks().forEach(track => track.stop())
      setCameraStream(null)
    }

    if (previewURL) {
      URL.revokeObjectURL(previewURL)
      setPreviewURL(null)
    }

    setSelectedFile(null)

    if (videoRef.current) {
      videoRef.current.srcObject = null
    }
  }

  return (
    <div className="text-input">
      <button className="TextBarButton" onClick={openCamera}>
        <img src={cameraIcon} alt="Camera" />
      </button>

      <button className="TextBarButton">
        <img src={audioIcon} alt="Audio" />
      </button>

      <button className="TextBarButton" onClick={openMediaPicker}>
        <img src={mediaIcon} alt="Media" />
      </button>

      <input className="InputText" placeholder="Enter your query" />

      <button className="TextBarButton">
        <img src={sendIcon} alt="Send" />
      </button>

      <input
        type="file"
        hidden
        ref={fileRef}
        accept="image/*,video/*"
        onChange={handleMediaChange}
      />

      <div className="preview-area">
        {selectedFile && previewURL && (
          <>
            {selectedFile.type.startsWith("image") && (
              <img src={previewURL} width="220" alt="preview" />
            )}

            {selectedFile.type.startsWith("video") && (
              <video src={previewURL} controls width="220" />
            )}
          </>
        )}

        {cameraStream && (
          <video ref={videoRef} autoPlay playsInline width="220" />
        )}
      </div>

      {(selectedFile || cameraStream) && (
        <button className="remove-btn" onClick={removeMedia}>
          ❌ Remove
        </button>
      )}
    </div>
  )
}

export default TextInput
