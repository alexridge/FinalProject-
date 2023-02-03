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
              'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJiMzZhYjNlOTY2MjU4MjA5YWY4OGEyZjdkYzFmZWZmNyIsImp0aSI6IjhmNmI2ZmY2OGYxYTM5OTIzZGEzZDA1NWUzY2Y1NjJmNjFmYjFmMDcwNDQwOTJhN2ZmZjJhMGYwZjczYWJkNzVjZjUxYzM1YjQ2NzczNmIxIiwiaWF0IjoxNjc1MzQ3NDY2LjA3OTkyOCwibmJmIjoxNjc1MzQ3NDY2LjA3OTkzMywiZXhwIjoxNjc1MzYxODY2LjA3NDcyMiwic3ViIjoiIiwiaXNzIjoiaHR0cHM6Ly9tZXRhLndpa2ltZWRpYS5vcmciLCJyYXRlbGltaXQiOnsicmVxdWVzdHNfcGVyX3VuaXQiOjUwMDAsInVuaXQiOiJIT1VSIn0sInNjb3BlcyI6WyJiYXNpYyJdfQ.EqSZ57fSn6Vu8T4X6TL_TF-Jf7MQ1FS1eEu8MHb-KLaTz5T-eGiKZNGnxOOJlFxkJn5Lb_RJpzSXn7wumqgH0rJfnjypcltkAGUFi81Qw6Xi_0t0d9M7dNbhKMfDEv2OF6qyqCN2_6wG59pIHs8H2BF0bzx1ggPTdIxDXv-K8bWRoxKm9V1-j4GRfyUMZJNzyhhw7iTIV3BevF8zzKdEm8sgkeZ_uuVIoqSZjvmxzoTCtsy2fCbPzbyb7pjefyu1DkhmgiWPiWAYlAzpFGTW1bE-XMY3YA4_0_LXltEelIYm4eSlAMtYgynic4xQE1y55KL9neKglvcAUq8DXQtRM2HRqJypv7G0qyl0VWUKaS-W69ciNBKC3T0V0K6qdLtQgzbS_4M23s2V_alSyWF9FjYOkD9YbXRD1HazhOV_6mvL8cmfiRRCWs16zQ7IhcnMAZf0vvNoVhPRJ63TRDMx1ogu7CF1Nlb7iMizyS9N0m9wbb90Ae4rJGHJQai_nO77aheMKyZ1LtdFSYQE8wuf4rMJ2xa08yf6ws9RIxfC2DhzG9DY_qlBd3Kcc1_yDQU3-2kVkiz_OlJoo4texpyH4fXjv_jnHneO6P81un-u9GRhU-XsCPb-xJfbgA6ACC16OMTjvDQxj0-FTmoK72HFJ6sPst7E6OOZ7nZoTBznXDc',
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


      var index = 1;
   
      setData(data);
      setLoading(false);
      // setEventsTitles(eventsTitles);
      setEventsSources(eventsSources);
      // setEventsImages(eventsImages);
      setEventsExtract(eventsExtract);
      setEventsLink(eventsLink);
       setIndex(index);
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
            <button> 
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