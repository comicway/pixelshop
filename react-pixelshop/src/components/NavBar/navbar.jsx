const NavBar = () => {
    return (
        <div className="nav-scroller py-1 mb-3 border-bottom">
            <nav className="nav nav-underline justify-content-center">
            <a className="nav-item nav-link link-body-emphasis margin-menu active" href="#">Tienda</a>
            <a className="nav-item nav-link link-body-emphasis margin-menu" href="#">Ofertas</a>
            <a className="nav-item nav-link link-body-emphasis margin-menu" href="#">Blog</a>
            <a className="nav-item nav-link link-body-emphasis margin-menu" href="#">Mi cuenta</a>
            <a className="nav-item nav-link link-body-emphasis margin-menu" href="#">Contacto</a>
            </nav>
        </div>
    )
};
export default NavBar