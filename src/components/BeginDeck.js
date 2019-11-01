import React from 'react';


const BeginDeck = ({ imagesArray, setCardChoose }) => {

    const handleClick = () => {
        setCardChoose(true)
    }
    const showCards = () => {
        return (
            <>
                <p>Choose a Card</p>
                <button onClick={handleClick}>Start</button>
                <div style={{width: "5"}}>
                    {imagesArray.map((image, index) => 
                        <img src={`${image}`} key={index} alt=""/>
                   
                    )}
                </div>
            </>
        )
    }
    return (        
        <div> 
        {imagesArray.length === 21  ? showCards() : <h1>Loading...</h1>}
        
        </div>
    
    )
}

export default BeginDeck
