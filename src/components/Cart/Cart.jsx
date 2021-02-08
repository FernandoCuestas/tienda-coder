import {useContext} from 'react';
import {Store} from '../../Store';
import ItemContent from '../ItemContent/ItemContent';
import './Cart.css';
import Empty from '../../assets/empty.png';
import {Link} from 'react-router-dom';

const Cart = () => {
    const [data, setData] = useContext(Store);

    return (
        <>
            <h2>Estás en el cart</h2>

          
                
                <ItemContent title={data.items[data.items.length - 1].title} img={data.items[data.items.length - 1].img} price = {data.items[data.items.length - 1].price} cantidad={data.items[data.items.length - 1].cantidad}/>
                <Link className="btn btn-success" to="/checkout">Finalizar compra</Link>
         
            {
                data.items.length == "" ?
                <img src={Empty} alt="Vacio"/> 
                : <p></p>
            }
            {}
            
        </>
    )
}

export default Cart;