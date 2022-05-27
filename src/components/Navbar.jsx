import { ImBook } from 'react-icons/im'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="logo">
          <span>Böker</span>
          <ImBook className='logo-icon' />
        </div>

        <button className="memmbership">Bli Medlem</button>
    </nav>
  )
}

export default Navbar