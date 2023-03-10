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
                    <img src="public/img/addWork.svg" alt="" />
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
