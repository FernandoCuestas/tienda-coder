import './ItemContent.css';

function ItemContent({title, img, price, cantidad}){

    return(
        <>
            
            <div className="data-product del">
                <img src={img} alt="Product Image" width="70" height="70"/>
                    <div className="ml-2">
                        <span>Titulo: {title}</span>
                        <span>Precio total: ${price * cantidad}</span>
                        <span>Cantidad: {cantidad}</span>
                    </div>
                    
            </div>
            
        </>
    )
}

export default ItemContent;