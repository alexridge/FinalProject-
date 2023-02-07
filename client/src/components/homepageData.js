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
              'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJiMzZhYjNlOTY2MjU4MjA5YWY4OGEyZjdkYzFmZWZmNyIsImp0aSI6IjNjYmI0OGY1YjYwMThmODA2NDZlZDE0ZjBjNTMxMWM1ZTBlZjY5MGM0MzIwOTAxODIyMWMzZDgxOWVlZmZlZTY0ZTQzNDhkMWIwNTE5ODM2IiwiaWF0IjoxNjc1NzYzOTg2LjA1MDY2OSwibmJmIjoxNjc1NzYzOTg2LjA1MDY3MiwiZXhwIjoxNjc1Nzc4Mzg2LjA0NjMxOCwic3ViIjoiIiwiaXNzIjoiaHR0cHM6Ly9tZXRhLndpa2ltZWRpYS5vcmciLCJyYXRlbGltaXQiOnsicmVxdWVzdHNfcGVyX3VuaXQiOjUwMDAsInVuaXQiOiJIT1VSIn0sInNjb3BlcyI6WyJiYXNpYyJdfQ.MaT3cu67Jh9RujKRgkENvupcRgEcbXb_ulCZ9kPaxKn1pgn1qZXXBS7Jh7iU7a8qnePTd0j8Xb_rqG4oe9w_PD5tozdtaAwzcIpYo345Um90Q2nJo8S3yRYLd_mLGsG77OlzJCpg7BCP0cBgTGMWbEdKoBp787Rah-R7f5wRMXyHImqLGM1Jz8ke22QlQCkWa6yyuXt8V5KOvmQWwGVnT2OmRl2yPsskh9oJCsOiG6vWcIfFnP_LIrky11JGgBUM_ZY6yppY5Kr9hVQjls9wWv3o0oAKLzee0-HpSoOZdwTP_ddl4xd-qG7bjb-EjPcrhdWMelzNvEOQj5JXQL3DKWojWXHj17pTshMj6MeljSlxXZJrMdJbGmUXneDzuDOR3_8u0jGaKATpZfNSV3_Jdcl-dZUDRLL7w74Mx5XWIHEj_oI-53qCt5eb8HjGwr5yz36VGs-InlXZuPhUjA41AzZkAqxwY18priIiTX0CDcSJ61PKQTRVt7yluA4wTIn7BG_UIAEeUa692WUCnX_UhuqPRuRvuMl1Vx2HlyGFDYQMijHOrl3X_IFybpuyUp_EKRVy9N_31XVGP6G24ZvN7ZjpnFfpLhEdS4d8nxIJL7gvHjWYPm9uYSgbr6IUjr8DLGDoaAEKxcCmJZ3YSnVA7NHnzx2b-zh8J4i7_xJF2N8',
              'Api-User-Agent': 'This Day in History (alexridge2309@gmail.com)'
          }
      });

      const data = await response.json();
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
        <p id="date-shower">now showing events from: {date1}</p>
        <div className="dropdown">
              <button onClick={dropDownFilter} className="dropbtn" data-cy='dropbtn'>Filter Pages</button>
              <div id="myDropdown" className="dropdown-content">
                <button data-cy='dropbtn-b'>Births</button>
                <button data-cy='dropbtn-d'>Deaths </button>
                <button data-cy='dropbtn-h'>Holidays</button>
                <button data-cy='dropbtn-e'>Events</button>
              </div>
            </div>
        <div className="event-box">
 
          {loading ? (
            <p data-cy="loading">Loading...</p>
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
              
            <a href={eventsLink[-1 + index]} data-cy="page-link">Click to read more</a>
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

