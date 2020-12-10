
function Item({title, img}){
    return(
        <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src={img} alt="Remera" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Remera</p>
            </div>
        </div>
    )
}

export default Item;