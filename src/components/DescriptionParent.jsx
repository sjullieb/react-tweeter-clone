import React from "react";


function DescriptionParent() {
  var descriptionParentStyles = {
    border: "1px solid black",
    height: "350px",
    width: "100%",
    display: 'inline-block',
  };
  

  return (
    <div style={descriptionParentStyles}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque libero rem debitis sunt, quisquam, eligendi, autem illo corporis eaque placeat facilis. Aperiam eaque, repudiandae cum voluptatem deleniti odio ipsum cumque.</p>
    </div>
  );
}

export default DescriptionParent;