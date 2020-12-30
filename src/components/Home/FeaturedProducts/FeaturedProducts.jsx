import Jujutsu from '../../../assets/jujutsu.png';
import Naruto from '../../../assets/naruto.png';
import Gantz from '../../../assets/gantz.png';
import Item from '../../Item/Item';
import {useState, useEffect} from 'react';

function FeaturedProducts({greeting}){
    const [items, setItems] = useState([]);

    const products = [
        {
            id: 1,
            title: 'Jujutsu Kaisen',
            img: Jujutsu,
            price: 400
        },
        {
            id: 2,
            title: 'Naruto',
            img: Naruto,
            price: 600
        },
        {
            id: 4,
            title: 'Gantz',
            img: Gantz,
            price: 300
        },
    ]


    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 5000)
    })

    const getProducstFromDB = async () => {
        try {
            const result = await getProducts;
            setItems(result);
            alert('Se cargaron los productos');
        } catch(error) {
            alert('No podemos mostrar los productos en este momento');
        }
    }

    useEffect(() => {
        getProducstFromDB();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        
        <>
                <div className="container">
                    <h1 className="mt-4">{greeting}</h1>
                    <div className="row">
                    {
                        items.length ?
                        items.map((item, index) => (
                            <div className="col-md-3 mb-4 mr-5">
                                    <Item title={item.title} img={item.img} price={item.price}/>
                            </div>
                        )): <p className="cargando">Cargando items...</p>
                    }

                    </div>
                </div>
            
        </> 
        
    )
}

export default FeaturedProducts;