import {useContext} from 'react';
import './CartIcon.css';
import {Store} from '../../Store';

const CartIcon = ({action}) => {
    const [data, setData] = useContext(Store);

    return (
        <div className="navCart" onClick={action}>
            <i className="fas fa-shopping-cart text-white mr-5"></i>
            <span className="xxx">{data.cantidad}</span>
        </div>
    )
}

export default CartIcon;