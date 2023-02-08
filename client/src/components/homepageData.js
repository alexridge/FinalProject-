import React, { useState, useEffect, Fragment } from "react";
// import PropTypes from 'prop-types';
import './homepageData.css';



const HomepageData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [eventsSources, setEventsSources ] = useState(null);
  const [eventsExtract, setEventsExtract ] = useState(null);
  const [eventsLink, setEventsLink ] = useState(null);

  const [deathsSources, setDeathsSources ] = useState(null);
  const [deathsExtract, setDeathsExtract ] = useState(null);
  const [deathsLink, setDeathsLink ] = useState(null);

  const [birthsSources, setBirthsSources ] = useState(null);
  const [birthsExtract, setBirthsExtract ] = useState(null);
  const [birthsLink, setBirthsLink ] = useState(null);

  const [holidaysSources, setHolidaysSources ] = useState(null);
  const [holidaysExtract, setHolidaysExtract ] = useState(null);
  const [holidaysLink, setHolidaysLink ] = useState(null);


  const [index, setIndex] = useState(null);
  const [date1, dateSetter1] = useState(null);
  const [date2, dateSetter2] = useState(null);
  const [eventsTitles, setEventsTitles] = useState(null);

 

  useEffect(() => {
    const fetchData = async () => {
      
      let today = new Date();
      let month = today.getMonth() + 1;
      let day = today.getDate();
      dateSetter1(`${day}/${month}`);
      dateSetter2(`2023-${month}-${day}`);
      let url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`;

      let response = await fetch( url, {
        method: 'get',
          headers: {
              'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJiMzZhYjNlOTY2MjU4MjA5YWY4OGEyZjdkYzFmZWZmNyIsImp0aSI6IjUyMGQwMmY3ZDJkMTNiY2U0MDVhNTkzZmFiMTRkNmMxNjIwNzNiZTdlOGFkOTU1NDFjNWIyZjZkNDY0MjBjYmMzNzA0MGJmNmIxNjE2NDljIiwiaWF0IjoxNjc1ODY3Mzc5Ljg2MzExOCwibmJmIjoxNjc1ODY3Mzc5Ljg2MzEyMiwiZXhwIjoxNjc1ODgxNzc5Ljg1OTM0Niwic3ViIjoiIiwiaXNzIjoiaHR0cHM6Ly9tZXRhLndpa2ltZWRpYS5vcmciLCJyYXRlbGltaXQiOnsicmVxdWVzdHNfcGVyX3VuaXQiOjUwMDAsInVuaXQiOiJIT1VSIn0sInNjb3BlcyI6WyJiYXNpYyJdfQ.LpSp3_1bJ095oxlPRp5-yWM_pr8I0fm6OdLtaDRfbVHD-aqpQSKvpoXtoPkVw3JbKLsGZHCqj_EOlpFQE6gIhaH3h8kdzW0Kdvg3tVs-Gc7_a29aEvZ-ojiBZ7NvJfgym3_WRC74Ge6a9Ris31D0QvkFz0ygrcehgMhigzuXshV88aJF23l_Da9_M-UbXvH-mZ3nMQQu7x-xecSbV8chaIcJ6BJayGclJ8in6I02-4gdVOEIUZHZ3F17LLArbuaLFvsBmOGznCdsutR6mqU6akJvdwSJcx0aernhgVE1beuntS37b6JbuiaXjExqDIFDAHyW_g9MP3yMuV-rC-Bhx2aR03UMHPs6_lFI_ISLhzsmAKiK_2vWjS0AsC1x0Uluuj9y7EKPy4Q3IyIZ8T6qpoZb_PPNRbttS6QDxufMcbSXu_ARywhHqhNk5wWvB5fZ3_scQF9mS0l8nCn4ePEZoDHV0fxVogCSfBBS0q22O5A5Cs1MUXNJQm_B518Ba94J_xSn3_85QT8KMkM1N8PSYOIMKjsJPOGC34bwgeATqMo4eU394UrcCVC7uxrJ7myhQYANVXy4M7MGrwbTCxKm1SNwxw3q_DpvdOJ-foLICIPWFLAmqZwnpNg82KnCqxxgJFS5-HrF9kdei6uId8kwq3Qeo54BgiLyCagRc-XEpgc',
              'Api-User-Agent': 'This Day in History (alexridge2309@gmail.com)'
          }
      });

      
      const data = await response.json();
      console.log(data)
      // const eventsTitles = data.events.map(item => (item.text));
      // console.log(eventsTitles);
      const eventsPages = data.events.map(event => (event.pages));
      const birthsPages = data.births.map(birth => (birth.pages))
      const deathsPages = data.deaths.map(death => (death.pages))
      const holidaysPages = data.holidays.map(holiday => (holiday.pages))
      // console.log(eventsPages);
      const eventsImages = eventsPages.map(page => (page[0].originalimage));
      const birthsImages = birthsPages.map(page => (page[0].originalimage));
      const deathsImages = deathsPages.map(page => (page[0].originalimage));
      const holidaysImages = holidaysPages.map(page => (page[0].originalimage));
      // console.log(eventsImages);
      const eventsExtract = eventsPages.map(page => (page[0].extract));
      const eventsSources = eventsImages.map(image => {if(image !== undefined){return(image.source)} else {return("https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg")}});
      
      const birthsExtract = birthsPages.map(page => (page[0].extract));
      const birthsSources = birthsImages.map(image => {if(image !== undefined){return(image.source)} else {return("https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg")}});
      
      const deathsExtract = deathsPages.map(page => (page[0].extract));
      const deathsSources = deathsImages.map(image => {if(image !== undefined){return(image.source)} else {return("https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg")}});
     
      const holidaysExtract = holidaysPages.map(page => (page[0].extract));
      const holidaysSources = holidaysImages.map(image => {if(image !== undefined){return(image.source)} else {return("https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg")}});
      // console.log(eventsSources);
      const eventsLink = eventsPages.map(page => (page[0].content_urls.desktop.page));
      const birthsLink = birthsPages.map(page => (page[0].content_urls.desktop.page));
      const deathsLink = deathsPages.map(page => (page[0].content_urls.desktop.page));
      const holidaysLink = holidaysPages.map(page => (page[0].content_urls.desktop.page));
      // console.log(eventsLink);
      const eventsTitles = eventsPages.map(page => (page[0].title));
      
      setIndex(1);      
      setEventsTitles(eventsTitles);
      setData(data);
      setLoading(false);

      setEventsSources(eventsSources);
      setEventsExtract(eventsExtract);
      setEventsLink(eventsLink);
      console.log();
      
      setBirthsSources(birthsSources);
      setBirthsExtract(birthsExtract);
      setBirthsLink(birthsLink);
      console.log(birthsLink[0]);

      setDeathsSources(deathsSources);
      setDeathsExtract(deathsExtract);
      setDeathsLink(deathsLink);
      console.log(deathsLink[0]);

      setHolidaysSources(holidaysSources);
      setHolidaysExtract(holidaysExtract);
      setHolidaysLink(holidaysLink);
      console.log(holidaysLink[0]);
    };

    fetchData();
    }, []);

     let handleSetIndex = () => {
      setIndex(index + 1); 
     }



     function dropDownFilter() {
      document.getElementById("myDropdown").classList.toggle("show");
    }
  
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }

    return (
    <html>
      <body>
        <head>
          <link href='https://fonts.googleapis.com/css2?family=Roboto&display=swap' rel='stylesheet' type='text/css'/>
        </head>
      <div className="event-page">
        <p>now showing events from: {date1}</p>
        <div className="dropdown">
              <button onClick={dropDownFilter} className="dropbtn">Filter Pages</button>
              <div id="myDropdown" className="dropdown-content">
                <button >Births</button>
                <button >Deaths</button>
                <button >Holidays</button>
                <button >Events</button>
              </div>
            </div>
        <div className="event-box">
 
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
           <div className="event">
            <div className='event-title'>
                  { eventsTitles[index - 1].replace(/_/g, " ") }
            </div>
            
            <div>
             { eventsExtract[-1 + index] }
            </div>

            <div className="event-image">
              <img src={eventsSources[-1 + index]} alt="img"/>
            </div>
              <div className="event-text">
              
            <a href={eventsLink[-1 + index]}>Click to read more</a>
            </div>
            </div>
            <button onClick={handleSetIndex}> 
            Next
             </button>
             <p>Current Page {index} / {eventsExtract.length}</p>
            </>
          )}
         
        </div>
      </div>
      </body>
     </html>
    );
    
  };

export default HomepageData;

