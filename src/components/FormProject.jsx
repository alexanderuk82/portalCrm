import { Form, redirect, useActionData, useNavigate } from 'react-router-dom'
import { addProject } from '../data/projects'
import FormFields from './FormFields'

import Message from './Message'

export async function action({ request }) {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)

    //Validation of field form

    const error = []
    if (Object.values(data).includes('')) {
        error.push('⛔ All the fields are required. ⛔')
    }

    if (Object.keys(error).length) {
        return error
    }
    await addProject(data)
    return redirect('/')
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
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_269_1378)">
                            <path
                                d="M18.6667 8.00001V5.33334H13.3334V8.00001H18.6667ZM5.33341 10.6667V25.3333H26.6667V10.6667H5.33341ZM26.6667 8.00001C28.1467 8.00001 29.3334 9.18667 29.3334 10.6667V25.3333C29.3334 26.8133 28.1467 28 26.6667 28H5.33341C3.85341 28 2.66675 26.8133 2.66675 25.3333L2.68008 10.6667C2.68008 9.18667 3.85341 8.00001 5.33341 8.00001H10.6667V5.33334C10.6667 3.85334 11.8534 2.66667 13.3334 2.66667H18.6667C20.1467 2.66667 21.3334 3.85334 21.3334 5.33334V8.00001H26.6667Z"
                                fill="#2C2E32"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_269_1378">
                                <rect width="32" height="32" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <div className="addProject__title--txt">
                        <h2>add your new project</h2>
                        <p>complete all the fields below the form</p>
                    </div>
                </div>

                <Form className="addProject__form" method="post" noValidate>
                    <FormFields />
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
