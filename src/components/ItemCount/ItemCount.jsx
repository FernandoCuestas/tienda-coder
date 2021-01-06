import { useEffect, useState } from 'react';

function ItemCount({stock, initial, event}){
    const [qty, setQty] = useState(initial);

    const handleClickResta = () => {

        if(qty > 0) {
            setQty(qty - 1);
        }

    }

    const onAdd = () => {
        alert(`Agregaste ${qty} productos al carrito`);
    }

    return(
        <>
            <div className="qty">
                <button 
                    disabled={qty === 0 ? 'disabled' : null } 
                    onClick={handleClickResta}
                >
                    -
                </button>
                <input type="text" value={qty} readOnly/>
                <button onClick={() => setQty(qty + 1)}>+</button>
            </div>
            <div className="text-center mb-4">
                <button className={qty === 0 ? 'd-none' : 'btn btn-success d-block'} onClick={onAdd}>Agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemCount;