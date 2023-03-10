//!Getting data form API

export async function getProjects() {
    const response = await fetch(import.meta.env.VITE_API_URL)
    const data = await response.json()
    return data

}

//!Adding projects POST

export async function addProject(data) {
    try {
        const respuesta = await fetch(import.meta.env.VITE_API_URL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        await respuesta.json()
    } catch (error) {
        console.log(error)
    }
}

//!Editing project

//?FIRST GETTING THE ID

export async function getId(id) {

    const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
    const data = await response.json()
    return data
}
