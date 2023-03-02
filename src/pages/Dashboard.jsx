import Breadcrumb from '../components/Breadcrumb'

function Dashboard() {
    return (
        <main className="dashboard">
            <div className="container">
                <header className="dashboard__header">
                    <Breadcrumb>dashboard</Breadcrumb>
                    <div className="dashboard__header__top">
                        <div className="dashboard__header__top__search">
                            <button type ="submit" className="dashboard__header__top__search--submit">
                                <img src="/public/img/search.svg" alt="search" />
                            </button>
                            <input className='dashboard__header__top__search--input' type="text" placeholder='search project or client' />
                        </div>
                        <div className='dashboard__header__top__right'>
                            <div>add new</div>
                            <div className='dashboard__header__top__right__user'>
                                bell
                                <div className='dashboard__header__top__right__user__profile'>profile</div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </main>
    )
}

export default Dashboard
