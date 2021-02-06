import ItemCount from '../ItemCount/ItemCount';
import './Item.css';


function Item({title, img, price}){
    const item = {
        title,
        img,
        price
    };

    var remera = require('../../assets/'+img);
   
    item['img'] = remera.default;
    
    return(
        <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src={remera.default} alt="Remera" />
            <div className="card-body text-center">
                <h5 className="card-title"><b>{title}</b></h5>
                <p className="card-text"><b>Remera</b></p>
                <p className="card-text"><b className="size-price">${price}</b></p>
            </div>
            <div className="row">
                <div className="col">
                    <ItemCount stock={5} initial={0} item = {item}/>
                </div>
            </div>
        
        </div>
    )
}

export default Item;