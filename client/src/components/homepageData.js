import React, { useState, useEffect, Fragment } from "react";
// import PropTypes from 'prop-types';
import './homepageData.css';
 


const HomepageData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [eventsSources, setEventsSources] = useState(null);
  const [eventsExtract, setEventsExtract] = useState(null);
  const [eventsLink, setEventsLink] = useState(null);

  const [deathsSources, setDeathsSources] = useState(null);
  const [deathsExtract, setDeathsExtract] = useState(null);
  const [deathsLink, setDeathsLink] = useState(null);
  const [deathsTitles, setDeathsTitles] = useState(null);


  const [birthsSources, setBirthsSources] = useState(null);
  const [birthsExtract, setBirthsExtract] = useState(null);
  const [birthsLink, setBirthsLink] = useState(null);
  const [birthsTitles, setBirthsTitles] = useState(null);


  const [holidaysSources, setHolidaysSources] = useState(null);
  const [holidaysExtract, setHolidaysExtract] = useState(null);
  const [holidaysLink, setHolidaysLink] = useState(null);
  const [holidaysTitles, setHolidaysTitles] = useState(null);


  const [index, setIndex] = useState(null);
  const [date1, dateSetter1] = useState(null);
  const [date2, dateSetter2] = useState(null);
  const [eventsTitles, setEventsTitles] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const api_key = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJiMzZhYjNlOTY2MjU4MjA5YWY4OGEyZjdkYzFmZWZmNyIsImp0aSI6Ijc3N2U4NjlkY2JjZTcxOGYxOTk1NjkzY2UyYzYzMzRkNmNjZjBhZGUyMDMyZWI2YTc3ZTc3YWNmMzdhM2I5ODc4ZjRhMWI3NmQ2Y2FmOTQ4IiwiaWF0IjoxNjc1ODUyNTgwLjA4MzE2NSwibmJmIjoxNjc1ODUyNTgwLjA4MzE2OCwiZXhwIjoxNjc1ODY2OTgwLjA3OTQ0Niwic3ViIjoiIiwiaXNzIjoiaHR0cHM6Ly9tZXRhLndpa2ltZWRpYS5vcmciLCJyYXRlbGltaXQiOnsicmVxdWVzdHNfcGVyX3VuaXQiOjUwMDAsInVuaXQiOiJIT1VSIn0sInNjb3BlcyI6WyJiYXNpYyJdfQ.ICYusZ_0A5mECgSQGC6pFxrhwbhXLyLHAkkqwJlEOPWW-xQBiuUZUPv_jPnxS5Hq7X8zfgVcLDlxK7HuX_eNtXozj9e0kzXTPMKqJU6vACaOHb9w1if2xwbNGJFotVdUztOodpreXOvAI4y3cHtY5miPAzg3gLSCLabfClwNz3IVsEf_qJLBNe2qKNZvrVSmNNDsmxa8hSQ5Sb8Jr60M9lqqXAuj4mdYAFb3XAu6IV-G0GOCvRth4-PnfGBWdfF7fxkhaVKSTH-suSHbPo6ftA6yGyDEkzJDNqClmWn-2nGrG0KtiWGmnvxOBcOw5Gao2OuH8VjLW_Cf3Xi0wA80N1E0Z8Hcz0myvWSYF1o-vGQR9YqnuCi_eFCqbDPTLb0Q5-YHJFywnQx4zRccjLiSrAz3iYobE0eWo599lqgtRn3X5qzfHqALBtxTOvBOOtHyRO2-JNXR9ln4t4c5iONtP5na8bsSCpgpWRR495vQLqJa1YUmxBajRkD1fl8bVQopf6PbJYf3uD64k3REw5ZkmXJBEbO3nHVMCCSQUGGL5BEE0Z7bjn7x5aRojlMfpIW5eWBBvYb8qk3pEqoFTVATdXaEcQ-8zbP_Wm-JDwG9y4q6Z77myG6lmFNe4ZeYXUYUCFcYQ5kv20Q6rSOIplBHQ7itj5KD55N-0LtX_zrlZ-w'
      const user_agent = 'This Day in History (alexridge2309@gmail.com)';

      let today = new Date();
      let month = today.getMonth() + 1;
      let day = today.getDate();
      dateSetter1(`${day}/${month}`);
      dateSetter2(`2023-${month}-${day}`);
      let url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`;

      let response = await fetch(url, {
        method: "get",
        headers: {
          Authorization:
            `Bearer ${api_key}`,
          "Api-User-Agent": `${user_agent}`,
        },
      });

      const data = await response.json();
      // const eventsTitles = data.events.map(item => (item.text));
      // console.log(eventsTitles);
      const eventsPages = data.events.map((event) => event.pages);
      const birthsPages = data.births.map((birth) => birth.pages);
      const deathsPages = data.deaths.map((death) => death.pages);
      const holidaysPages = data.holidays.map((holiday) => holiday.pages);
      // console.log(eventsPages);
      const eventsImages = eventsPages.map((page) => page[0].originalimage);
      const birthsImages = birthsPages.map((page) => page[0].originalimage);
      const deathsImages = deathsPages.map((page) => page[0].originalimage);
      const holidaysImages = holidaysPages.map((page) => page[0].originalimage);
      // console.log(eventsImages);
      const eventsExtract = eventsPages.map((page) => page[0].extract);
      const eventsSources = eventsImages.map((image) => {
        if (image !== undefined) {
          return image.source;
        } else {
          return "https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";
        }
      });

      const birthsExtract = birthsPages.map((page) => page[0].extract);
      const birthsSources = birthsImages.map((image) => {
        if (image !== undefined) {
          return image.source;
        } else {
          return "https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";
        }
      });

      const deathsExtract = deathsPages.map((page) => page[0].extract);
      const deathsSources = deathsImages.map((image) => {
        if (image !== undefined) {
          return image.source;
        } else {
          return "https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";
        }
      });

      const holidaysExtract = holidaysPages.map((page) => page[0].extract);
      const holidaysSources = holidaysImages.map((image) => {
        if (image !== undefined) {
          return image.source;
        } else {
          return "https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";
        }
      });
      // console.log(eventsSources);
      const eventsLink = eventsPages.map(
        (page) => page[0].content_urls.desktop.page
      );
      const birthsLink = birthsPages.map(
        (page) => page[0].content_urls.desktop.page
      );
      const deathsLink = deathsPages.map(
        (page) => page[0].content_urls.desktop.page
      );
      const holidaysLink = holidaysPages.map(
        (page) => page[0].content_urls.desktop.page
      );
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

  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
  
 

  const [eventsToggle, setEventsToggle] = useState(true);
  const [birthsToggle, setBirthsToggle] = useState(false);
  const [deathsToggle, setDeathsToggle] = useState(false);
  const [holidaysToggle, setHolidaysToggle] = useState(false);

  const handleEventsFilter = (e) => {
    if (eventsToggle === true) {
      setEventsToggle(false);
    } else if (eventsToggle === false)
      setEventsToggle(true);
      setBirthsToggle(false);
      setDeathsToggle(false);
      setHolidaysToggle(false);
  };

  const handleBirthsFilter = (e) => {
    if (birthsToggle === false) {
      setBirthsToggle(true);
      setEventsToggle(false);
      setDeathsToggle(false);
      setHolidaysToggle(false);
    } else if (birthsToggle === true) setBirthsToggle(false);
  };

  const handleDeathsFilter = (e) => {
    if (deathsToggle === false) {
      setDeathsToggle(true);
      setEventsToggle(false);
      setBirthsToggle(false);
      setHolidaysToggle(false);
    } else if (deathsToggle === true) setDeathsToggle(false);
  };

  const handleHolidaysFilter = (e) => {
    if (holidaysToggle === false) {
      setHolidaysToggle(true);
      setEventsToggle(false);
      setBirthsToggle(false);
      setDeathsToggle(false);
    } else if (holidaysToggle === true) setHolidaysToggle(false);
  };

  return (
    <div className="event-page">
      <p>now showing events from: {date1}</p>
      <div className="dropdown">
        <button onClick={dropDownFilter} className="dropbtn">
          Filter Pages
        </button>
        <div id="myDropdown" className="dropdown-content">
          <button onClick={handleBirthsFilter}>Births</button>
          <button onClick={handleDeathsFilter}>Deaths</button>
          <button onClick={handleHolidaysFilter}>Holidays</button>
          <button onClick={handleEventsFilter}>Events</button>
        </div>
      </div>
      <div className="event-box">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {eventsToggle && (
              <div className="event">
                <div className='event-title'>
                  {eventsTitles[index - 1].replace(/_/g, " ")}
                </div>
                <div className="event-text">
                  <div>
                    <p>{eventsExtract[-1 + index]}</p>
                  </div>
                  <a href={eventsLink[-1 + index]}>Click to read more</a>
                </div>
                <div className="event-image">
                  <img
                    src={eventsSources[-1 + index]} alt="img"/>
                </div>
              </div>
            )}

            {birthsToggle && (
              <div className="births">
                <div className='event-title'>
                  {eventsTitles[index - 1].replace(/_/g, " ")}
                </div>
                <div className="birth-text">
                  <div>
                    <p>{birthsExtract[-1 + index]}</p>
                  </div>
                  <a href={birthsLink[-1 + index]}>Click to read more</a>
                </div>
                <div className="birth-image">
                  <img
                    src={birthsSources[-1 + index]}
                    alt="img"
                    width="40%"
                    height="40%"
                  />
                </div>
              </div>
            )}

            {deathsToggle && (
              <div className="deaths"><div className='event-title'>
                {eventsTitles[index - 1].replace(/_/g, " ")}
              </div>
              <div className="death-text">
                  <div>
                    <p>{deathsExtract[-1 + index]}</p>
                  </div>
                  <a href={deathsLink[-1 + index]}>Click to read more</a>
                </div>
                <div className="death-image">
                  <img
                    src={deathsSources[-1 + index]}
                    alt="img"
                    width="40%"
                    height="40%"
                  />
                </div>
              </div>
            )}

            {holidaysToggle && (
              <div className="holidays">
                <div className='event-title'>
                  {eventsTitles[index - 1].replace(/_/g, " ")}
                </div>
                <div className="holiday-text">
                  <div>
                    <p>{holidaysExtract[-1 + index]}</p>
                  </div>
                  <a href={holidaysLink[-1 + index]}>Click to read more</a>
                </div>
                <div className="holiday-image">
                  <img
                    src={holidaysSources[-1 + index]}
                    alt="img"
                    width="40%"
                    height="40%"
                  />
                </div>                
              </div>
            )}

            <button onClick={handleSetIndex}>Next</button>
            <p>
              current page {index} / {eventsExtract.length}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default HomepageData;
