import logo from '../assets/images/logo.png'

const Navbar = () => {
  return (
    <div className='container'>
      <nav>
        <img src={logo} alt="ballerholic" />
        
        <ul>
            <li><a href="#">Navigation</a></li>
            <li><a href="#">Navigation</a></li>
            <li><a href="#">Navigation</a></li>
            <li><a href="#">Navigation</a></li>
            <li><a href="#">Navigation</a></li>
            <li><a href="#">Navigation</a></li>
        </ul>

        <div className="btn">
            <a href="#" className='get-started'>Get started for free</a>
            <a href="#" className='login'>Login</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
