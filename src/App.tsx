import { useState } from 'react';
import './App.css'
import Autocomplete from './components/Autocomplete';
import Title from './components/Title';
import usePokemons from './hooks/usePokemons';
import useDebounce from './hooks/useDebounce';

function App() {
  const [inputValue, setInputValue] = useState('');
  const title = 'What Pokemon are you looking for';

  const handleSetInputValue = (value: string) => {
    setInputValue(value);
  };

  const debounedInputValue = useDebounce(inputValue, 300);
  const { pokemonResults } = usePokemons(debounedInputValue);

  return (
    <>
      <Title titleAs='h1' text={title} />
      <Autocomplete
        setInputText={handleSetInputValue}
        inputText={inputValue}
        suggestedResults={pokemonResults || []}
      />
    </>
  )
}

export default App
