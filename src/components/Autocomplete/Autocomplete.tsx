import { FC } from 'react';
import './Autocomplete.css';
import AutocompleteResults from '../AutocompleteResults';

interface AutocompleteProps {
  inputText: string;
  setInputText: (value: string) => void;
  suggestedResults: string[];
}

const Autocomplete: FC<AutocompleteProps> = ({
  inputText,
  setInputText,
  suggestedResults,
}): JSX.Element => {

  console.log("suggestedResults: ", suggestedResults);

  return (
    <div className='autocomplete'>
      <div className='autocomplete__input'>
        <input
          type="text"
          placeholder="Search..."
          onChange={({ target: { value } }) => setInputText(value)}
          value={inputText}
        />
      </div>
      <AutocompleteResults
          suggestedResults={suggestedResults}
      />
    </div>
  );
};

export default Autocomplete;
