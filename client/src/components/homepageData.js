import React, { useState, useEffect, Fragment } from "react";
// import PropTypes from 'prop-types';
import './homepageData.css';



const HomepageData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [eventsTitles, setEventsTitles ] = useState(null);
  const [eventsSources, setEventsSources ] = useState(null);
  // const [eventsImages, setEventsImages ] = useState(null);
  const [eventsExtract, setEventsExtract ] = useState(null);
  const [eventsLink, setEventsLink ] = useState(null);
  // const [randPage, setRandomPage ] = useState(null);
  const [index, setIndex] = useState(null);
 
 

  useEffect(() => {
    const fetchData = async () => {
      let today = new Date();
      let month = today.getMonth() + 1;
      let day = today.getDate();
      let url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`;

      let response = await fetch( url, {
        method: 'get',
          headers: {
              'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJiMzZhYjNlOTY2MjU4MjA5YWY4OGEyZjdkYzFmZWZmNyIsImp0aSI6ImEyNGIzZmQ4YzY4NWU1YzQ2ZDdhMDcwNDEwMDdlYzRhNmY0ZTA2MGFlMDg5NTEyOTkzMDdkZDM1NTg5MjJjOTRlZDQ3OGM1ODc2YTVkYzU4IiwiaWF0IjoxNjc1NDIwODM0LjAwNzY5NiwibmJmIjoxNjc1NDIwODM0LjAwNzcsImV4cCI6MTY3NTQzNTIzNC4wMDMwMywic3ViIjoiIiwiaXNzIjoiaHR0cHM6Ly9tZXRhLndpa2ltZWRpYS5vcmciLCJyYXRlbGltaXQiOnsicmVxdWVzdHNfcGVyX3VuaXQiOjUwMDAsInVuaXQiOiJIT1VSIn0sInNjb3BlcyI6WyJiYXNpYyJdfQ.O9NKst_L2caOx6XxHpu2taQWiOAuo88yv6lEVm_1oN2mMei9JprLJB7aaLD816jNZkX9pX3KaWxOxYGdBlREApZNQt6ml2HBl0idT9Oiw3YYNmDkWubx6LTsqIB5rDiltBQEix32JzrxUlk-8DQp9YTZCVu1Y6aQPQqXXTvTgJ9vteOcEUd61OrFs24pkCiFPKHhJ7HOUMCJ6UcIsr5njq9jtHKKir6KAzgfrLMKDZOx6ywbvdA-e_SHUYiiG1tdQzJHR00NR1O1Lu0yPcz116ZgoE4ziYb4HK7Y_mp0QBq8WOox5IiRfSwzaKEfey1QxC12d000Qe7UCNSOqn8vlByydSQ0jP2PfreGtg54FyP3eZB_KcIZAVbJ840-9W-iqqrKtIWrYneu91co_YLhi5IVoQOjq9DkjMWMGOgUR7nYTFhCAJO5C-sgGAvILxgkS6-vhC4G56fLbr-OftEhsyWTCfynvaDkl0M8LvQdB8dsHVkxfPEG6lmZflqV8HPfAXbsrMC2wgAfJsL4OxOl3p-sNil7SHSKgX00gm5IPqqkLi-x6PkwUkYaw5lIYmG-hN3SuVNmIGONyof3_Y8UNt2ENq1NP8RPwfYeGE8acCvjWhUJ6QJdG98aqfW1ZKrhrI0o_3mZfnBBSAips3bcNb6TnXdKKyvjvSnUfTz8-F8',
              'Api-User-Agent': 'This Day in History (alexridge2309@gmail.com)'
          }
      });

      const data = await response.json();
      // const eventsTitles = data.events.map(item => (item.text));
      // console.log(eventsTitles);
      const eventsPages = data.events.map(event => (event.pages));
      // console.log(eventsPages);
      const eventsImages = eventsPages.map(page => (page[0].originalimage));
      // console.log(eventsImages);
      const eventsExtract = eventsPages.map(page => (page[0].extract));
      const eventsSources = eventsImages.map(image => {if(image !== undefined){return(image.source)} else {return("https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg")}});
      // console.log(eventsSources);
      const eventsLink = eventsPages.map(page => (page[0].content_urls.desktop.page));
      // console.log(eventsLink);


      
   
      setData(data);
      setLoading(false);
      // setEventsTitles(eventsTitles);
      setEventsSources(eventsSources);
      // setEventsImages(eventsImages);
      setEventsExtract(eventsExtract);
      setEventsLink(eventsLink);
       setIndex(1);
    };

    fetchData();
    }, []);

     let handleSetIndex = () => {
      setIndex(index + 1); 
     }

    
    return (
      <div className="event-page">

        <div className="event-box">
 
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
            <div className="event-image">
              <img src={eventsSources[-1 + index]} alt="img" width="40%" height="40%"/>
            </div>
              <div className="event-text">
            <ul>
              <li>
             { eventsExtract[-1 + index] }
              </li>
            </ul>
            <a href={eventsLink[-1 + index]}>Click to read more</a>
            </div>
            <button onClick={handleSetIndex}> 
            Next
             </button>
            <p>current page {index} / {eventsExtract.length}</p>
            </>
          )}
         
        </div>
      </div>
    );
    
  };

export default HomepageData;

