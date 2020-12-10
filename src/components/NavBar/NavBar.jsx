import CartWidget from '../Cart/CartWidget';

function NavBar() {
  return (
    <>
        <div className="container-fluid">
            <nav className="navbar shadow navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Akihabara Store</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Inicio <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Talles</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Envio gratis</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Efectivo 15%</a>
                        </li>
                        <li className="nav-item">
                            <CartWidget/>
                        </li>
                    </ul>
                    
                    <button className="btn btn-outline-light rounded-pill my-2 mr-2 my-sm-0" type="button">Iniciar sesión</button>
                    <button className="btn btn-outline-light rounded-pill my-2 my-sm-0" type="button">Registro</button>
                    
                </div>
            </nav>
        </div>
    </>
  )

}

export default NavBar;
