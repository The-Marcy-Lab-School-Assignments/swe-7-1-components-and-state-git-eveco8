import { useState } from 'react'
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

  const LanguageButtons = ({language, setLanguage, theme}) => {
    return (
      <>
        {languages.map((lang) => (
          <button 
          className={theme && language !== lang ? "theme" : undefined}
          key={lang} 
          onClick={() => setLanguage(lang)}
          style={{
            backgroundColor: language === lang ? 'blue' : 'white',
            color: language === lang ? 'white' : 'black'
          }} //turn this into a class then do a ternary so that on dark mode these buttons when not clicked they are black background - white text
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


  const ThemeToggle = ({theme, changeTheme}) => {
    return (
      <>
      <button 
      className={theme ? "theme" : undefined}
      onClick={changeTheme}
      // style={{
      // backgroundColor: theme ? 'black' : 'white',
      // color: theme ? 'white' : 'black'
      // }}
      >{theme ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      </button>
      <body
      style={{
      backgroundColor: theme ? 'black' : 'white',
      color: theme ? 'white' : 'black'
      }}
      ></body>
      </>
    )
  }

function App() {

  const [language, setLanguage] = useState('English');
  const [size, setSize] = useState(32);
  const [theme, setTheme] = useState(false)

  const increase = () => {setSize(size + 1)}
  const decrease = () => {setSize(size - 1)}

  const changeTheme = () => {
    setTheme((curr) => !curr)
  }


  return (
    <>
      <ThemeToggle theme={theme} changeTheme={changeTheme}/>
      <SizeButtons increase={increase} decrease={decrease}/>
      <GreetingDisplay language={language} size={size}/>
      <LanguageButtons language={language} setLanguage={setLanguage} theme={theme}/>
    </>
  )
}

export default App
