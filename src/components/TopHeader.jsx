import { Link } from 'react-router-dom'
import Breadcrumb from './Breadcrumb'

function TopHeader({ showBox, setShowBox, title }) {
    function handleShowBox() {
        setShowBox(true)

        if (showBox) {
            setShowBox(false)
        }
    }
    return (
        <header className="dashboard__header">
            <Breadcrumb>{title}</Breadcrumb>
            <div className="dashboard__header__top">
                <div className="dashboard__header__top__search">
                    <button
                        type="submit"
                        className="dashboard__header__top__search--submit"
                    >
                        <img src="/public/img/search.svg" alt="search" />
                    </button>
                    <input
                        className="dashboard__header__top__search--input"
                        type="text"
                        placeholder="search project or client"
                    />
                </div>
                <div className="dashboard__header__top__right">
                    <button className="btn status">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_146_3804)">
                                <path
                                    d="M13 7H11V11H7V13H11V17H13V13H17V11H13V7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                                    fill="hsl(220, 6%, 18%)"
                                />
                            </g>
                        </svg>
                        add new project
                    </button>
                    <div className="dashboard__header__top__right__user">
                        <img src="public/img/bell.svg" alt="notification" />
                        <div
                            onClick={() => handleShowBox()}
                            className="dashboard__header__top__right__user__profile"
                        >
                            <div className="dashboard__header__top__right__user__profile--img">
                                <img
                                    src="public/img/user.svg"
                                    alt="userPicture"
                                />
                                <p className="dashboard__header__top__right__user__profile--name">
                                    Alexander
                                </p>
                                <img
                                    className={`${showBox && 'rotate'}`}
                                    src="public/img/carretDown.svg"
                                    alt="dropbox"
                                />
                            </div>

                            <div
                                className={`${
                                    showBox
                                        ? 'dashboard__header__top__right__user__profile__dropDownBox showBox'
                                        : 'dashboard__header__top__right__user__profile__dropDownBox hide'
                                }`}
                            >
                                <div className="dashboard__header__top__right__user__profile__dropDownBox--title">
                                    <p>hello alex 🖐️</p>
                                </div>

                                <div className="dashboard__header__top__right__user__profile__dropDownBox__links">
                                    <Link
                                        className="dashboard__header__top__right__user__profile__dropDownBox__links--link"
                                        to="#"
                                    >
                                        profile settings
                                    </Link>
                                    <Link
                                        className="dashboard__header__top__right__user__profile__dropDownBox__links--link"
                                        to="#"
                                    >
                                        payment settings
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="title">{title}</h1>
        </header>
    )
}

export default TopHeader
