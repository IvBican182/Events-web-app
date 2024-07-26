import { useEffect, useState } from "react";
import EventItem from "../../components/eventItem/Event";
import eventStyle from "./EventsPage.module.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function EventsPage () {
    const [loadedData, setLoadedData] =useState<any>([])

    let url: string = "https://app.ticketmaster.com/discovery/v2/events.json?";
    let apiKey: string = "apikey=H5W8WhZBkSjNoZnLpYJMwj0G2mMlxqVE";
    
    

    const handleFetchData = async () => {
        try {
            const response = await fetch(url + apiKey);
            const data = await response.json();

            const modifiedEvents = data._embedded.events.map((event: any) => {
                event.isGoing = false;
                return event;
            })

            //setLoadedData(data._embedded.events);  
            setLoadedData(modifiedEvents);
    
        } catch(error) {
            throw new Error("Unable to fetch data");
        }
    }
    
    useEffect(() => {
        handleFetchData();
    },[])

    console.log(loadedData);


    return (
        <div className="container">
            <Container className={eventStyle.eventContainer}>
                <Row className={eventStyle.row}>
                    {loadedData.map((event : any) => 
                         <Col key={event.id} md="4" className={eventStyle.card}><EventItem event={event}/></Col>
                    )}
                </Row>
            </Container>
        </div>
        
    )
}

