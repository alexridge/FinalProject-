import React from 'react';
import PropTypes from 'prop-types';
import HomepageData from '../components/homepageData'
import './homepage.css';

const homepage= () => {
  console.log('it has loaded');
  console.log(HomepageData)
// homepageImage = homepageData.getImage();
// homepageText = homepageData.getText();
//   document.getElementById('some-element').addEventListener('click', handleClick);


// const handleClick = (event) => {
//   console.log('Some element was clicked');
// };

window.addEventListener('load', homepage);

return (
  <div className="homepage-container">
    <p>Homepage in pages loading</p>
    <div>
      <HomepageData />
    </div>
  </div>
)
};

export default homepage;
