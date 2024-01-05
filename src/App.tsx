import { useState } from 'react';
import './App.css'
import Autocomplete from './components/Autocomplete';
import Title from './components/Title';

function App() {
  const [inputValue, setInputValue] = useState('');
  const title = 'What Pokemon are you looking for';

  const handleSetInputValue = (value: string) => {
    setInputValue(value);
  };

  return (
    <>
      <Title titleAs='h1' text={title} />
      <Autocomplete
        setInputText={handleSetInputValue}
        inputText={inputValue}
      />
    </>
  )
}

export default App
