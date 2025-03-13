import React from 'react';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
// import Home from './Pages/Home';
// import PolishingTheProfessionalPage from './Pages/PolishingTheProfessional';
// import Contact from './Pages/Contact';
// import TheAbleShowPage from './Pages/TheAbleShowPage';
// import Error from './Pages/Error';
// import VanesVeggieVisits from './Pages/VanesVeggieVisits';
// import ALSNetwork from './Pages/ALSNetwork';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        // children: [
        //     {
        //         path: '/',
        //         element: <Home />
        //     },
        //     {
        //         path: "/PolishingTheProfessional",
        //         element: <PolishingTheProfessionalPage/>
        //     },
        //     {
        //         path: "/VanesVeggieVisits",
        //         element: <VanesVeggieVisits/>
        //     },
        //     {
        //         path: "/ALSNetwork",
        //         element: <ALSNetwork/>
        //     },
        //     {
        //         path: "/TheAbleShow",
        //         element: <TheAbleShowPage/>
        //     },
        //     {
        //         path: "/contact",
        //         element: <Contact/>
        //     },
        //     {
        //         path: "*",
        //         element: <Error/>
        //     }]
    }
]);

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
    <RouterProvider router={router}/>
);