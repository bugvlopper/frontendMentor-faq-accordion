import './App.css';
import Accordion from "./components/Accordion";
import React, { Component } from 'react';
import box from "./images/illustration-box-desktop.svg";
import mainImage from "./images/illustration-woman-online-desktop.svg";

class App extends Component {
  state = {  } 
  render() { 
    return (
      <React.Fragment>
        
      <div className='card'>
        <div className='images-container'>
          
          <img className='mainImage' src={mainImage} alt="woman working" />
          <img className='box' src={box} alt="box" />
        </div>
        <div className='content'>
          <h1>FAQ</h1>
          <div className='accordion-container'>
          <Accordion>
          <h2>How many team members can I invite?</h2> 
          <p>
            You can invite up to 2 additional users on the Free plan. There is no limit on 
            team members for the Premium plan.
          </p>  
          </Accordion>
          <Accordion>
          <h2>What is the maximum file upload size?</h2> 
          <p>
            No more than 2GB. All files in your account must fit your allotted storage space.
          </p>  
          </Accordion>
          <Accordion>
          <h2>How do I reset my password?</h2> 
          <p>
            Click “Forgot password” from the login page or “Change password” from your profile page.
            A reset link will be emailed to you.
          </p>  
          </Accordion>
          <Accordion>
          <h2>Can I cancel my subscription?</h2> 
          <p>
            Yes! Send us a message and we’ll process your request no questions asked.
          </p>  
          </Accordion>
          <Accordion>
          <h2>Do you provide additional support?</h2> 
          <p>
            Chat and email support is available 24/7. Phone lines are open during normal business hours.
          </p>  
          </Accordion>
          </div>
        </div>
      </div>

      <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel='noreferrer'>Frontend Mentor</a>. 
      Coded by <a href="https://www.frontendmentor.io/profile/bugvlopper" target="_blank" rel='noreferrer'>Bugvlopper</a>.
    </div>
      </React.Fragment>
    
    );
  }
}
 
export default App;
