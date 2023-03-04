function BoxProject() {
    return (
        <div className="dashboard__container__project__content__item">
            <div className="dashboard__container__project__content__item__company">
                <p className="dashboard__container__project__content__item__company--name">
                    Project Name
                </p>

                <div className="dashboard__container__project__content__item__company__info">
                    <div className="dashboard__container__project__content__item__company__info--img">
                        <img src="public/img/iconUxUI.svg" alt="iconservice" />
                        <small>ux/ui</small>
                    </div>
                    <div className="dashboard__container__project__content__item__company__info--text">
                        <p>Client Name</p>
                        <small>Charge</small>
                    </div>
                </div>
            </div>

            <div className="separator separator--1"></div>
            <div className="dashboard__container__project__content__item__events">
                <div className="status">
                    <p>Status</p>
                    <span className="active">Active</span>
                </div>
                <div className="status">
                    <p>priority</p>
                    <span className="high">high</span>
                </div>
                <div className="status">
                    <p>payment</p>
                    <span className="progress">progress</span>
                </div>
            </div>
            <div className="separator separator--2"></div>
            <div className="dashboard__container__project__content__item__action">
                <div className="dashboard__container__project__content__item__action__assets">
                    <div className="status">
                        <p>assets and info</p>
                        <span className="progress">progress</span>
                    </div> 
                    <p className="dashboard__container__project__content__item__action__assets--txt">
                        Before to start this project I will need all the images
                        and text.
                    </p>
                </div>
                <div className="dashboard__container__project__content__item__action--btn">
                    <button className="btns btnEdit">
                        <img src="public/img/edit.svg" alt="edit" />
                        edit
                    </button>
                    <button className="btns btnRemove">
                        <img src="public/img/delete.svg" alt="remove" />
                        remove
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BoxProject
