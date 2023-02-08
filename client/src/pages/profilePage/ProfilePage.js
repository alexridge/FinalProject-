import { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar'
import './ProfilePage.css';

const ProfilePage = () => {

    const [historyData, setHistoryData] = useState(null)
    const [token, setToken] = useState(window.localStorage.getItem("token"));
    const user_id = window.localStorage.getItem("user_id");

    console.log("token",token);
    console.log("user", user_id)

    useEffect(() => {
        fetch('/history', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'User_ID': `${user_id}`
            },

        })
            .then(response => response.json())
            .then(data => setHistoryData(data))
    }, [token, user_id])

    console.log(historyData)
   

    return (
        <div id="main-container">
            <Navbar />
            <h2>Welcome To Your Saved History</h2>
            <div>
                {historyData != null && historyData.map((event) => {
                    return (
                        <div className='historical-event' key={event._id}>
                            <h3>{event.title}</h3>
                            <p className='event-text'>{event.text}</p>
                            <img src={event.image} alt="Historical" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProfilePage;