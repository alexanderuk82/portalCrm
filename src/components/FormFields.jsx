import { useNavigate } from 'react-router-dom'

function FormFields({ project }) {
    return (
        <>
            <fieldset>
                <div className="addProject__form__input">
                    <label className="label" htmlFor="title">
                        title project
                    </label>
                    <input
                        type="text"
                        id="title"
                        placeholder="e.g: printable website"
                        name="nameProject"
                        defaultValue={project?.nameProject}
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
                        name="nameClient"
                        defaultValue={project?.nameClient}
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
                        name="chargeClient"
                        defaultValue={project?.chargeClient}
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
                                name="projectType"
                                defaultChecked={project?.projectType === 'uxui'}
                                id="uxui"
                            />
                            <label htmlFor="uxui">UX/UI</label>
                        </div>
                        <div className="addProject__form__option__item__radio">
                            <input
                                type="radio"
                                name="projectType"
                                defaultChecked={
                                    project?.projectType === 'coding'
                                }
                                id="coding"
                            />
                            <label htmlFor="coding">coding</label>
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
                                name="statusProject"
                                defaultChecked={
                                    project?.statusProject === 'active'
                                }
                                id="active"
                            />
                            <label htmlFor="active">active</label>
                        </div>
                        <div className="addProject__form__option__item__radio">
                            <input
                                type="radio"
                                name="statusProject"
                                defaultChecked={
                                    project?.statusProject === 'cancelled'
                                }
                                id="cancelled"
                            />
                            <label htmlFor="cancelled">cancelled</label>
                        </div>
                        <div className="addProject__form__option__item__radio">
                            <input
                                type="radio"
                                name="statusProject"
                                defaultChecked={
                                    project?.statusProject === 'paused'
                                }
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
                                defaultChecked={project?.priority === 'low'}
                                id="low"
                            />
                            <label htmlFor="low">low</label>
                        </div>
                        <div className="addProject__form__option__item__radio">
                            <input
                                type="radio"
                                name="priority"
                                defaultChecked={project?.priority === 'medium'}
                                id="medium"
                            />
                            <label htmlFor="medium">medium</label>
                        </div>
                        <div className="addProject__form__option__item__radio">
                            <input
                                type="radio"
                                name="priority"
                                defaultChecked={project?.priority === 'high'}
                                id="high"
                            />
                            <label htmlFor="high">high</label>
                        </div>
                    </div>
                </div>
                <div className="addProject__form__option">
                    <p className="addProject__form__option__label">
                        Payment status
                    </p>
                    <div className="addProject__form__option__item">
                        <div className="addProject__form__option__item__radio">
                            <input
                                type="radio"
                                name="payment"
                                defaultChecked={project?.payment === 'done'}
                                id="done-payment"
                            />
                            <label htmlFor="done-payment">done</label>
                        </div>
                        <div className="addProject__form__option__item__radio">
                            <input
                                type="radio"
                                name="payment"
                                defaultChecked={project?.payment === 'progress'}
                                id="progress-payment"
                            />
                            <label htmlFor="progress-payment">progress</label>
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
                                name="infoStatus"
                                defaultChecked={project?.infoStatus === 'done'}
                                id="done"
                            />
                            <label htmlFor="done">done</label>
                        </div>
                        <div className="addProject__form__option__item__radio">
                            <input
                                type="radio"
                                name="infoStatus"
                                defaultChecked={
                                    project?.infoStatus === 'progress'
                                }
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
                <textarea
                    placeholder="Describe if you any special requirements or issues"
                    name="infoAssets"
                    defaultValue={project?.infoAssets}
                />
            </div>
        </>
    )
}

export default FormFields
