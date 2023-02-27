import { Outlet } from 'react-router-dom'
import MenuSide from '../components/MenuSide'

function Layout() {
    return (
        <main>
            <aside className="aside">
                <img src="/public/img/logo.svg" alt="logo" />
                <button>
                    <img src="/public/img/menu.svg" alt="menu-icon" />
                </button>
                <MenuSide />
            </aside>

            <Outlet />
        </main>
    )
}

export default Layout
