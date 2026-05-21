import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

  const languages = ['English','Spanish', 'Haitian Creole', 'Portuguese', 'French', 'Japanese']
  const greetings = {
    'English': 'Good Morning',
    'Spanish': 'Buenos Dias',
    'Haitian Creole': 'Bonjou',
    'Portuguese': 'Bom Dia',
    'French': 'Bonjour',
    'Japanese': 'おはよう'
  }

  const GreetingDisplay = ({language, size}) => {
    return <h1 style={{fontSize: `${size}px`}}>{greetings[language]}</h1>
  }

  const LanguageButtons = ({language, setLanguage}) => {
    return (
      <>
        {languages.map((lang) => (
          <button 
          key={lang} 
          onClick={() => setLanguage(lang)}
          style={{
            backgroundColor: language === lang ? 'blue' : 'white',
            color: language === lang ? 'white' : 'black'
          }}
          >{lang}
          </button> 
        ))}
      </>
    )
  }


  const SizeButtons = ({increase, decrease}) => {
    return (
    <>
        <button onClick={increase}>A+</button>
        <button onClick={decrease}>A-</button>
    </>
    )
  }


  const ThemeToggle = () => {
    return (
      <>
      <button></button>
      </>
    )
  }

function App() {

  const [language, setLanguage] = useState('English');
  const [size, setSize] =useState(32);

  const increase = () => {setSize(size + 1)}
  const decrease = () => {setSize(size - 1)}


  return (
    <>
    <SizeButtons increase={increase} decrease={decrease}/>
    <GreetingDisplay language={language} size={size}/>
    <LanguageButtons language={language} setLanguage={setLanguage}/>
    </>
  )
}

export default App
