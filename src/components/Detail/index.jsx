import {useEffect, useState, useContext} from 'react';
import {useParams} from 'react-router-dom';
import ProductDetail from './ProductDetail';
import Comments from './Comments';
import {Store} from '../../Store';
import './Detail.css';
import {getFirestore} from '../../db';

const Detail = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const [data, setData] = useContext(Store);
    const db = getFirestore();

    useEffect(() => {
        db.collection('productos').doc(id).get()
        .then(doc => {
            if(doc.exists) {
                setProduct({id: doc.id, data: doc.data()});

            }
        })
        .catch(e => console.log(e));

        // db.collection('productos').doc(id)
        // .onSnapshot(function(doc) {
        //     setProduct(doc.data());
        // });
    }, []);

    return (
        <>
            {
                product ?
                <div className="container">
                    <ol className="breadcrum">
                        <li>
                            {product.data.title}
                        </li>
                    </ol>
                    
                    <ProductDetail item={product} />
                    <Comments />
                </div> : 
                <p>Cargando producto...</p>
            }
        </>
    )
}

export default Detail;