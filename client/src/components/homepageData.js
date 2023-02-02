import React, { useState, useEffect } from "react";
import './homepageData.css';
import apiKey from './apiKey.env'

const HomepageData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [eventsTitles, setEventsTitles ] = useState(null);
  const [eventsImage, setEventsImage ] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      let today = new Date();
      let month = today.getMonth() + 1;
      let day = today.getDate();
      let url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`;

      let response = await fetch( url, {
        method: 'get',
          headers: {
              'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJiMzZhYjNlOTY2MjU4MjA5YWY4OGEyZjdkYzFmZWZmNyIsImp0aSI6ImQxMjUxNjQzZDYxOWI1NGY4MjI2ZTlmNjlmZmFkNzdmZmVhMjA3Y2QwMzcxYTJhM2RlMjE5ZGNhNzc2ZDcyYmJjOGJiYmM4YmQxNTEwYzQ0IiwiaWF0IjoxNjc1MjYzMDk3LjgzODEyOSwibmJmIjoxNjc1MjYzMDk3LjgzODEzNiwiZXhwIjoxNjc1Mjc3NDk3LjgzMTk0Miwic3ViIjoiIiwiaXNzIjoiaHR0cHM6Ly9tZXRhLndpa2ltZWRpYS5vcmciLCJyYXRlbGltaXQiOnsicmVxdWVzdHNfcGVyX3VuaXQiOjUwMDAsInVuaXQiOiJIT1VSIn0sInNjb3BlcyI6WyJiYXNpYyJdfQ.Hk3ISW7Y-6DKQrQXF4xnEU-IXkk3jKARu1A92vdj-1-jVLrRajvH0YqVMU7_7MtYmgxBS40ETQw47zp2JTd8TSttK0_yWzM_gkFJL5f9VST3s9_Ux2PfUaucIqavZwnfooCQUpCBDirWkjFWycFtTYM1ywm9MOry2h1AU6u5Zmv36Urwzgzj8J0j-JwdrZI4iNzRNKAInv6Pq2wdvAM2Ce1JC-rDvD8eh52mv4xN1bweKx0hoHZxykL49Daf6uUrdrjLVmW7VhMilEDIbj6AJG9cbgfPhkOkhUlqEvXdudjz3Z5B8szmxWgTukYf8pD54PIrYImaio08AbEVmexHD3f8n0VVIdtWsVfscZZ6QiN4J1ncZGaZ3EaYYQcZcoPe71eack6Qb8-QIThD2IzoXOseB0_XIyT-_BwHWaLPV1QQIFlwRyXNl4Ucjn0_6ISZayOTqHgNz_BS89_yaReHeyGmBh2wpw66PxH9CpiIGI-hFdB4mSehEuJ1oFeHIyoL673BCTKsFufIBggiPkTlh8fTjTVJvlXW3uOPlGUjV_D224Uqr0S4U3sYXsO8QvuwNgZK3a7PEEylq3sv4K3Oa-Dw6SFvb4GbxA0fA09BDxerkFlKkgXpVEKH_98X0vlipr9Dgg02WS9INX6AqOBOvDadXBuivfXYe2oUOlke6o0',
              'Api-User-Agent': 'This Day in History (alexridge2309@gmail.com)'
          }
      });

      const data = await response.json();
      setData(data);
      setLoading(false);

      const dataEvents = data.events

      const eventsTitles = dataEvents.map(item => (item.text));
      setEventsTitles(eventsTitles);

      // const eventsImage = dataEvents.map(item => (item.pages.thumbnail.source));
      const eventsImage = data.events[0].pages[0].thumbnail.source
      console.log(data.events[0].pages[0].thumbnail)
      setEventsImage(eventsImage)
    };

    fetchData();
    }, []);

    return (
      <div className="event-page">
        <div className="event-box">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul><li>
              <img src={ eventsImage } alt="Trees" height="200" /><br/>
              { eventsTitles[0] }
              </li>
            </ul>
          )}
        </div>
      </div>
    );

  };

export default HomepageData;
