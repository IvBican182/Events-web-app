import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../Pages/Homepage/Homepage";
import SearchPage from "../Pages/SearchPage/SearchPage";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import EventsPage from "../Pages/EventsPage/EventsPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";



export const router = createBrowserRouter([
    { 
        path: "/", 
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <Homepage /> },
            { path: "/search", element: <SearchPage /> },
            { path: "/profile", element: <ProfilePage /> },
            { path: "/events", element: <EventsPage /> },
        ]
    }
])