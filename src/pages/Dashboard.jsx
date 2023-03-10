import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import BoxProject from '../components/BoxProject'
import TopHeader from '../components/TopHeader'
import { weatherData } from '../data/weather'
import { getProjects } from '../data/projects'
import Meeting from '../components/Meeting'
import Task from '../components/Task'

export async function loader() {
    const dataWeather = await weatherData()
    const projects = await getProjects()
    return { dataWeather, projects }
}

function Dashboard() {
    const [showBox, setShowBox] = useState(false)
    const { dataWeather, projects } = useLoaderData()
    const [task, setTask] = useState(false)

    console.log(projects)

    const info = {
        city: dataWeather.location.name,
        temp: dataWeather.current.temp_c,
        icon: dataWeather.current.condition.icon,
        condition: dataWeather.current.condition.text,
    }

    function handleTask() {
        setTask(true)

        if (task) {
            setTask(false)
        }
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
                            {projects.map((project) => {
                                return (
                                    <BoxProject
                                        key={project.id}
                                        project={project}
                                    />
                                )
                            })}
                        </div>
                    </div>
                    <div className="dashboard__container__meeting box">
                        <div className="dashboard__container__meeting__top">
                            <h3 className="dashboard__container__meeting__top--title">
                                next coming meetings
                            </h3>
                            <button className="dashboard__container__meeting__top--add">
                                <img
                                    src="public/img/add.svg"
                                    alt="add meeting"
                                />
                            </button>
                        </div>
                        <div className="dashboard__container__meeting__content">
                            <Meeting />
                            <Meeting />
                            <Meeting />
                        </div>
                    </div>
                    <div className="dashboard__container__task box">
                        <div className="dashboard__container__task__top">
                            <h3 className="dashboard__container__task__top--title">
                                create new task
                            </h3>
                            <button className="dashboard__container__task__top--add">
                                <img
                                    src="public/img/add.svg"
                                    alt="add meeting"
                                />
                            </button>
                        </div>
                        <div className="dashboard__container__task__content">
                            <Task
                                task={task}
                                setTask={setTask}
                                handleTask={handleTask}
                            />
                           <Task />
                           <Task /> 
                           <Task /> 
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Dashboard
