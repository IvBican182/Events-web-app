import { useEffect, useState } from "react";
import EventItem from "../components/Event";
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

          
            setLoadedData(modifiedEvents);
            

    
        } catch(error) {
            throw new Error("Unable to fetch data");
        }
    }

    
    useEffect(() => {
        handleFetchData();
    },[])


    console.log(loadedData);


    const date = new Date();

    function monday(d: any) {
        d = new Date(d);
        let day = d.getDay(),
         diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
        let result = new Date(d.setDate(diff + 7));
        let currentDay = result.getDate();
        let currentMonth = result.getMonth() + 1;
        let currentYear = result.getFullYear();
        console.log(result);
        return `${currentYear}-0${currentMonth}-${currentDay}`;

    }

    let dates:any = monday(date)
    console.log(dates);



    return (
        <div className="container">
            <Container className={eventStyle.eventContainer}>
                <Row className={eventStyle.row}>
                    
                        <h1>This week</h1>
                        {loadedData.map((event : any) => {
                            console.log(event.dates.start.localDate)
                            return event.dates.start.localDate < dates &&
                            <Col key={event.id} md="4"><EventItem event={event}/></Col> 
                        }
                        
                        )}
                    
                    
                        <h1>Upcoming shows</h1>
                        {loadedData.map((event : any) => {
                            return event.dates.start.localDate > dates &&
                            <Col key={event.id} md="4"><EventItem event={event}/></Col> 
                        }
                        )}
                    

                </Row>
            </Container>
        </div>
        
    )
}

