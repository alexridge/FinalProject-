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
              'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJiMzZhYjNlOTY2MjU4MjA5YWY4OGEyZjdkYzFmZWZmNyIsImp0aSI6IjBmMzE5NjczMmM3Njg2NjAyZDEyNmZiMWU1ZGYwNTg0NDE4Zjc3Y2VjOTk1OWE2Nzg0YjZmZDYyY2E3ZTUyNzNkMTE0OThiYWVkODc2MjE2IiwiaWF0IjoxNjc1NDMzNjk4LjE5NDE5MSwibmJmIjoxNjc1NDMzNjk4LjE5NDE5NiwiZXhwIjoxNjc1NDQ4MDk4LjE4OTIyOSwic3ViIjoiIiwiaXNzIjoiaHR0cHM6Ly9tZXRhLndpa2ltZWRpYS5vcmciLCJyYXRlbGltaXQiOnsicmVxdWVzdHNfcGVyX3VuaXQiOjUwMDAsInVuaXQiOiJIT1VSIn0sInNjb3BlcyI6WyJiYXNpYyJdfQ.hxBidvkjapmTWP3j6avOpAC5npPFmCHBGoStxVS3cV2050FcNam7uepZfP0KW6-0VIgRdxbSmXgWesYeYEq6zcyeC3SS_IEBriacJgVvd0bTtUNjQwPvKIRY3jGSrQHC7KVlJ9N5snwXN8CUdfvMMJQkw-iY_TKNGGF6NVUCv6Z877TTihkZ01SPRPMASNmHBQLsNs2wA7DL4T0ZvLY3elNYDF6Ok7KGttt5j4rJYFkTlw6GvCxB-BiPuMAtXrz12psi7_O6JN2GTuO_Ugw6vnrSAP71mMmsZXbrn0huYCOR0sBmP3sruWve0sLyq7BOYijpLkEdi1jybe95hWW_oR4DhkuwYI5ff-oD3jSYKJnnpUebwrCy9VYrxHZ_XEeU1URWcFR0mgfphXwcdnkzBsJwYlfqMNPAxxWpIrDcbgnWhDc2j4McrN1RBjSqWDALvbEDoK0P3lspHO422xHWEBBe6KAtFGYxiV1AnrOmuDQdlGwDEI7IHAD_mz-T0UWU9BWJzGaDRC6hTESTqKRbzgBrv6Ir6xHnF3curJuN5a0VMZL8_Z4rUApeezFmSavLvrJKdmlKO1FImLDWsayAx9QbAfLnO9IPgbdsqCnRoQYfcGEgOT8bAC8EyjdzkGAhKqpltKg2AF8nquC817udSDA-P9ZBzveJJKDj5X1d57U',
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
            <div className="event-image">
              <img src={eventsSources[-1 + index]} alt="img"/>
            </div>
              <div className="event-text">
              
            <ul>
              <li>
             { eventsExtract[-1 + index] }
              </li>
            </ul>
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

