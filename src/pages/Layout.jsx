import { Outlet } from 'react-router-dom'
import MenuSide from '../components/MenuSide'
import { useState, useEffect } from 'react'
import Footer from './Footer'
import FormProject from '../components/FormProject'

function Layout() {
    const [display, setDisplay] = useState(false)
    const [slide, setSlide] = useState(false)
    const [displayForm, setDisplayForm] = useState(false)

    function handleDisplayForm() {
        setDisplayForm(true)
    }

    useEffect(() => {
        if (display) {
            setSlide(true)
        }
    }, [display])

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
            <button className="btnFloating" onClick={() => handleDisplayForm()}>
                <img src="public/img/iconAddButton.svg" alt="add project" />
            </button>
            {displayForm && <FormProject setDisplayForm={setDisplayForm} />}
        </main>
    )
}

export default Layout
