import {useContext} from 'react';
import './WidgetCart.css';
import {Store} from '../../Store';
import ItemContent from '../ItemContent/ItemContent';
import Empty from '../../assets/empty.png';

const WidgetCart = ({show, action}) => {
    const [data, setData] = useContext(Store);

    return (
        <div className={`widgetCart ${show ? 'open' : 'close'}`}>
            {    
                data.items.length ?
                data.items.map(item => <ItemContent title={item.title} img={item.img} price = {item.price} cantidad={item.cantidad}/>): <p>Carrito vacio</p>
                
            }
            {
                data.items.length == "" ?
                <img src={Empty} alt="Vacio" width="330"/> 
                : <p></p>
            }
            <button className="btn-warning" onClick={action}>Cerrar</button>
        </div>
    )
}

export default WidgetCart;