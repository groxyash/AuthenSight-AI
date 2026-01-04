import NavBar from '../compnents/NavBar.jsx'
import TextInput from '../compnents/TextInput.jsx'
import Card from '../compnents/About/Card/Card.jsx';
import "../compnents/About/Card/Card.css";

function About() {
  return(
    <div className="cards-container">
      <Card
        imgSrc="..."
        title="About Project"
        subtitle="React"
        description="Some text"
        profileId="Aman"
      />
      <Card
        imgSrc="..."
        title="About Project"
        subtitle="React"
        description="Some text"
        profileId="Rishik"
      />
      <Card
        imgSrc="..."
        title="About Project"
        subtitle="React"
        description="Some text"
        profileId="Yash"
      />


      
    </div>
  )
}

export default About;
