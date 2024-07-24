import { addEvent , removeEvent} from "../../Redux/eventCartSlice";
import eventStyles from "./Event.module.css";
import { useAppDispatch } from "../../Redux/index";
import Button from "../button/Button";





export default function EventItem ({ event }: {event: any}) {
   const dispatch = useAppDispatch();

    function handleSubmit () {
        console.log({event})
        dispatch(addEvent(event));
    }

    function handleRemoveEvent() {
        dispatch(removeEvent(event.id))

    }


    
    return (
            <li className="event-item">
                <article className={eventStyles.card}>
                    <div className={eventStyles.card}>
                        <h2>{event.name}</h2>
                        {event.images.map((img: any) => {
                            if(img.ratio == "4_3") {
                                return <img key={img.url} src={img.url}></img>
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
                    <p className="shop-item-actions">
                        <button onClick={() => window.open(event.url)}>VISIT PAGE</button>
                        <Button text={event.going ? "REMOVE" : "ADD"} actions = {event.going ? handleRemoveEvent : handleSubmit}/>
                    </p>
                </article>

            </li>
    )

}

