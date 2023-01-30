import { React } from "react";
import PropTypes from 'prop-types';


let today = new Date();
let month = today.getMonth() + 1;
let day = today.getDate();
let url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`;

let response = await fetch( url );
  response.json().then(console.log).catch(console.error);
const responseText = response.json()

const homepage = ({navigate}) => {
return (
 <div className="whole-page">
    <div className="event-box">
        <div className="event-image">
          <p> { responseText } </p>
        </div>
        <div className="event-text">
        </div>
    </div>
 </div>
)};

export default homepage;