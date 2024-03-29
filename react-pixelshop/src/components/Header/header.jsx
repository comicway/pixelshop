import CartWidget from "../CartWidget/cartwidget"
import LogoPng from "/public/asset/img/logo-comic-way-005.png"
import NavBar from '../NavBar/navbar'
import { Link, NavLink} from 'react-router-dom'

const HeaderPixel = () => {
    return (
      <>
        <header className="border-bottom lh-1 py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1">
              <a className="link-secondary" href="">
                  <i className="bi bi-instagram"></i>
              </a>
            </div>
            <div className="col-4 text-center">
              <Link className="blog-header-logo text-body-emphasis text-decoration-none" to='/'>
                <img src={LogoPng} alt="logo comic way" />
              </Link>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <CartWidget/>
              <a className="btn btn-clasic" href="#">Ingresar</a>
            </div>
          </div>
        </header>
        <NavBar />
      </>
    )
};

export default HeaderPixel

