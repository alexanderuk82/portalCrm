import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FormProject, { action as newProject } from './components/FormProject'
import Dashboard, { loader as dashboardLoader } from './pages/Dashboard'
import EditProject, {
    loader as editProject,
    action as editedProject,
} from './pages/EditProject'
import Layout from './pages/Layout'
import Projects from './pages/Projects'
import { action as deleteProject } from './components/BoxProject'

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
            {
                path: '/projects/:projectId/edit',
                element: <EditProject />,
                loader: editProject,
                action: editedProject,
            },
            {
                path: '/projects/:projectId/remove',
                action: deleteProject,
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
