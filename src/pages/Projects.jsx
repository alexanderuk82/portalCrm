import { useState } from 'react'
import TopHeader from '../components/TopHeader'
function Projects() {
    const [showBox, setShowBox] = useState(false)

    return (
        <main className="dashboard">
            <div className="container">
                <TopHeader
                    showBox={showBox}
                    setShowBox={setShowBox}
                    title="projects"
                />
            </div>
        </main>
    )
}

export default Projects
