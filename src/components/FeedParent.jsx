import React from "react";
import FeedTweet from "./FeedTweet";
import FeedPostsContainer from "./FeedPostsContainer";

function FeedParent() {
  var feedParentStyles = {
    border: "1px solid black",
    height: "700px",
    width: '100%',
    // display: 'inline-block',
  };
  

  return (
    <div style={feedParentStyles}>
      <FeedTweet/>
      <FeedPostsContainer/>
    </div>
  );
}

export default FeedParent;