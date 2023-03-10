import { useLoaderData, useNavigate, Form, redirect } from 'react-router-dom'
import FormFields from '../components/FormFields'
import Message from '../components/Message'

import { getId } from '../data/projects'

export async function loader({ params }) {
    const project = await getId(params.projectId)
    return project
}

function EditProject() {
    const navigate = useNavigate()
    const project = useLoaderData() 
    console.log(project)
    return (
        <div className="popup">
            {/* {message?.length &&
                message.map((text, index) => (
                    <Message key={index} type="error">
                        {text}
                    </Message>
                ))} */}

            <button className="popup__close" onClick={() => navigate('/')}>
                <img src="/public/img/close.svg" alt="close popup" />
                <span>close</span>
            </button>

            <div
                className="addProject"
                // className={`${
                //     message?.length ? 'addProject shake' : 'addProject'
                // }`}
            >
                <div className="addProject__title">
                    <img src="public/img/addWork.svg" alt="" />
                    <div className="addProject__title--txt">
                        <h2>add your new project</h2>
                        <p>complete all the fields below the form</p>
                    </div>
                </div>

                <Form className="addProject__form" method="post" noValidate>
                    <FormFields project={project} />
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

export default EditProject
