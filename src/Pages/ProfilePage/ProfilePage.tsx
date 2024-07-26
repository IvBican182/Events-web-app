import { useAppSelector } from "../../Redux/index";
import { Container, Row, Col } from "react-bootstrap";
import EventItem from "../../components/eventItem/Event";




export default function ProfilePage() {
    const events = useAppSelector(state => state.eventCart.events)

    return (
        <>
        <h2>MY EVENTS</h2>
        <div className="container">
            <Container>
                <Row>
                    {events.map((event : any) => 
                         <Col key={event.id} md="4"><EventItem event={event}/></Col>
                    )}
                </Row>
            </Container>
        </div>
        </>

    )
}

