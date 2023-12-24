import CartWidget from "../CartWidget/cartwidget";
import LogoPng from "../asset/logo-comic-way-005.png"

const HeaderPixel = () => {
    return (
        <header className="border-bottom lh-1 py-3">
    <div className="row flex-nowrap justify-content-between align-items-center">
      <div className="col-4 pt-1">
        <a className="link-secondary" href="">
            <i className="bi bi-instagram"></i>
        </a>
      </div>
      <div className="col-4 text-center">
        <a class="blog-header-logo text-body-emphasis text-decoration-none" href="#">
          <img src={LogoPng} alt="logo comic way" />
        </a>
      </div>
      <div className="col-4 d-flex justify-content-end align-items-center">
        <CartWidget/>
        <a className="btn btn-clasic" href="#">Ingresar</a>
      </div>
    </div>
  </header>
    )
};

export default HeaderPixel

