function TextInput() {
  return (
    <div className="text-input">
      <button className="TextBarButton"><img src="src\assets\inputCamera.png" alt="Send" /></button>
      <button className="TextBarButton"><img src="src\assets\inputAudio.png" alt="Send" /></button>
      <button className="TextBarButton"><img src="src\assets\inputMedia.png" alt="Send" /></button>
      <input placeholder="Enter Your Query"/>
      <button className="TextBarButton"><img src="src\assets\inputButton.png" alt="Send" /></button>
    </div>
  );
}

export default TextInput;
