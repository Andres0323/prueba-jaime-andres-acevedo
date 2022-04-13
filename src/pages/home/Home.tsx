import React, {useEffect, useState} from "react";
import './Home.scss';
import star from "../../styles/assets/icons/ic_star.svg";
import favorite from "../../styles/assets/icons/ic-favorite.svg";
import ApiServiceFecth from "../../services/ApiServiceFetch";

// Url para realizar consulta a api
const path = 'https://api.spoonacular.com/recipes/random?apiKey=4cb044c744194473b7e2c9aacb5ae96b';

const Home: React.FC = () => {
    const [dataArray, setDataArray] = useState([]);

    useEffect(() => {
        getInfo();
    }, []);

    /**
     * @name getInfo
     * @desc Funcion usada para traer la data a mostrar y ser amacenada
     */
    const getInfo = async () => {
        // realizo consulta
       const res = await ApiServiceFecth.get(path);

       // destructuro y almaceno data
       const { data: { recipes }} = res || [];
       setDataArray(recipes);
    };

    return (
        <div className="container">
            <div className="cards">
                {dataArray.map((item: any) => (
                    <div className="card" key={`key-${item}`}>
                        <img className="cardImageHead" src={item.image} alt="muchin" />

                        <div className="cardInfo">
                            <h1>
                                <span className="cardTitleHd">{item.title} </span>
                            </h1>
                        </div>

                        <div>
                            <div className="cardLeftInfo">
                                <img className="cardImages" src={star} alt="star" />
                                <span className="cardTextSub">{item.weightWatcherSmartPoints}</span>
                            </div>
                            <div className="cardRightInfo">
                                <img className="cardImage" src={favorite} alt="favorite" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Home;
