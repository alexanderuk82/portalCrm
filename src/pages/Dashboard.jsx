import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import BoxProject from '../components/BoxProject'
import TopHeader from '../components/TopHeader'
import { weatherData } from '../data/weather'


export function loader() {
    const dataWeather = weatherData()
    return dataWeather
}

function Dashboard() {
    const [showBox, setShowBox] = useState(false)
    const data = useLoaderData()

    const info = {
        city: data.location.name,
        temp: data.current.temp_c,
        icon: data.current.condition.icon,
        condition: data.current.condition.text,
    }

    return (
        <main className="dashboard">
            <div className="container">
                <TopHeader
                    showBox={showBox}
                    setShowBox={setShowBox}
                    title="Dashboard"
                />

                <div className="dashboard__container">
                    <div className="dashboard__container__welcome box">
                        <h2 className="dashboard__container__welcome--heading">
                            welcome, <span>alexander</span>
                        </h2>
                        <div className="dashboard__container__welcome__content">
                            <p className="dashboard__container__welcome__content--text">
                                I've prepared a quick weather report for{' '}
                                <span>{info.city} </span>
                                today. Hope you're having a great day 🖐️
                            </p>
                            <div className="dashboard__container__welcome__content__temp">
                                <img
                                    className="dashboard__container__welcome__content__temp--icon"
                                    src={info.icon}
                                    alt="icon-weather"
                                />
                                <div className="dashboard__container__welcome__content__temp__text">
                                    <small className="dashboard__container__welcome__content__temp__text--condition">
                                        {info.condition}
                                    </small>
                                    <p className="dashboard__container__welcome__content__temp__text--outdoor">
                                        <img
                                            src="public/img/outdoorTemp.svg   "
                                            alt="outdoor"
                                        />
                                        outdoor temperature:
                                        <span>
                                            {info.temp}{' '}
                                            <img
                                                src={
                                                    'public/img/iconCentigrados.svg'
                                                }
                                                alt="grado"
                                            />
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dashboard__container__project box">
                        <div className="dashboard__container__project__top">
                            <h3 className="dashboard__container__project__top--title">
                                latest projects
                            </h3>
                            <div className="dashboard__container__project__top__filter">
                                <h3 className="dashboard__container__project__top__filter--title">
                                    status
                                </h3>
                                <select
                                    className="dashboard__container__project__top__filter--select"
                                    name="status"
                                    id="status"
                                >
                                    <option value="active">active</option>
                                    <option value="cancelled">cancelled</option>
                                    <option value="paused">paused</option>
                                </select>
                            </div>
                        </div>
                        <div className="dashboard__container__project__content">
                            <BoxProject />                    
                            <BoxProject />                    
                        </div>
                    </div>
                    <div className="dashboard__container__meeting box">
                        meeting box
                    </div>
                    <div className="dashboard__container__task box">
                        task box
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Dashboard
