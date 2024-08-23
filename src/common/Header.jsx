import { useState } from 'react'
import './style.css'
import { useEffect } from 'react'

function Header() {

  const [isNotDesktop, setIsNotDesktop] = useState(window.innerWidth < 1025)

  useEffect(function () {
    const handleResize = () => {
      setIsNotDesktop(window.innerWidth < 1025)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

    return <div>
        <div className="container-fluid text-center header-content">
          <div className="row">
            <div className="col">brand logo</div>
            <div className="col">case studies</div>
            <div className="col">what we do</div>
            <div className="col">our process</div>
            <div className="col">faq</div>
            <div className="col">
                <button className='btnInRev'>increase my revenue</button>
            </div>
          </div>
        </div>

        {isNotDesktop && <div className='burgerMenu'>
      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">brand logo</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">brand logo</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">case studies</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">what we do</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">our process</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">faq</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><button className='btnInRev'>increase my revenue</button></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>}
    </div>
}

export default Header