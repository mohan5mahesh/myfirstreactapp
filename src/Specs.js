import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export function Specs({ specs }) {
    return (
        <div>
            <h3>Specs:</h3>
            <ul>
                <li><FontAwesomeIcon icon={faCoffee} />{specs.os}</li>
                <li>{specs.processor}</li>
                <li>{specs.storage}</li>
            </ul>
        </div>
    );

}
