import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FormProject,{action as newProject} from './components/FormProject'
import Dashboard, { loader as dashboardLoader } from './pages/Dashboard'
import Layout from './pages/Layout'

// import NewProject from './pages/NewProject'
import Projects from './pages/Projects'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Dashboard />,
                loader: dashboardLoader,
            },
            {
                path: '/projects',
                element: <Projects />,
            },
            {
                path: '/projects/new',
                element: <FormProject />,
                action: newProject,
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
