import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-text">
                    <h1 className="hero-text-first">Fames congue sed turpis integer mauris
                        nulla nec Lectus at tristique.
                    </h1>
                    <h2 className="hero-text-second">Faucibus vitae placerat adipiscing cursus aliquet dignissim.
                        Faucibus sed vel sed vitae. Interdum a.
                    </h2>
                    <Link to="/register" className='get-started'>Get started for free</Link>
                </div>
            </div>
        </section>
    )
}

export default Hero
