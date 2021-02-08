import {useState, useEffect} from 'react';
import Item from '../../Item/Item';
import {getFirestore} from '../../../db';

function FeaturedProducts({greeting}){
    const [items, setItems] = useState([]);
    const db = getFirestore();

    const getProducstFromDB = () => {
        db.collection('productos').where("price", ">", 10).get()
        .then(docs => {

            let arr = [];
            docs.forEach(doc => {
                arr.push({id: doc.id, img: doc.data().img, price: doc.data().price, title: doc.data().title})
                // arr.push({id: doc.id, data: doc.data()})
            })
        
            setItems(arr);
        }).catch(e => console.log(e));
    }

    useEffect(() => {
        getProducstFromDB();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        
        <>
                <div className="container">
                    <h2 className="mt-4">{greeting}</h2>
                    <div className="row">
                        {console.log(items)}
                    {
                        items.length ?
                        items.map((item, index) => (
                            <div className="col-md-3 mb-4 mr-5" key={index}>
                                    <Item id={item.id} title={item.title} img={item.img} price={item.price}/>
                            </div>
                        )): <p className="cargando ml-3">Cargando items...</p>
                    }

                    </div>
                </div>
            
        </> 
        
    )
}

export default FeaturedProducts;