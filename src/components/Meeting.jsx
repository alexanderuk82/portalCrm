import React from 'react'

function Meeting() {
    return (
        <div className="dashboard__container__meeting__content__item">
            <div className="dashboard__container__meeting__content__item__name">
                <img src="public/img/meeting.svg" alt="meeting" />
                <div className="dashboard__container__meeting__content__item__name__text">
                    <p className="dashboard__container__meeting__content__item__name__text--company">
                        company name
                    </p>
                    <p className="dashboard__container__meeting__content__item__name__text--user">
                        name of user
                    </p>
                </div>
            </div>
            <div className="dashboard__container__meeting__content__item__time">
                <p>
                    <img src="public/img/calendar.svg" alt="date" />
                    10/03/2023
                </p>
                <p>
                    <img src="public/img/time.svg" alt="date" />
                    11:30
                </p>
                <p>
                    <img src="public/img/time.svg" alt="date" />
                    30 min
                </p>
            </div>
        </div>
    )
}

export default Meeting
