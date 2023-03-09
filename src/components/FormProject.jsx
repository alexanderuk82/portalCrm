import { Form, useActionData, useNavigate } from 'react-router-dom'
import Message from './Message'

export async function action({ request }) {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)

    //Validation of field form

    const error = []
    if (Object.values(data).includes('')) {
        error.push('⛔ All the fields are required. ⛔')
    }

    if (Object.keys(data).length > 0) {
        return error
    }

    return null
}

function FormProject({ project }) {
    const navigate = useNavigate()
    const message = useActionData()
    return (
        <div className="popup">
            {message?.length &&
                message.map((text, index) => (
                    <Message key={index} type="error">
                        {text}
                    </Message>
                ))}

            <button className="popup__close" onClick={() => navigate('/')}>
                <img src="/public/img/close.svg" alt="close popup" />
                <span>close</span>
            </button>

            <div
                className={`${
                    message?.length ? 'addProject shake' : 'addProject'
                }`}
            >
                <div className="addProject__title">
                    <img src="public/img/addWork.svg" alt="" />
                    <div className="addProject__title--txt">
                        <h2>add your new project</h2>
                        <p>complete all the fields below the form</p>
                    </div>
                </div>

                <Form className="addProject__form" method="post" noValidate>
                    <fieldset>
                        <div className="addProject__form__input">
                            <label className="label" htmlFor="title">
                                title project
                            </label>
                            <input
                                type="text"
                                id="title"
                                placeholder="e.g: printable website"
                                name="title-project"
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
                                name="customer-name"
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
                                name="charge-customer"
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
                                        name="type-of-project"
                                        value="uxui"
                                        id="uxui"
                                    />
                                    <label htmlFor="uxui">UX/UI</label>
                                </div>
                                <div className="addProject__form__option__item__radio">
                                    <input
                                        type="radio"
                                        name="type-of-project"
                                        value="coding"
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
                                        name="status-project"
                                        value="active"
                                        id="active"
                                    />
                                    <label htmlFor="active">active</label>
                                </div>
                                <div className="addProject__form__option__item__radio">
                                    <input
                                        type="radio"
                                        name="status-project"
                                        value="cancelled"
                                        id="cancelled"
                                    />
                                    <label htmlFor="cancelled">cancelled</label>
                                </div>
                                <div className="addProject__form__option__item__radio">
                                    <input
                                        type="radio"
                                        name="status-project"
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
                                        name="priority-project"
                                        value="low"
                                        id="low"
                                    />
                                    <label htmlFor="low">low</label>
                                </div>
                                <div className="addProject__form__option__item__radio">
                                    <input
                                        type="radio"
                                        name="priority-project"
                                        value="medium"
                                        id="medium"
                                    />
                                    <label htmlFor="medium">medium</label>
                                </div>
                                <div className="addProject__form__option__item__radio">
                                    <input
                                        type="radio"
                                        name="priority-project"
                                        value="high"
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
                                        name="payment-status"
                                        value="done"
                                        id="done-payment"
                                    />
                                    <label htmlFor="done-payment">done</label>
                                </div>
                                <div className="addProject__form__option__item__radio">
                                    <input
                                        type="radio"
                                        name="payment-status"
                                        value="progress"
                                        id="progress-payment"
                                    />
                                    <label htmlFor="progress-payment">
                                        progress
                                    </label>
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
                                        name="asset-status"
                                        value="done"
                                        id="done"
                                    />
                                    <label htmlFor="done">done</label>
                                </div>
                                <div className="addProject__form__option__item__radio">
                                    <input
                                        type="radio"
                                        name="asset-status"
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
                        <textarea
                            placeholder="Describe if you any special requirements or issues"
                            name="Text-information"
                            defaultValue={project?.infoAssets}
                        />
                    </div>

                    <input
                        className="btnSubmit"
                        type="submit"
                        value="create project"
                    />
                </Form>
            </div>
        </div>
    )
}

export default FormProject
