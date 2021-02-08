import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Alitta from '../../assets/alitta.jpg';
import Hunter from '../../assets/hunter.jpg';
import Dxd from '../../assets/dxd.jpg';
import Tokyo from '../../assets/tokyo.jpg';

const Category = () => {
    const {category_name} = useParams();
    const [manga, setManga] = useState(Tokyo);

    useEffect(() => {
        switch (category_name){
            case 'Shonen':
                setManga(Hunter);
                break;
            case 'Gore':
                setManga(Tokyo);
                break;
            case 'Cyberpunk':
                setManga(Alitta);
                break;
            case 'Ecchi':
                setManga(Dxd);
                break;
            default:
                setManga(Dxd);
            
        }
        
    }, [category_name])

    return (
        <>
            <div className="container text-center">
                <br/>
                <br/>
                <h1>{category_name}</h1>
                <img src={manga} alt="manga-comic" width="300" height="300"/>
            </div>
        </>
    )
}

export default Category;