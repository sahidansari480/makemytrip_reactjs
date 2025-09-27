import { people } from './ConstantData/scientistdata.js';
import { GetImgUrl } from './Utility/util.js';

export default function List() {
  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={GetImgUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  );
}
