import ItemCount from '../ItemCount/ItemCount';

const ProductDetail = ({item}) => {
    return (
        
            <article style={{width: '50rem'}}>
                <br/>

                <div className="row">
                    <div className="col-5">
                        <h1>{item.nombre}</h1>
                        <p>El id de este producto es {item.id}</p>
                        <img className="mb-2" src={item.foto} alt=""/>
                        <p className="mb-2">{item.descripcion}</p>
                        <p className="mb-2">Precio: ${item.precio}</p>
                        <ItemCount stock={5} initial={1} />
                    </div>
                </div>

                
            </article>
        )
}

export default ProductDetail;

