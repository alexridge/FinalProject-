import { React } from "react";
import PropTypes from 'prop-types';
import './homepageData.css';


const homepageData = ({}) => {

  // let today = new Date();
  // let month = today.getMonth() + 1;
  // let day = today.getDate();
  // let url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`;

  // let response = await fetch( url, {
  //   method: 'get',
  //         headers: {
  //             'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
  //             'Api-User-Agent': 'YOUR_APP_NAME (YOUR_EMAIL_OR_CONTACT_PAGE)'
  //         }
  //     }
  // );
  //   response.json()
  //     .then(console.log).catch(console.error);

return (
 <div className="event-page">
    <div className="event-box">
        <div className="event-image">
          <p>Homepage in components loading</p>
        </div>
        <div className="event-text">
        </div>
        {/* <p>{responseText}</p> */}
    </div>
 </div>
)};

export default homepageData;
