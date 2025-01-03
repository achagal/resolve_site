import React from 'react';
import { ReactComponent as IconFacebook } from './assets/icons/facebook.svg';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconGithub } from './assets/icons/github.svg';
import "./App.css";

class App extends React.Component {
  handleContactClick = (e) => {
    e.preventDefault();
    window.location.href = "mailto:resolvemusicdev@gmail.com?subject=Interested in Resolve";
  }

  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
          <span>resolve</span>
          </div>
          <div className="social">
            <a href="https://github.com/achagal/resolve_app" title="GitHub" target="_blank" rel="noopener noreferrer">
              <IconGithub className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>never skip a beat.</h1>
            <p>We're bringing version control and collaboration to music production. Stay tuned for updates about our launch.</p>
          </div>
          <div className="contact-text">
            contact us at resolvemusicdev@gmail.com
          </div>
        </div>
        <div className="footer">
          <span>© 2024 resolve. All rights reserved.</span>
        </div>
      </div>
    );
  }
}

export default App;