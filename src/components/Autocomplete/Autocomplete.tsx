import { FC } from 'react';
import './Autocomplete.css';
import { Result } from '../../Interface';

interface AutocompleteProps {
  inputText: string;
  setInputText: (value: string) => void;
  suggestedResults: Result[];
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
