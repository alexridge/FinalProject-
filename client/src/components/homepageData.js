import React, { useState, useEffect } from "react";
import './homepageData.css';
import api from './api/apiData'


const HomepageData = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(null)
  // const [eventsTitles, setEventsTitles ] = useState(null);
  // const [eventsImage, setEventsImage ] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try{
        const response = await api.get('/')
        console.log('response received in try catch homepage data')
        setData('respone data items ' + response.data.items)
        console.log('process.env ' + process.env)
        console.log('data ' + data)
        console.log('response '+ response[0])
      }catch (err){
        console.log(`catch error in homepageData from axios useEffect ${err}`);
      }
    }

      setLoading(false);
      console.log(data)

      // const dataEvents = data.events
      // const eventsTitles = dataEvents.map(item => (item.text));
      // setEventsTitles(eventsTitles);

      // const eventsImage = data.events[0].pages[0].originalimage.source
      // console.log(data.events[0].pages[0].originalimage)
      // setEventsImage(eventsImage)

    fetchPosts()
  }, []);

    return (
      <div className="event-page">
        <div className="event-box">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul><li>
              {/* <img src={ eventsImage } alt="Trees" height="200" /><br/>
              { eventsTitles[0] } */}
              </li>
            </ul>
          )}
        </div>
      </div>
    );

  };

export default HomepageData;
