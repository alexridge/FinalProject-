import React, { useState, useEffect, Fragment } from "react";
// import PropTypes from 'prop-types';
import './homepageData.css';
import Footer from "./footer/footer";



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
              'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJiMzZhYjNlOTY2MjU4MjA5YWY4OGEyZjdkYzFmZWZmNyIsImp0aSI6IjZjYmIyNGEyNWFhMjc0YzBiNWUwZmMxOWFhYWMzMDc0MGExMjZhZDk1ODBkYmY2YThlYzNmNjgwOTQ1MzdmMjY5YjEyZDE5ZmExN2YyMmNhIiwiaWF0IjoxNjc1Nzc5MTg0LjU3OTYzNiwibmJmIjoxNjc1Nzc5MTg0LjU3OTYzOSwiZXhwIjoxNjc1NzkzNTg0LjU3NTUzNiwic3ViIjoiIiwiaXNzIjoiaHR0cHM6Ly9tZXRhLndpa2ltZWRpYS5vcmciLCJyYXRlbGltaXQiOnsicmVxdWVzdHNfcGVyX3VuaXQiOjUwMDAsInVuaXQiOiJIT1VSIn0sInNjb3BlcyI6WyJiYXNpYyJdfQ.OPcHRWwNJ06CbgcET0Dak-QFioxZZzYVwiQiTc2wGS_HhzXFgxU4Rti0L2ayThCXetzgCORlwh6kfsVB9DENz_xCnMegXEIqa7Ad9z3WZ61vbr55pAbLgqxdJ_2ruMBQj5KHB1K1Z0-QxZr5cDAEkr8s-0gGR75cN9s0ctdZQBU-boybJp4VM1lxNTpXfMVelSftuqz2DPJ27h_N0_Vk1EV4NLvIbPO8WB-_N5XCq0_28Qa7sQua4Xzi4O3vq_w2UlT83k_G0uNHGhzZ75fJAIvJ6yb2aJeAStnVU8-S508frVkLavyiKqf7oYJbQhZysYksI-v_xx75HB2wrYQ-lEYodhZDaD6NU4G3IOO9Dvg8LyiWcI04To6do0KLDLJsT6olizcnZwk-NhYicLLF7ESbfd73ta0pZsNEchE3mdJaVhZmdWOHmrJ_UBJo9JPuOW7D5LBmFfIDMXtPIdLr0Ib2csira1BxcQkSc6hwkLOCsM4-_ceQUN4xhIh2sD9_FVWivMo1OzNSdVHV9F2bEfZpTmdWu9Xk-Ns5Orb9DQl0nb3S3thFT77qP1wIKAmWl2a-67RorgtoGjWVrUmOxvv_DJzida_0cIfMNOwHkJ0NoIv8Ies6SgP7NzCzU9hsABX9YhGX2VC1vP-Lj5v0svu_9gUa0sEFsYY_nt1iPkQ',
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
       if (index > 42) {
         setIndex(1);
       } else {
      setIndex(index + 1); 
     }
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
   
    <div className="event-page">
      <link href='https://fonts.googleapis.com/css2?family=Roboto&display=swap' rel='stylesheet' type='text/css' />
      <p>Now Showing Events Happened on {date1}</p>
      <div className="event-box">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="dropdown">
              <button onClick={dropDownFilter} className="dropbtn">Filter Pages</button>
              <div id="myDropdown" className="dropdown-content">
                <button>Births</button>
                <button>Deaths</button>
                <button>Holidays</button>
                <button>Events</button>
              </div>
            </div>
            <div className="event">
              <div className='event-title'>
                {eventsTitles[index - 1].replace(/_/g, " ")}
              </div>
              <div className="event-text">
                <div>{eventsExtract[-1 + index]}</div>
                <div className="event-image">
                  <img src={eventsSources[-1 + index]} alt="img" />
                </div>
              </div>
              <div className="event-text">
                <a href={eventsLink[-1 + index]}>Click to read more</a>
              </div>
            </div>
            <button onClick={handleSetIndex}>Next</button>
            <p>Current Page {index} / {eventsExtract.length}</p>
          </>
        )}
      </div>
    </div>
  );
  };
  
 

export default HomepageData;

