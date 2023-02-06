import { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar'
import './ProfilePage.css';

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
        <div>
            <Navbar />
            <h2>Welcome To Your Saved History</h2>
            <div>
                {historyData != null && historyData.map((event) => {
                    return (
                        <div key={event._id}>
                            <p>{event.title}</p>
                            <p>{event.text}</p>
                            <img src={event.image} alt="Historical" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProfilePage;