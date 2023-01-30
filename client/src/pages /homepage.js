import React, { useState } from 'react';

const homepageData = require("../components/homepage");

const homepage= () => {
  console.log('it has loaded');
// homepageImage = homepageData.getImage();
// homepageText = homepageData.getText(); 
//   document.getElementById('some-element').addEventListener('click', handleClick);
};

// const handleClick = (event) => {
//   console.log('Some element was clicked');
// };

window.addEventListener('load', homepage);

export default homepage;