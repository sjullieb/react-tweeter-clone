import React from "react";

function FollowSuggestion(props) {
  var followSuggestionStyles = {
    height: "100px",
    width: '100%',
  };

  var buttonStyles = {
    backgroundColor: "blue",
    color: "white",
  };

  var imageStyles = {
    float: "left",
    width: "50px",
    height: "50px"
  };
  

  return (
    <div style={followSuggestionStyles}>
      <img style={imageStyles} src={props.img} alt=""/>
      <h5>{props.name}</h5>
      <button style={buttonStyles}>Follow</button>
    </div>
  );
}

export default FollowSuggestion;