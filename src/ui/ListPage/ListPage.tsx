import Card from "../../components/card/Card";
import { Character } from "../../state/state.types";

import './ListPage.scss';

interface ListPageProps {
  characters: Character[];
}

function ListPage(props: ListPageProps) {
  const characters = props.characters

  return (
    <div className="list-page">
      <h2>Star Warriors</h2>
      <div className="character-cards">
        {characters.map((character) => {
          return <Card key={character.name} character={character} />
        })}
      </div>
    </div>
  )
}

export default ListPage;