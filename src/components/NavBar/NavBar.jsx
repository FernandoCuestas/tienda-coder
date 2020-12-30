import CartIcon from '../CartIcon/CartIcon';
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <>
        <div className="container-fluid">
            <nav className="navbar shadow navbar-expand-lg navbar-dark bg-dark">
                {/* <a className="navbar-brand" href="#">Akihabara Store</a> */}
                <Link className="navbar-brand" to="/">Akihabara Store</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                        <Link className="nav-link" to="/category/Shonen">Shonen</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/category/Gore">Gore</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/category/Cyberpunk">Cyberpunk</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/category/Ecchi">Ecchi</Link>
                        </li>
                    </ul>
                    <CartIcon/>
                    
                 
                </div>
            </nav>
        </div>
    </>
  )

}

export default NavBar;
