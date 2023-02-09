import React, { useState, useEffect, Fragment } from "react";
// import PropTypes from 'prop-types';
import './homepageData.css';
import Footer from "./footer/footer";
import SaveHistory from "./saveHistoryButton/SaveHistory";



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
      const api_key = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJiMzZhYjNlOTY2MjU4MjA5YWY4OGEyZjdkYzFmZWZmNyIsImp0aSI6IjZlZmI1ZDNlNGY4NzE3Mzc3NDcyOGM5MWIyYzM4Y2MxOWZmYjdlZGE5ZTA1Njc3MDZjM2ZhMTQyYTc3MDU0ZWRkODI1ZWQyOTc1NzU4Y2IyIiwiaWF0IjoxNjc1OTM2MDY1LjY2Njk5MywibmJmIjoxNjc1OTM2MDY1LjY2Njk5NywiZXhwIjoxNjc1OTUwNDY1LjY2MTc2LCJzdWIiOiIiLCJpc3MiOiJodHRwczovL21ldGEud2lraW1lZGlhLm9yZyIsInJhdGVsaW1pdCI6eyJyZXF1ZXN0c19wZXJfdW5pdCI6NTAwMCwidW5pdCI6IkhPVVIifSwic2NvcGVzIjpbImJhc2ljIl19.ZilXP9jxmG2xU0S5pb2BijwnERzfYLagsSv9Jtznx4HujUSAkJQAkJpMacwNdJ20HWs34w0vOiUIMNPxzerYF9hWLolGYFqrJ_q6RQJumE4D5DHIkPMjU2NrazvFWDT46pjDsMOl3txBRruF0NQiaZEg7x4zj1Y6I-JaQIhTN2zyANzGmLKW4XfX-WU46AZMYit7uya7z89QDOKq6Ro7VgSJNUTSPthFTCw2-XwjQCYPbOtxrbUD44nz2Y6SZavugJzg6pcTOJfN2Aips4n0KXEEJYC1lyLJEXwKvee845fUmNueKYVcFogCC0yEhjQvH9LtHTJsl0WIevJ20xrOq1NQWOWODknO9aec1UB8D28be0g0TJqN-Td7MgY6Ti6VLZOczuEH6m-kXEzeUikjlSJh51zljd0RtyXivfA1EcIUSSh7J8riy69DnhIr_w2tWZH86YSaoI-BAh_1S6zuOAwuO-MMVWrGB_KRZEMlJy6piTrMoVkxad1FM3Br2QF9qvJXL0iMQvBzAWjQ1_-JizFz1iyQOxKzLUaOYOTCzPoJoLZeZYGi4nPJ6uqXKnPowSJ33a2GqdTC-Z1DUSSoOw50ZojgRMX-kekQFeygqQ4UIrRa-bBPXQJs8tS4do0Fs0Mi8kf3SQ5tUeXRWDdARwFgNVut766-5ABeekILFfE'
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
      console.log(data)
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
      const birthsTitles = birthsPages.map(page => (page[0].title));
      const holidaysTitles = holidaysPages.map(page => (page[0].title));
      const deathsTitles = deathsPages.map(page => (page[0].title));




      setIndex(1);
      setEventsTitles(eventsTitles);
      setData(data);
      setLoading(false);

      setEventsSources(eventsSources);
      setEventsExtract(eventsExtract);
      setEventsLink(eventsLink);
      console.log();

      setBirthsTitles(birthsTitles)
      setBirthsSources(birthsSources);
      setBirthsExtract(birthsExtract);
      setBirthsLink(birthsLink);
      console.log(birthsLink[0]);
      setDeathsTitles(deathsTitles)
      setDeathsSources(deathsSources);
      setDeathsExtract(deathsExtract);
      setDeathsLink(deathsLink);
      console.log(deathsLink[0]);

      setHolidaysTitles(holidaysTitles)
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
      <p>Now Showing Events Happened in Date - {date1}</p>
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
                    <a href={eventsLink[-1 + index]}>Click to read more</a>
                <div className="event-image">
                  <img
                    src={eventsSources[-1 + index]} alt="img"/>
                </div>
                </div>
                </div>
                  <SaveHistory sentText={birthsExtract[-1 + index]}  sentImage={birthsSources[-1 + index]} sentTitle={"event"}/>
              </div>
            )}

            {birthsToggle && (
              <div className="births">
                <div className='event-title'>
                  {birthsTitles[index - 1].replace(/_/g, " ")}
                </div>
                <div className="event-text">
                  <div>
                    <p>{birthsExtract[-1 + index]}</p>
                    <a href={birthsLink[-1 + index]}>Click to Read More</a>
                <div className="birth-image">
                  <img
                    src={birthsSources[-1 + index]}
                    alt="img"
                  />
                </div>
                </div>
                </div>
                <SaveHistory sentText={birthsExtract[-1 + index]}  sentImage={birthsSources[-1 + index]} sentTitle={"event"}/>
              </div>
            )}

            {deathsToggle && (
              <div className="deaths">
                <div className='event-title'>
                {deathsTitles[index - 1].replace(/_/g, " ")}
              </div>
              <div className="event-text">
                  <div>
                    <p>{deathsExtract[-1 + index]}</p>  
                    <a href={deathsLink[-1 + index]}>Click to Read More</a>               
                <div className="death-image">
                  <img
                    src={deathsSources[-1 + index]}
                    alt="img"
                  />
                </div>
                </div>
                </div>
                <SaveHistory sentText={birthsExtract[-1 + index]}  sentImage={birthsSources[-1 + index]} sentTitle={"event"}/>
              </div>
            )}

            {holidaysToggle && (
              <div className="holidays">
                <div className='event-title'>
                  {holidaysTitles[index - 1].replace(/_/g, " ")}
                </div>
                <div className="event-text">
                  <div>
                    <p>{holidaysExtract[-1 + index]}</p>
                    <a href={holidaysLink[-1 + index]}>Click to Read More</a>                
                <div className="holiday-image">
                  <img
                    src={holidaysSources[-1 + index]}
                    alt="img"
                  />
                </div>   
                </div>
                </div>     
                <SaveHistory sentText={birthsExtract[-1 + index]}  sentImage={birthsSources[-1 + index]} sentTitle={"event"}/>        
              </div>
            )}

            <button onClick={handleSetIndex}>Next</button>
            <p>
              Current Page {index} / {eventsExtract.length}
            </p>
            </>
            )}
          </div>
      </div>
  );
};

      export default HomepageData;
