import Jujutsu from '../../assets/jujutsu.png';
import Naruto from '../../assets/naruto.png';
import Gantz from '../../assets/gantz.png';
import Item from '../Item/Item';

function ItemListContainer({greeting}){
    return(
        <>
            <h1 className="mt-4">{greeting}</h1>
            <div className="row">
                
                <div className="col-md-3 mb-4">
                        <Item title="Jujutsu Kaisen" img={Jujutsu}/>
                </div>
                <div className="col-md-3 mb-4">
                        <Item title="Naruto" img={Naruto}/>
                </div>
                <div className="col-md-3 mb-4">
                       <Item title="Gantz" img={Gantz}/>
                </div>
            </div>
        </>
    )
}

export default ItemListContainer;