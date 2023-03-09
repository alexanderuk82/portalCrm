import { Outlet, useNavigate } from 'react-router-dom'
import MenuSide from '../components/MenuSide'
import { useState, useEffect } from 'react'
import Footer from './Footer'


function Layout() {
    const [display, setDisplay] = useState(false)
    const [slide, setSlide] = useState(false)

    useEffect(() => {
        if (display) {
            setSlide(true)
        }
    }, [display])

    const navigate = useNavigate()

    return (
        <main>
            <aside className="aside">
                <img src="/public/img/logo.svg" alt="logo" />
                <button onClick={() => setDisplay(true)}>
                    <img src="/public/img/menu.svg" alt="menu-icon" />
                </button>
                <MenuSide
                    setDisplay={setDisplay}
                    display={display}
                    setSlide={setSlide}
                    slide={slide}
                />
            </aside>

            <Outlet />
            <Footer />
            <button
                className="btnFloating"
                onClick={() => navigate('/projects/new')}
            >
                <img src="/public/img/iconAddButton.svg" alt="add project" />
            </button>
        </main>
    )
}

export default Layout
