import React from "react";


function FeedTweet() {
  var feedTweetStyles = {
    border: "1px solid black",
    height: "100px",
    width: '100%',
    backgroundColor: '#87CEEB',
  };

  var squareStyle = {
    height: '40px',
    width: '40px',
    backgroundColor: 'brown',
    float: 'left',
    marginTop: '5%'
    
  };

  var inputStyle = {
    marginTop: '10%'
  };
  

  return (
    <div style={feedTweetStyles}>
      <div style={squareStyle}>
      
      </div>
      <input style={inputStyle} type="text" placeholder="What's Happening?"/>
    </div>
  );
}

export default FeedTweet;