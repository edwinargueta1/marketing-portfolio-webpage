import React from 'react';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Portfolio from './Pages/Portfolio';
import Home from './Pages/Home';
import PolishingTheProfessionalPage from './Pages/PolishingTheProfessional';
import ProjectPage from './Pages/ProjectPage';
import Contact from './Pages/Contact';
import TheAbleShowPage from './Pages/TheAbleShowPage';
import Error from './Pages/Error';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: "/portfolio",
                element: <Portfolio/>
            },
            {
                path: "/portfolio/PolishingTheProfessional",
                element: <PolishingTheProfessionalPage/>
            },
            {
                path: "/portfolio/VanesVeggieVisits",
                element: <ProjectPage/>
            },
            {
                path: "/portfolio/ALSNetwork",
                element: <ProjectPage/>
            },
            {
                path: "/portfolio/TheAbleShow",
                element: <TheAbleShowPage/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "*",
                element: <Error/>
            }]
    }
]);

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
    <RouterProvider router={router}/>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
