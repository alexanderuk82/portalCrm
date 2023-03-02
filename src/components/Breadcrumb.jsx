import { Link } from 'react-router-dom'

function Breadcrumb({ children }) {
    return (
        
       <div className="breadcrumb">
         <p>
             <a className = "breadcrumb__link" href="/">Page</a> / Dashboard
         </p>
       </div>
    )
}

export default Breadcrumb
