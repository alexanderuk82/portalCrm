function FormProject({ setDisplayForm }) {
    return (
        <div className="popup">
            <div className="addProject">
                <div className="addProject__title">
                    <img src="public/img/addWork.svg" alt="" />
                    <div className="addProject__title--txt">
                        <h2>add your new project</h2>
                        <p>complete all the fields below the form</p>
                    </div>
                </div>
                <form className="addProject__form">
                    <fieldset>
                        <div className="addProject__form__input">
                            <label className="label" htmlFor="title">
                                title project
                            </label>
                            <input
                                type="text"
                                id="title"
                                placeholder="e.g: printable website"
                            />
                        </div>
                        <div className="addProject__form__input">
                            <label className="label" htmlFor="title">
                                customer name
                            </label>
                            <input
                                type="text"
                                id="title"
                                placeholder="e.g: Alexander"
                            />
                        </div>
                        <div className="addProject__form__input">
                            <label className="label" htmlFor="title">
                                customer charge
                            </label>
                            <input
                                type="text"
                                id="title"
                                placeholder="e.g: owner"
                            />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="addProject__form__option">
                            <p className="addProject__form__option__label">
                                type of project
                            </p>
                            <div className="addProject__form__option__item">
                                <div className="addProject__form__option__item__radio">
                                    <input
                                        type="radio"
                                        name="type"
                                        value="uxui"
                                        id="uxui"
                                        checked
                                    />
                                    <label htmlFor="uxui">UX/UI</label>
                                </div>
                                <div className="addProject__form__option__item__radio">
                                    <input
                                        type="radio"
                                        name="type"
                                        value="uxui"
                                        id="codign"
                                    />
                                    <label htmlFor="codign">coding</label>
                                </div>
                            </div>
                        </div>
                        <div className="addProject__form__option">
                            <p className="addProject__form__option__label">
                                status of the project
                            </p>
                            <div className="addProject__form__option__item">
                                <div className="addProject__form__option__item__radio">
                                    <input
                                        type="radio"
                                        name="status"
                                        value="active"
                                        id="active"
                                    />
                                    <label htmlFor="active">active</label>
                                </div>
                                <div className="addProject__form__option__item__radio">
                                    <input
                                        type="radio"
                                        name="status"
                                        value="cancelled"
                                        id="cancelled"
                                    />
                                    <label htmlFor="cancelled">cancelled</label>
                                </div>
                                <div className="addProject__form__option__item__radio">
                                    <input
                                        type="radio"
                                        name="status"
                                        value="paused"
                                        id="paused"
                                    />
                                    <label htmlFor="paused">paused</label>
                                </div>
                            </div>
                        </div>
                        <div className="addProject__form__option">
                            <p className="addProject__form__option__label">
                                priority of the project
                            </p>
                            <div className="addProject__form__option__item">
                                <div className="addProject__form__option__item__radio">
                                    <input
                                        type="radio"
                                        name="priority"
                                        value="low"
                                        id="low"
                                    />
                                    <label htmlFor="low">low</label>
                                </div>
                                <div className="addProject__form__option__item__radio">
                                    <input
                                        type="radio"
                                        name="priority"
                                        value="medium"
                                        id="medium"
                                    />
                                    <label htmlFor="medium">medium</label>
                                </div>
                                <div className="addProject__form__option__item__radio">
                                    <input
                                        type="radio"
                                        name="priority"
                                        value="high"
                                        id="high"
                                    />
                                    <label htmlFor="high">high</label>
                                </div>
                            </div>
                        </div>
                        <div className="addProject__form__option">
                            <p className="addProject__form__option__label">
                                assets for this project
                            </p>
                            <div className="addProject__form__option__item">
                                <div className="addProject__form__option__item__radio">
                                    <input
                                        type="radio"
                                        name="assets"
                                        value="done"
                                        id="done"
                                    />
                                    <label htmlFor="done">done</label>
                                </div>
                                <div className="addProject__form__option__item__radio">
                                    <input
                                        type="radio"
                                        name="assets"
                                        value="progress"
                                        id="progress"
                                    />
                                    <label htmlFor="progress">progress</label>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <div className="addProject__form__input__textarea">
                        <label className="label" htmlFor="title">
                            text information
                        </label>
                        <textarea placeholder="Describe if you any special requirements or issues" />
                    </div>

                    <input className="btnSubmit" type="submit" value="create project" />
                </form>
            </div>
        </div>
    )
}

export default FormProject
