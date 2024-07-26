import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../Pages/Homepage";
import SearchPage from "../Pages/SearchPage";
import ProfilePage from "../Pages/ProfilePage";
import EventsPage from "../Pages/EventsPage";
import ErrorPage from "../Pages/ErrorPage";



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