import { FC } from 'react';
import './Autocomplete.css';

interface AutocompleteProps {
  inputText: string;
  setInputText: (value: string) => void;
}

const Autocomplete: FC<AutocompleteProps> = ({
  inputText,
  setInputText,
}): JSX.Element => {

  console.log("inputText: ", inputText);

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
