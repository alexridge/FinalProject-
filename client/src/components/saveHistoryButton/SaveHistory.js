

const SaveHistory = ({ image, text, title }) => {

    const user_id = window.localStorage.getItem("user_id");
    const token = window.localStorage.getItem("token");

    const handleClick = async () => {

        let response = await fetch('/history', {
            method: 'POST',
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },        
        body: JSON.stringify({user_id, text, title, image})          

    });

        let data = await response.json()
        console.log(data)
    }

    return (
        <div>
            <button onClick={handleClick}>Save This Event</button>
        </div>
    )
}

export default SaveHistory;