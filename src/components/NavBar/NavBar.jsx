import {useState} from 'react';
import CartIcon from '../CartIcon/CartIcon';
import {Link} from 'react-router-dom';
import IconMenu from '../../assets/icon.png';
import WidgetCart from '../WidgetCart/WidgetCart';

const NavBar = () => {
    const [showWidgetCart, setShowWidgetCart] = useState(false);

    const openWidgetCart = () => {
        setShowWidgetCart(!showWidgetCart); 
}
  return (
    <>
        <div className="container-fluid">
            <nav className="navbar shadow navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">
                    <img src={IconMenu} alt="IconMenu" width="50" height="50"/>
                </Link>
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
                    <CartIcon action={openWidgetCart}/>
                    <WidgetCart show={showWidgetCart} action={openWidgetCart} />
                </div>
            </nav>
        </div>
    </>
  )

}

export default NavBar;
