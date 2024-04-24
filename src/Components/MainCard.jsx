import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import './Css/MainCard.css'

function App() {

    const [cardData, setCardData] = useState([]);
    useEffect(() => {
        fetch('https://api.wefin.in/getcreditdarddetails')
            .then(res => res.json())
            .then(json => {
                const cardDetails = json.data.cardDetails;
                setCardData(cardDetails);
            })
    }, []);

    function formatNumber(value) {
        if (value >= 1000) {
            const formattedValue = (value / 1000).toFixed(1);
            if (formattedValue.endsWith('.0')) {
                return formattedValue.slice(0, -2) + 'k';
            }
            return formattedValue + 'k';
        }
        return value.toString();
    }

    return (
        <section className="Container">
            <div className='header'>
                <h2>{cardData.length} Credit Cards for you</h2>
                <div>
                    <Button variant="primary">Compare Credit Cards <span>{0}</span></Button>
                    <Button variant="primary" style={{ backgroundColor: 'white', color: 'black', border: 'none' }}>Filter <i className="bi bi-sliders2"></i></Button>
                </div>
            </div>

            {cardData.map((card, index) => (
                <div key={index} className='container_card'>
                    <div className='card_img'>
                        <img style={{ height: '120px', margin: '10px' }} src={card.card_image__c} alt={card.card_name__c} />
                    </div>
                    <div className='container_main'>
                        <div className='container_description' >
                            <h2 style={{ color: 'rgb(40, 7, 112)' }}>{card.card_name__c}</h2>
                            <p>{card.card_description__c}</p>
                        </div>
                        <div className='container_description_2' >
                            <div className='container_fees'>
                                <h2>1st Year Fees <i className="bi bi-info-circle-fill"></i></h2>
                                <p>₹: {card.joining_fee_amount__c}</p>
                            </div>
                            <div className='container_perks'>
                                <h2>Best Suitable for <i className="bi bi-info-circle-fill"></i></h2>
                                <div className='container_icon'>
                                    {card.bestSuited.map((suitability, index) => (
                                        <div key={index} className='suit'>
                                            <img style={{ height: '20px', width: '20px', marginRight: '5px' }} src={suitability.image} alt={suitability.name} />
                                            <span>{suitability.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='container_criteria'>
                                <h2>Qualifying Criteria <i className="bi bi-info-circle-fill"></i></h2>
                                <p>Age: {card.age__c} Y min | Monthly income: {formatNumber(card.monthly_income__c)}</p>
                            </div>
                        </div>
                        <div className='container_Buttons'>
                            <Button style={{ backgroundColor: 'transparent', color: 'black', border: 'none', display: 'flex', alignItems: 'center', marginRight: '10px', height: '30px' }}>
                                <i className="bi bi-plus-circle" style={{ color: 'blue', fontSize: '22px' }}> </i>  <span style={{ marginLeft: '10px' }}>Know More</span>
                            </Button>

                            <Button variant="primary" style={{ height: '30px' }}>Apply Now</Button>
                        </div>
                    </div>
                    {/* <div style={{ marginRight: '10px', padding: '10px 0px' }}>
                        <Button style={{ backgroundColor: 'white', color: 'rgb(0, 0, 255)', border: 'none', display: 'flex', alignItems: 'center', marginRight: '10px' }}>
                            <i className="bi bi-plus-circle" style={{ color: 'blue', fontSize: '25px' }}> </i>  <span style={{ marginLeft: '10px' }}>Compare</span>
                        </Button>
                    </div> */}
                </div>
            ))}
        </section>
    );
}

export default App;