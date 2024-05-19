import React, { useEffect } from 'react';
import './App.css'

function App() {
  useEffect(() => {
    const copyButton = document.getElementById('copy-button');

copyButton.addEventListener('click', () => {
  // Copy the text to the clipboard
  navigator.clipboard.writeText('jackerrip')
 .then(() => {
      // Show a confirm dialog
      if (window.confirm('Username has been copied to clipboard')) {
        // Do nothing
      } else {
        // Show an error alert
        alert('Failed to copy text to clipboard');
      }
    })
 .catch((error) => {
      console.error('Failed to copy text:', error);
      // Show an error alert
      alert('Failed to copy text to clipboard');
    });
});
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        
         <button className="home-button">
           <a href="#">
              <div className="h1-Aldrien">
                <h1>aldrienvelasco.vercel.app</h1>
               </div>
            </a>
        </button>
        
        
        
        <div className="about-me">
          <p>I'm a React Developer with nearly 2 years of experience working with React and Next.js.
            <br />
            <br />
            I am commonly known as: <br /> 
            
          </p>
        </div>
        <div className="JackErRip">
           <p>JackErRip</p>
        </div>
        <div className="hr-line-aboutme">
          <hr /> 
        </div>




        <div className="connect">
          <h1>Connect</h1>
        </div>

         <br />
       

        <div className="Github-connect-class">
         <a href="https://github.com/JackErRip">
         <div className="Github-logo">
            <img src="./images/Github Logo.png" alt="GitHub" style={{ width: '164px', height: '164px', float: 'left'}} />
         </div>
             <div className="connect-github">
                <p className="github-p">GitHub</p>
             </div>
        </a>
        </div>

       <br />

       <div className="Twitter-connect-class">
          <a href="https://x.com/JackErRip23">
           <div className="connect-x">
            <div className="x-logo">
              <img src="./images/Twitter_new_X_logo.png" alt="Twitter" style={{ width: '164px', height: '164px', float: 'left'}} />
           </div>
             <div className="connect-x">
                <p className="x-p">Twitter / X</p>
             </div>
          </div>
            </a>
        </div>
        
      <br />
    
      <div className="Twitter-connect-class">
         <a id="copy-button" href="#">
           <div className="connect-discord">
             <div className="discord-logo">
               <img src="./images/discord-color-logo-E5E6DFEF80-seeklogo.com.png" alt="Discord" style={{ width: '212.0689655172414px', height: '164px', float: 'left'}} />
               </div>
           <div className="connect-discord">
                <p className="discord-p">Discord</p>
           </div>
          </div>
         </a>
       </div>
      

        


        <div className="hr-line-connect">
          <hr /> 
        </div>
        
      </header>
    </div>
  );
}

export default App;