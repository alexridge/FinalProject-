import React, { useState, useEffect, Fragment} from "react";
// import PropTypes from 'prop-types';
import './homepageData.css';
import Footer from "./footer/footer";
import SaveHistory from "./saveHistoryButton/SaveHistory";



const HomepageData = () => {
  const [useData, setData] = useState(null);
  const [loading, setLoading] = useState(true);



  // const [newDay, setNewDay] = useState(null); 
  const [day, setDay] = useState(null); 
  // const [newMonth, setNewMonth] = useState(null); 
  const [month, setMonth] = useState(null); 
  

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
  const [eventsTitles, setEventsTitles] = useState(null);


  useEffect(() => {
    const fetchData = async () => {

      
      const api_key = process.env.REACT_APP_API_KEY;
      const user_agent = process.env.REACT_APP_USER_AGENT;

  

      let today = new Date();
      let month = today.getMonth() + 1;
      let day = today.getDate();
      let url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`;

      let response = await fetch(url, {
        method: "get",
        headers: {
          Authorization:
            `Bearer ${api_key}`,
          "Api-User-Agent": `${user_agent}`
        },
      });

    
      const data1 = await response.json();
      // dataHandler(data1);
   
      
      console.log(document.getElementById('newDate').value);
      
      //  let useData = data1
       
      // const eventsTitles = data.events.map(item => (item.text));
      // console.log(eventsTitles);
      const eventsPages = useData.events.map((event) => event.pages);
      const birthsPages = useData.births.map((birth) => birth.pages);
      const deathsPages = useData.deaths.map((death) => death.pages);
      const holidaysPages = useData.holidays.map((holiday) => holiday.pages);
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
      // setData(data);
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
  }, [useData]);

     let handleSetIndex = () => {
       if (index > eventsLink.length - 1) {
         setIndex(1);
       } else {
      setIndex(index + 1); 
     }
    }
    let handleSetIndex2 = () => {
      if (index < 2) {
        setIndex(eventsLink.length);
      } else {
        setIndex(index - 1);
      }
    }

    let indexReset = () => {
      setIndex(1);
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
    function dataHandler (data) {
      setData(data); 
    }


     const subButton = async() => {
     const newDate = document.getElementById('newDate').value 
     const dateArr = newDate.split('-')
     const newDay = dateArr[2]
     const newMonth = dateArr[1]
    
    //  setDay(newDay);
    //  setMonth(newMonth);
     dateSetter1(`${newMonth}-${newDay}`);
     

     const api_key = process.env.REACT_APP_API_KEY;
      const user_agent = process.env.REACT_APP_USER_AGENT;
     let url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${newMonth}/${newDay}`;
    
     let response = await fetch(url, {
       method: "get",
       headers: {
         Authorization:
           `Bearer ${api_key}`,
         "Api-User-Agent": `${user_agent}`
        }});
        let data2 = await response.json() 
        dataHandler(data2);
        console.log(useData)
       
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
      indexReset();
  };

  const handleBirthsFilter = (e) => {
    if (birthsToggle === false) {
      setBirthsToggle(true);
      setEventsToggle(false);
      setDeathsToggle(false);
      setHolidaysToggle(false);
      indexReset();
    } else if (birthsToggle === true) setBirthsToggle(false);
  };

  const handleDeathsFilter = (e) => {
    if (deathsToggle === false) {
      setDeathsToggle(true);
      setEventsToggle(false);
      setBirthsToggle(false);
      setHolidaysToggle(false);
      indexReset();
    } else if (deathsToggle === true) setDeathsToggle(false);
  };

  const handleHolidaysFilter = (e) => {
    if (holidaysToggle === false) {
      setHolidaysToggle(true);
      setEventsToggle(false);
      setBirthsToggle(false);
      setDeathsToggle(false);
      indexReset();
    } else if (holidaysToggle === true) setHolidaysToggle(false);
  };

  return (
    <div className="event-page">
      <p>Now Showing Events Which Happened on Date: {date1}</p>
      <div className="dropdown">
        <button onClick={dropDownFilter} className="dropbtn">
          Filter Pages
        </button>
        <label>select a date</label>
        <input className="newDate" id="newDate" type="date" min="2023-01-01" max="2023-12-31" defaultValue="2023-02-09">
        </input>
        <button type="submit" className="submit-button" onClick={subButton}>submit</button>
        
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
            <button onClick={handleSetIndex2}>Back</button>
            <button onClick={indexReset}>Reset</button>
            <p>
              current page {index} / {eventsExtract.length}
            </p>
          </>
        )}
      </div>
    </div>
)};

      export default HomepageData;
