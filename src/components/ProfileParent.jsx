import React from "react";


function ProfileParent() {
  var profileParentStyles = {
    border: "1px solid black",
    height: "200px",
    width: "100%",
    position: 'relative'
  };

  var topStyles = {
    backgroundColor: "#89cff0",
    height: "60%",
  };

  var nameStyles = {
    textAlign: "right",
    marginRight: "50px",
  };

  var links= {
    textAlign: "right"
  };

  var individualLinks = {
    marginRight: "20px"
  };

  var imgStyle = {
    top: '80px',
    height: '80px',
    width: '80px',
    position: 'absolute',
    left: '20px'
  };
  

  return (
    <div style={profileParentStyles}>
      <div >
        <img style={imgStyle}src="https://www.merriam-webster.com/assets/mw/images/article/art-wap-article-main/egg-3442-e1f6463624338504cd021bf23aef8441@1x.jpg" alt=""/>
      </div>
      <div style={topStyles}></div>
      
      <div>
        <p style={nameStyles}>Kellie A. Corrigan</p>
        <p style={links}><span style={individualLinks}>Tweets</span><span style={individualLinks}>Following</span><span style={individualLinks}>Followers</span></p>
      </div>
    </div>
  );
}

export default ProfileParent;