import { FC } from 'react';
import './Autocomplete.css';

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
    </div>
  );
};

export default Autocomplete;
