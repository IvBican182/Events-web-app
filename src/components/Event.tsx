import { addEvent , removeEvent} from "../Redux/eventCartSlice";
import eventStyles from "./Event.module.css";
import { useAppDispatch } from "../Redux/index";
import Button from "./Button";
import { useState } from "react";







export default function EventItem ({ event }: {event: any}) {
   const dispatch = useAppDispatch();
   const [isGoing, setIsGoing] = useState(false);

    function handleSubmit () {
        console.log({event})
        dispatch(addEvent(event));  
        setIsGoing(true)
           
    
    }

    function handleRemoveEvent() {
        dispatch(removeEvent(event.id))
        setIsGoing(false)
        
       

    }




    
    return (
    
            <li className={event.isGoing || isGoing ? eventStyles.isGoing : eventStyles.eventItem}>
                <div className={eventStyles.cardContent}>
                    <div className={eventStyles.cardMain}>
                        <h2 className={eventStyles.title}>{event.name}</h2>
                        {event.images.map((img: any) => {
                            if(img.ratio == "4_3") {
                                return <img className={eventStyles.image} key={img.url} src={img.url}></img>
                            }
                        })}
                        
                        {event.classifications.map((classification: any) => (
                            <p key={classification.genre.id}>Type : {classification.segment.name}/{classification.genre.name}/{classification.subGenre.name}</p>
                        ))}
                        <p>Date: {event.dates.start.localDate} at {event.dates.start.localTime}</p>
                        <p>Location: {event._embedded.venues.map((venue: any) =>  <span key={venue.id}>{venue.name}</span>)}</p> 
                        {event.priceRanges ? event.priceRanges.map((prices: any) => (
                            <p key={prices.min}>Price range - from {prices.min}{prices.currency} to {prices.max}{prices.currency}</p>)
                            ) : <p>no price shown</p>} 
                    </div>
                    <p className={eventStyles.eventActions}>
                        <button onClick={() => window.open(event.url)}>VISIT PAGE</button>
                        <Button text={event.isGoing || isGoing ? "REMOVE" : "ADD"} actions = {event.isGoing || isGoing ? handleRemoveEvent : handleSubmit}/>
                    </p>
                </div>               
            </li>
        
    )

}

