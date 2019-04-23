import React from "react";
import Search from './Search';
import Tweet from './Tweet';

function Navbar() {
  var buttonStyles = {
    height: '40px',
  };
  

  return (
    <div>
      <div>
        <button style={buttonStyles}>Home</button>
        <button style={buttonStyles}>Notifications</button>
        <button style={buttonStyles}>Mesages</button>
        <Search/>
        <Tweet/>
      </div>
      <hr/>
    </div>
  );
}

export default Navbar;