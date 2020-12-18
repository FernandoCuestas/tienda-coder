import ItemCount from '../ItemCount/ItemCount';

function Item({title, img}){

    return(
        <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src={img} alt="Remera" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Remera</p>
            </div>
            <div className="row">
                <div className="col">
                    <ItemCount stock={5} initial={1} />
                </div>
            </div>

        </div>
    )
}

export default Item;