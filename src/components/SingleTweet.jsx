import React from "react";
import PropTypes from "prop-types";


function SingleTweet(props) {
  var singleTweetStyles = {
    width: '100%',
    height: "100px",
    border: "1px solid black",
  };

  var imageStyles = {
    height: "100px",
    width: "auto",
    float: "left"
  };

  

  return (
    <div style={singleTweetStyles}>
      <img style={imageStyles} src={props.image}/>
      <h5>{props.title}</h5>
      <p>{props.postBody}</p>
    </div>
  );
}

SingleTweet.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  postBody: PropTypes.string
};

export default SingleTweet;