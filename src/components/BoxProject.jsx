import { useNavigate } from 'react-router-dom'

function BoxProject({ project }) {
    const {
        nameProject,
        nameClient,
        chargeClient,
        projectType,
        statusProject,
        priority,
        payment,
        infoAssets,
        infoStatus,
        id,
    } = project

    const navigate = useNavigate()
    return (
        <div className="dashboard__container__project__content__item">
            <div className="dashboard__container__project__content__item__menuDots">
                <img src="public/img/3Dots.svg" alt="menuaction" />

                <div className="dashboard__container__project__content__item__menuDots__menu">
                    <button
                        className="btns btnEdit"
                        onClick={() => navigate(`/projects/${id}/edit`)}
                    >
                        <img src="public/img/edit.svg" alt="edit" />
                        edit
                    </button>
                    <button className="btns btnRemove">
                        <img src="public/img/delete.svg" alt="remove" />
                        remove
                    </button>
                    <button className="btns btnLaunch">
                        <img src="public/img/launch.svg" alt="launch" />
                        launch
                    </button>
                </div>
            </div>
            <div className="dashboard__container__project__content__item__company">
                <p className="dashboard__container__project__content__item__company--name">
                    {nameProject}
                </p>

                <div className="dashboard__container__project__content__item__company__info">
                    <div className="dashboard__container__project__content__item__company__info--img">
                        <img
                            src={`public/img/${projectType}.svg`}
                            alt="iconservice"
                        />
                        <small>{projectType}</small>
                    </div>
                    <div className="dashboard__container__project__content__item__company__info--text">
                        <p>{nameClient}</p>
                        <small>{chargeClient}</small>
                    </div>
                </div>
            </div>

            <div className="separator separator--1"></div>
            <div className="dashboard__container__project__content__item__events">
                <div className="status">
                    <p>Status</p>
                    <span className={`${statusProject}`}>{statusProject}</span>
                </div>
                <div className="status">
                    <p>priority</p>
                    <span className={`${priority}`}>{priority}</span>
                </div>
                <div className="status">
                    <p>payment</p>
                    <span className={`${payment}`}>{payment}</span>
                </div>
            </div>
            <div className="separator separator--2"></div>
            <div className="dashboard__container__project__content__item__action">
                <div className="dashboard__container__project__content__item__action__assets">
                    <div className="status">
                        <p>assets and info</p>
                        <span className={`${infoStatus}`}>{infoStatus}</span>
                    </div>
                    <p className="dashboard__container__project__content__item__action__assets--txt">
                        {infoAssets}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BoxProject
