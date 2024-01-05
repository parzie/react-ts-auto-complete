import { FC } from 'react';
import './AutocompleteResults.css';

interface AutocompleteResultsProps {
  inputText: string;
  suggestedResults: Array<string | object>;
  showSuggestedResults: boolean;
}

const AutocompleteResults: FC<AutocompleteResultsProps> = ({inputText, suggestedResults, showSuggestedResults }) => {
  const visibleClass = showSuggestedResults && inputText ? 'autocomplete-results--visible' : '';

  const highlightResult = (result: string) => {
    return inputText ? <span><mark>{inputText}</mark>{result.replace(inputText, '')}</span>: '';
  }

  return (
    <ul className={`autocomplete-results ${visibleClass}`}>
      {(suggestedResults as string[]).map((result) => {
        return (
          <li key={result}>
            {highlightResult(result)}
          </li>
        );
      })}
    </ul>
  );
};

export default AutocompleteResults;
