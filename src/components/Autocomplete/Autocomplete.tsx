import { FC, useRef, useState } from 'react';
import './Autocomplete.css';
import AutocompleteResults from '../AutocompleteResults';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import Loader from '../Loader';

interface AutocompleteProps {
  inputText: string;
  setInputText: (value: string) => void;
  suggestedResults: string[];
  isLoading: boolean;
}

const Autocomplete: FC<AutocompleteProps> = ({
  inputText,
  setInputText,
  suggestedResults,
  isLoading,
}): JSX.Element => {
  const resultsContainer = useRef<HTMLDivElement>(null);
  const [showSuggestedResults, setShowSuggestedResults] = useState(true);

  useOnClickOutside(resultsContainer, () => setShowSuggestedResults(false));

  return (
    <div
      className='autocomplete'
      ref={resultsContainer}
      onClick={() => {
        setShowSuggestedResults(true);
      }}
    >
      <div className='autocomplete__input'>
        <input
          type="text"
          placeholder="Search..."
          onChange={({ target: { value } }) => setInputText(value)}
          value={inputText}
        />
        {isLoading && <Loader />}
      </div>
      <AutocompleteResults
        suggestedResults={suggestedResults}
        showSuggestedResults={showSuggestedResults}
        inputText={inputText}
      />
    </div>
  );
};

export default Autocomplete;
