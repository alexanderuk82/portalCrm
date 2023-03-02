import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function MenuSide({ setDisplay, display, slide, setSlide }) {
    const location = useLocation()

    function handleClose() {
        setSlide(false)

        setTimeout(() => {
            setDisplay(false)
        }, 200)
    }

    return (
        <section className={display ? 'menuSide dblock' : 'menuSide'}
            onClick ={()=>handleClose()}
        >
            <div
                className={
                    slide
                        ? 'menuSide__menuSection slideLeft'
                        : 'menuSide__menuSection'
                }
            >
                <nav className="menuSide__menuSection__nav">
                    <button
                        className="menuSide__menuSection__nav__close"
                        onClick={() => handleClose()}
                    >
                        <img src="/public/img/close.svg" alt="close" />
                    </button>
                    <ul className="menuSide__menuSection__nav__list">
                        <li className="menuSide__menuSection__nav__list__item ">
                            <Link
                                className={`${
                                    location.pathname === '/'
                                        ? 'menuSide__menuSection__nav__list__item__link  linkActive'
                                        : 'menuSide__menuSection__nav__list__item__link'
                                }`}
                                to="/"
                            >
                                <svg
                                    width="20"
                                    height="17"
                                    viewBox="0 0 20 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10 2.69L15 7.19V15H13V9H7V15H5V7.19L10 2.69ZM10 0L0 9H3V17H9V11H11V17H17V9H20L10 0Z"
                                        fill="#F7F7F8"
                                    />
                                </svg>
                                dashboard
                            </Link>
                        </li>
                        <li className="menuSide__menuSection__nav__list__item ">
                            <Link
                                className={`${
                                    location.pathname === '/projects'
                                        ? 'menuSide__menuSection__nav__list__item__link  linkActive'
                                        : 'menuSide__menuSection__nav__list__item__link'
                                }`}
                                to="/projects"
                            >
                                <svg
                                    width="20"
                                    height="19"
                                    viewBox="0 0 20 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M18 4H15V2C15 0.89 14.11 0 13 0H7C5.89 0 5 0.89 5 2V4H2C0.89 4 0 4.89 0 6V17C0 18.11 0.89 19 2 19H18C19.11 19 20 18.11 20 17V6C20 4.89 19.11 4 18 4ZM7 2H13V4H7V2ZM18 17H2V15H18V17ZM18 12H2V6H5V8H7V6H13V8H15V6H18V12Z"
                                        fill="#F7F7F8"
                                    />
                                </svg>
                                projects
                            </Link>
                        </li>
                        <li className="menuSide__menuSection__nav__list__item ">
                            <Link
                                className={`${
                                    location.pathname === '/report'
                                        ? 'menuSide__menuSection__nav__list__item__link  linkActive'
                                        : 'menuSide__menuSection__nav__list__item__link'
                                }`}
                                to="/report"
                            >
                                <svg
                                    width="18"
                                    height="20"
                                    viewBox="0 0 18 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4 14H11V16H4V14ZM4 10H14V12H4V10ZM4 6H14V8H4V6ZM16 2H11.82C11.4 0.84 10.3 0 9 0C7.7 0 6.6 0.84 6.18 2H2C1.86 2 1.73 2.01 1.6 2.04C1.21 2.12 0.86 2.32 0.59 2.59C0.41 2.77 0.26 2.99 0.16 3.23C0.0600001 3.46 0 3.72 0 4V18C0 18.27 0.0600001 18.54 0.16 18.78C0.26 19.02 0.41 19.23 0.59 19.42C0.86 19.69 1.21 19.89 1.6 19.97C1.73 19.99 1.86 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2ZM9 1.75C9.41 1.75 9.75 2.09 9.75 2.5C9.75 2.91 9.41 3.25 9 3.25C8.59 3.25 8.25 2.91 8.25 2.5C8.25 2.09 8.59 1.75 9 1.75ZM16 18H2V4H16V18Z"
                                        fill="#F7F7F8"
                                    />
                                </svg>
                                report
                            </Link>
                        </li>
                        <li className="menuSide__menuSection__nav__list__item ">
                            <Link
                                className={`${
                                    location.pathname === '/admin'
                                        ? 'menuSide__menuSection__nav__list__item__link  linkActive'
                                        : 'menuSide__menuSection__nav__list__item__link'
                                }`}
                                to="/admin"
                            >
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16 12V16H2V12H16ZM17 10H1C0.45 10 0 10.45 0 11V17C0 17.55 0.45 18 1 18H17C17.55 18 18 17.55 18 17V11C18 10.45 17.55 10 17 10ZM4 15.5C3.18 15.5 2.5 14.83 2.5 14C2.5 13.17 3.18 12.5 4 12.5C4.82 12.5 5.5 13.17 5.5 14C5.5 14.83 4.83 15.5 4 15.5ZM16 2V6H2V2H16ZM17 0H1C0.45 0 0 0.45 0 1V7C0 7.55 0.45 8 1 8H17C17.55 8 18 7.55 18 7V1C18 0.45 17.55 0 17 0ZM4 5.5C3.18 5.5 2.5 4.83 2.5 4C2.5 3.17 3.18 2.5 4 2.5C4.82 2.5 5.5 3.18 5.5 4C5.5 4.82 4.83 5.5 4 5.5Z"
                                        fill="#F7F7F8"
                                    />
                                </svg>
                                admin
                            </Link>
                        </li>
                        <div className="divider"></div>
                        <p className="menuSide__menuSection__nav__list__title">
                            Extra section
                        </p>
                        <li className="menuSide__menuSection__nav__list__item ">
                            <Link
                                className={`${
                                    location.pathname === '/invoices'
                                        ? 'menuSide__menuSection__nav__list__item__link  linkActive'
                                        : 'menuSide__menuSection__nav__list__item__link'
                                }`}
                                to="/invoices"
                            >
                                <svg
                                    width="16"
                                    height="20"
                                    viewBox="0 0 16 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4 14H12V16H4V14ZM4 10H12V12H4V10ZM10 0H2C0.9 0 0 0.9 0 2V18C0 19.1 0.89 20 1.99 20H14C15.1 20 16 19.1 16 18V6L10 0ZM14 18H2V2H9V7H14V18Z"
                                        fill="#F7F7F8"
                                    />
                                </svg>
                                invoices
                            </Link>
                        </li>
                        <li className="menuSide__menuSection__nav__list__item ">
                            <Link
                                className={`${
                                    location.pathname === '/support'
                                        ? 'menuSide__menuSection__nav__list__item__link  linkActive'
                                        : 'menuSide__menuSection__nav__list__item__link'
                                }`}
                                to="/support"
                            >
                                <svg
                                    width="21"
                                    height="21"
                                    viewBox="0 0 21 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2 15.17V2H18V8H20V2C20 0.9 19.1 0 18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 20L4 16H13V14H3.17L2 15.17Z"
                                        fill="#F7F7F8"
                                    />
                                    <path
                                        d="M20.5 14H18.3L20 10H15V16H17V21L20.5 14Z"
                                        fill="#F7F7F8"
                                    />
                                </svg>
                                support
                            </Link>
                        </li>
                        <li className="menuSide__menuSection__nav__list__item ">
                            <Link
                                className={`${
                                    location.pathname === '/support'
                                        ? 'menuSide__menuSection__nav__list__item__link  linkActive'
                                        : 'menuSide__menuSection__nav__list__item__link'
                                }`}
                                to="/support"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M17.4301 10.98C17.4701 10.66 17.5001 10.34 17.5001 10C17.5001 9.66 17.4701 9.34 17.4301 9.02L19.5401 7.37C19.7301 7.22 19.7801 6.95 19.6601 6.73L17.6601 3.27C17.5701 3.11 17.4001 3.02 17.2201 3.02C17.1601 3.02 17.1001 3.03 17.0501 3.05L14.5601 4.05C14.0401 3.65 13.4801 3.32 12.8701 3.07L12.4901 0.42C12.4601 0.18 12.2501 0 12.0001 0H8.00008C7.75008 0 7.54008 0.18 7.51008 0.42L7.13008 3.07C6.52008 3.32 5.96008 3.66 5.44008 4.05L2.95008 3.05C2.89008 3.03 2.83008 3.02 2.77008 3.02C2.60008 3.02 2.43008 3.11 2.34008 3.27L0.340084 6.73C0.210084 6.95 0.270084 7.22 0.460084 7.37L2.57008 9.02C2.53008 9.34 2.50008 9.67 2.50008 10C2.50008 10.33 2.53008 10.66 2.57008 10.98L0.460084 12.63C0.270084 12.78 0.220084 13.05 0.340084 13.27L2.34008 16.73C2.43008 16.89 2.60008 16.98 2.78008 16.98C2.84008 16.98 2.90008 16.97 2.95008 16.95L5.44008 15.95C5.96008 16.35 6.52008 16.68 7.13008 16.93L7.51008 19.58C7.54008 19.82 7.75008 20 8.00008 20H12.0001C12.2501 20 12.4601 19.82 12.4901 19.58L12.8701 16.93C13.4801 16.68 14.0401 16.34 14.5601 15.95L17.0501 16.95C17.1101 16.97 17.1701 16.98 17.2301 16.98C17.4001 16.98 17.5701 16.89 17.6601 16.73L19.6601 13.27C19.7801 13.05 19.7301 12.78 19.5401 12.63L17.4301 10.98V10.98ZM15.4501 9.27C15.4901 9.58 15.5001 9.79 15.5001 10C15.5001 10.21 15.4801 10.43 15.4501 10.73L15.3101 11.86L16.2001 12.56L17.2801 13.4L16.5801 14.61L15.3101 14.1L14.2701 13.68L13.3701 14.36C12.9401 14.68 12.5301 14.92 12.1201 15.09L11.0601 15.52L10.9001 16.65L10.7001 18H9.30008L9.11008 16.65L8.95008 15.52L7.89008 15.09C7.46008 14.91 7.06008 14.68 6.66008 14.38L5.75008 13.68L4.69008 14.11L3.42008 14.62L2.72008 13.41L3.80008 12.57L4.69008 11.87L4.55008 10.74C4.52008 10.43 4.50008 10.2 4.50008 10C4.50008 9.8 4.52008 9.57 4.55008 9.27L4.69008 8.14L3.80008 7.44L2.72008 6.6L3.42008 5.39L4.69008 5.9L5.73008 6.32L6.63008 5.64C7.06008 5.32 7.47008 5.08 7.88008 4.91L8.94008 4.48L9.10008 3.35L9.30008 2H10.6901L10.8801 3.35L11.0401 4.48L12.1001 4.91C12.5301 5.09 12.9301 5.32 13.3301 5.62L14.2401 6.32L15.3001 5.89L16.5701 5.38L17.2701 6.59L16.2001 7.44L15.3101 8.14L15.4501 9.27ZM10.0001 6C7.79008 6 6.00008 7.79 6.00008 10C6.00008 12.21 7.79008 14 10.0001 14C12.2101 14 14.0001 12.21 14.0001 10C14.0001 7.79 12.2101 6 10.0001 6ZM10.0001 12C8.90008 12 8.00008 11.1 8.00008 10C8.00008 8.9 8.90008 8 10.0001 8C11.1001 8 12.0001 8.9 12.0001 10C12.0001 11.1 11.1001 12 10.0001 12Z"
                                        fill="#F7F7F8"
                                    />
                                </svg>
                                settings
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}

export default MenuSide
