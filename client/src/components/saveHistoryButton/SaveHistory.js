

const SaveHistory = (props) => {
    
    let { sentImage, sentText, sentTitle } = props
    const user_id = window.localStorage.getItem("user_id");
    const token = window.localStorage.getItem("token");

    const handleClick = async () => {
        console.log("Hi Naomi", sentImage, sentText, sentTitle)
        let response = await fetch('/history', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`,
                user_id: user_id,
                text: sentText,
                title: sentTitle,
                image: sentImage,

            },        
            // body: JSON.stringify({user_id, sentText, sentTitle, sentImage}),

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