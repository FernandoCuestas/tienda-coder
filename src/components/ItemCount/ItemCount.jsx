import { useEffect, useState } from 'react';

function ItemCount({stock, initial, event}){
    const [qty, setQty] = useState(initial);

    const handleClickResta = () => {

        if(qty > 1) {
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
                    disabled={qty === 1 ? 'disabled' : null } 
                    onClick={handleClickResta}
                >
                    -
                </button>
                <input type="text" value={qty} readOnly/>
                <button onClick={() => setQty(qty + 1)}>+</button>
            </div>
            <div className="text-center mb-4">
                <button className="btn btn-success" onClick={onAdd}>Agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemCount;