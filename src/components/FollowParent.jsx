import React from "react";
import FollowSuggestion from "./FollowSuggestion";

function FollowParent() {
  var followParentStyles = {
    border: "1px solid black",
    height: "450px",
    width: '100%',
    display: 'inline-block',
    padding: "10px"
  };
  

  return (
    <div style={followParentStyles}>
      <h2>Lorem ipsum </h2>
      <FollowSuggestion
        img="https://www.merriam-webster.com/assets/mw/images/article/art-wap-article-main/egg-3442-e1f6463624338504cd021bf23aef8441@1x.jpg"
        name="Joe Johnson"
      />
      <FollowSuggestion
        img="https://www.merriam-webster.com/assets/mw/images/article/art-wap-article-main/egg-3442-e1f6463624338504cd021bf23aef8441@1x.jpg"
        name="Joe Johnson"
      />
      <FollowSuggestion
        img="https://www.merriam-webster.com/assets/mw/images/article/art-wap-article-main/egg-3442-e1f6463624338504cd021bf23aef8441@1x.jpg"
        name="Joe Johnson"
      />
      
    </div>
  );
}

export default FollowParent;