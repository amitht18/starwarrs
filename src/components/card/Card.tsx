import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getHomePlanetName } from "../../api/api";
import { PATHS } from "../../router/router";
import { Character } from "../../state/state.types";
import './Card.scss';
interface CardProps {
    character: Character;
}

function Card(props: CardProps) {
    const character = props.character;
    const [planet, updatePlanet] = useState<string>('');
    const navigate = useNavigate();
    
    function goToDetail() {
        navigate(PATHS.detail, {state: {character: {...character, homeworld: planet}}})
      }

    useEffect(() => {
        getHomePlanetName(character.homeworld).then(data => {
            updatePlanet(data);
        });
    }, [character.homeworld])

    return (
        <div className="card" onClick={goToDetail}>
            <div className="card-header">
                <h3>{character.name}</h3></div>
            <div className="card-body">
                <div className="card-details">
                    <p><span className="label">Eye color:</span> {character.eye_color}</p>
                    <p><span className="label">Hair Color:</span> {character.hair_color}</p>
                    <p><span className="label">Gender:</span> {character.gender}</p>
                    <p><span className="label">Home Planet:</span> {planet ? planet : 'Loading..'}</p>
                </div>
            </div>
            <div className="card-footer">
                <button onClick={goToDetail}>
                    {`>`}
                </button>
            </div>
        </div>
    )
}

export default Card;