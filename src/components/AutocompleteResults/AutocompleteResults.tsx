import { FC } from 'react';
import './AutocompleteResults.css';

interface AutocompleteResultsProps {
  suggestedResults: Array<string | object>;
}

const AutocompleteResults: FC<AutocompleteResultsProps> = ({ suggestedResults }) => {

  return (
    <ul className='autocomplete-results'>
      {(suggestedResults as string[]).map((result) => {
        return (
          <li key={result}>
            {result}
          </li>
        );
      })}
    </ul>
  );
};

export default AutocompleteResults;
