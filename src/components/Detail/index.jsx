import {useEffect, useState} from 'react';
import ProductDetail from './ProductDetail';
import {useParams} from 'react-router-dom';
import {getFirestore} from '../../db';

const Detail = () => {
    const {id} = useParams();
    const [items, setItems] = useState([]);
    const db = getFirestore();

    const getProducstFromDB = () => {
        db.collection('productos').where("price", ">", 100).get()
        .then(docs => {

            let arr = [];
            docs.forEach(doc => {
                arr.push({id: doc.data().id, cod: doc.id, img: doc.data().img, price: doc.data().price, title: doc.data().title})
                // arr.push({id: doc.id, data: doc.data()})
            })
            
            setItems(arr);
        }).catch(e => console.log(e));
    }

    useEffect(() => {
        getProducstFromDB();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            {
                items ?
                <div className="container">
                    <ProductDetail item={items}/>

                    <section>
                        acá van a ir otros productos recomendados
                    </section>
                </div> : 
                <p>Cargando producto...</p>
            }
        </>
    )
}

export default Detail;