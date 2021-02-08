import {useContext} from 'react';
import './WidgetCart.css';
import {Store} from '../../Store';
import {Link} from 'react-router-dom';
import ItemContent from '../ItemContent/ItemContent';
import Empty from '../../assets/empty.png';

const WidgetCart = ({show, action}) => {
    const [data] = useContext(Store);
    // const [del, setDel] = useState(false);
    var total = 0;


    return (
        <div className={`widgetCart ${show ? 'open' : 'close'}`}>
            {    
                data.items.length ?
                data.items.map((item) => {
                            total = total + (item.price * item.cantidad);
                            return <ItemContent key={item.id} title={item.title} img={item.img} price = {item.price} cantidad={item.cantidad}/>
                
                }): <p>Carrito vacio</p>
                
            }
            {
                data.items.length === "" ?
                <img src={Empty} alt="Vacio" width="330"/> 
                : <p></p>
            }
             
            {
                    data.items.length ?
                    <p>TOTAL: ${total}</p>:<br/>
            }

            {
                    data.items.length ?
                    <Link className="btn btn-success centrado" to="/checkout">Finalizar compra</Link>:<br/>
            }
             
            <br/>
            <button className="btn btn-warning centrado" onClick={action}>Cerrar</button>
        </div>
    )
}

export default WidgetCart;