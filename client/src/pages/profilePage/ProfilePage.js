import { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/navbar'
import './ProfilePage.css';
import Footer from '../../components/footer/footer';


const ProfilePage = () => {

    const [historyData, setHistoryData] = useState(null)

    useEffect(() => {
        fetch('/history', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },

        })
            .then(response => response.json())
            .then(data => setHistoryData(data))
    }, [])



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
            <Footer />
        </div>
    )
}

export default ProfilePage;
