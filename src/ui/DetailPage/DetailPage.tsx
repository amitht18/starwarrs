import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getAllMovieNames } from "../../api/api";
import { Character } from "../../state/state.types";

import './DetailPage.scss';

function DetailPage() {
  const [character, updateCharacter] = useState<Character>(useLocation().state.character)
  const [moviesNames, updateMoviesNames] = useState<string[]>([]);
  const [height, updateHeight] = useState(Number(character.height));

  useEffect(() => {
    getAllMovieNames(character.films).then(data => {
      updateMoviesNames(data);
    });
  }, [character.films])

  return (
    <div className="details-page">
      <div className="name">
        <h2>{character.name}</h2>
      </div>
      <div className="character-details">

        <p><span className="label">Eye color:</span> {character.eye_color}</p>
        <p><span className="label">Hair Color:</span> {character.hair_color}</p>
        <p><span className="label">Gender:</span>{character.gender}</p>
        <p><span className="label">Height:</span><button className="height-button" onClick={() => {updateHeight(Number(height) -1)}}>-</button>{height}<button className="height-button" onClick={() => {updateHeight(Number(height) +1)}}>+</button></p>
        <p><span className="label">Home Planet:</span>{character.homeworld}</p>

        <div className="movies-featured"><span className="label">Movies Featured in:</span>
          {moviesNames.length > 0 ?
            moviesNames.map((movie) => {
              return <span className="movie" key={movie} >{movie}</span>
            })
            : <div>Loading movies...</div>
          }
        </div>
      </div>
    </div>
  )
}

export default DetailPage;