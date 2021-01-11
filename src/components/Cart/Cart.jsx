import {useContext} from 'react';
import {Store} from '../../Store';
import ItemContent from '../ItemContent/ItemContent';
import './Cart.css';
import Empty from '../../assets/empty.png';

const Cart = () => {
    const [data, setData] = useContext(Store);

    return (
        <>
            <h2>Estás en el cart</h2>

            {
                data.items.length ?
                data.items.map(item => <ItemContent title={item.title} img={item.img} price = {item.price} cantidad={item.cantidad}/>)
                : <p>Tu carrito se encuentra vacio</p>
            }
            {
                data.items.length == "" ?
                <img src={Empty} alt="Vacio"/> 
                : <p></p>
            }
            
        </>
    )
}

export default Cart;