import React from "react";
import Navbar from "./Navbar";
import FeedParent from "./FeedParent";
import ProfileParent from "./ProfileParent";
import DescriptionParent from "./DescriptionParent";
import FollowParent from "./FollowParent";


function App(){

  var col = {
    display: 'grid',
    gridTemplateColumns: '33% 41% 25%',
    gridGap: '10px'
  };
    

  return (
    <div>
      <Navbar/>
      <div style={col}> 
        <div>
          <ProfileParent/>
          <DescriptionParent/>
        </div>
        <div>
          <FeedParent/>
        </div>
        <div>
          <FollowParent/>
        </div>
      </div>
      
      
      
      
    </div>
  );
}

export default App;