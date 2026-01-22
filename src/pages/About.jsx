import NavBar from '../compnents/NavBar.jsx'
import TextInput from '../compnents/TextInput.jsx'
import Card from '../compnents/About/Card/Card.jsx';
import "../compnents/About/Card/Card.css";
import details from '../compnents/About/Card/details.js';

function About() {
  return(
    <div className="cards-container">
      {/* <Card
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
      /> */}
      {details.map((item) => (
        <div key={item.name}>
          <Card 
            name={item.name}
            fullname={item.fullname}
            github={item.github}
            cardContent={item.cardContent}
            about={item.about}
            profileImage={item.profileImage}
          />
        </div>
      ))}


      
    </div>
  )
}

export default About;
