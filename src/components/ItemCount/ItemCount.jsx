import { useEffect, useState, useContext} from 'react';
import {Store} from '../../Store';
import {useHistory} from 'react-router-dom';

function ItemCount({stock, initial, item}){
    const history = useHistory();
    const [data, setData] = useContext(Store);
    const [qty, setQty] = useState(initial);

    const handleClickResta = () => {

        if(qty > 0) {
            setQty(qty - 1);
        }

    }
    item['cantidad'] = qty;
    
    const onAdd = () => {
        setData({
            ...data, 
            cantidad: data.cantidad + qty,
            items: [...data.items, item]
        });
        history.push('/cart');
    }

    return(
        <>
            <div className="qty">
                <button className="btn-hover-add" disabled={qty === 0 ? 'disabled' : null } onClick={handleClickResta}>
                    -
                </button>
                <input type="text" value={qty} readOnly/>
                <button className="btn-hover-add" onClick={() => setQty(qty + 1)}>+</button>
            </div>
            <div className="text-center mb-4">
                <button className={qty === 0 ? 'd-none' : 'btn btn-success d-block centrado'} onClick={onAdd}>Agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemCount;