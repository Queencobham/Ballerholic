import { Link } from "react-router-dom"

const Fames = () => {
    return (
        <div className='fames'>
            <p>Fames congue sed turpis integer mauris nulla nec Lectus at tristique.</p>
            <Link to="/register" className="fames-btn">Get started for free</Link>
        </div>
    )
}

export default Fames