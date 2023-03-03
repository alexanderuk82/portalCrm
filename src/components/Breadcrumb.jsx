import { useNavigate } from 'react-router-dom'

function Breadcrumb({ children }) {
    const navigate = useNavigate()
    return (
        <div className="breadcrumb">
            <p>
                <span className="breadcrumb__link" onClick={() => navigate('/')}>
                    Page
                </span>{' '}
                / {children}
            </p>
        </div>
    )
}

export default Breadcrumb
