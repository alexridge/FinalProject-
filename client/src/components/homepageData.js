// import { React } from "react";
// import './apiData'; 
// import apiData from "./apiData";
// // import PropTypes from 'prop-types';
// import './homepageData.css';



// const homepageData = () => {

//   const data =  apiData();

// return (
 
//  <div className="event-page">
//     <div className="event-box">
//         <div className="event-image">
//           <p>{data}</p>
//         </div>
//         <div className="event-text">
//         </div>
//     </div>
//  </div>

// )};

// export default homepageData;


import React, { useState, useEffect } from "react";
// import PropTypes from 'prop-types';
import './homepageData.css';


const HomepageData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchData = async () => {
      let today = new Date();
      let month = today.getMonth() + 1;
      let day = today.getDate();
      let url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`;

      let response = await fetch( url, {
        method: 'get',
          headers: {
              'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJiMzZhYjNlOTY2MjU4MjA5YWY4OGEyZjdkYzFmZWZmNyIsImp0aSI6IjM1Y2RkNzQ3M2RiYmQ2MjExYmVmYTZjNmJiZWNkNTM4NWRmYmFhN2NmZjg4NWMzOTcyNTc1ZGNhYmFlZDBhMDg3MmFlMDViYWQzZjVmOTAzIiwiaWF0IjoxNjc1MzMzNTg3LjUyMDU1OSwibmJmIjoxNjc1MzMzNTg3LjUyMDU2MywiZXhwIjoxNjc1MzQ3OTg3LjUxNDEwNSwic3ViIjoiIiwiaXNzIjoiaHR0cHM6Ly9tZXRhLndpa2ltZWRpYS5vcmciLCJyYXRlbGltaXQiOnsicmVxdWVzdHNfcGVyX3VuaXQiOjUwMDAsInVuaXQiOiJIT1VSIn0sInNjb3BlcyI6WyJiYXNpYyJdfQ.fIcOF76G71k2BNjWj1hMB-s4oNYiFecc-c99tu7uPdiIb6vQfTFfhYSTx8AQ_zbI5HVEPotg_T7cQi8nIOyE237U1IIfSSoIBb9jS2AKlTJoAhKlDIGNBLr0nOqo7SPeAN7mkIYb1rUEmYgdxMv3szLRPWBG1-en031pnjDhRGdcrusddo1iOpBdr6KlYBQB9XHrOEQC9YB5smByNKFqBj3mwhRpISveB9Nn3rV4CoL_lBpxRzPhcSn9ihPPTcadcCZ-OCKvgXCJfGsXE874cQQwvF36PMpbnoFjOMzkCr157fxgd3_B7XYVF1ePhOF-U7euqmZCQp9NrrA7zSDI31ub18578I-cSZ2qxNRWC1mkl6515_AjYy1UXAW-cQ6p2Ny4ZfAYKnZsrb-xjvgDWdvR7Ku_-eWxvqomUoDAFN4asPqaNZSPkigzaKwiQOH4mpx5Qh7RzA5fhIu8OealUnFi-l2G6uRAZIe63Ddea7gt_oXfjYQLGeZdqGvnbd3A4x5c1n2Ok9UCmWzVlsPrVA9pciH0ffEcv9U5znGwd81uQ9KgoOH7MIeOgYbfGMAY0Lrf3J59FX9fl-gCId-ICPeWOxdhGgi4sRC3sRanGpOT19EDUTqU5FNjVcZKPFgS7vwppwYxLsGirnXpo2Y4QLK8p45WtSDLdhZOYGczUO8',
              'Api-User-Agent': 'This Day in History (alexridge2309@gmail.com)'
          }
      });

      console.log(response)

  
      const data = await response.json();
      const event = data.events[0];
      const eventTitle = event.pages[0].title.replace(/_/g, ' ');
      const eventExtract = event.pages[0].extract;
 
      console.log(data)
      console.log(event)
      console.log(eventTitle)
      console.log(eventExtract)




      setData({
        title: eventTitle,
        extract: eventExtract,
        images: event.images
      });

       setLoading(false);
      };
    fetchData();
    }, []);



    
    return (
      <div className="event-page">
        <div className="event-box">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              {data && (
                <>
                  <h3>{data.title}</h3>
                  <p>{data.extract}</p>
                  {data.images && data.images.map(image => (
                    image.url && (
                      <img src={ image.url } alt="Trees" height="200" />
                    )
                  ))}
                </>
              )}
            </>
          )}
        </div>
      </div>
    );
  };

export default HomepageData;
