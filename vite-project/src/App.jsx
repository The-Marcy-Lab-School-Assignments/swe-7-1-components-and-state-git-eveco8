import { useState } from 'react'
import './App.css'

  const languages = ['English','Spanish', 'Haitian Creole', 'Portuguese', 'French', 'Japanese']
  const greetings = {
  'English': {id: 1, greeting: 'Good Morning'},
  'Spanish': {id: 2, greeting: 'Buenos Dias'},
  'Haitian Creole': {id: 3, greeting: 'Bonjou'},
  'Portuguese': {id: 4, greeting: 'Bom Dia'},
  'French': {id: 4, greeting: 'Bonjour'},
  'Japanese': {id: 5, greeting: 'おはよう'}
  }

  const GreetingDisplay = ({language, size}) => {
    return <h1 style={{fontSize: `${size}px`}}>{greetings[language].greeting}</h1>
  }

  const LanguageButtons = ({language, languageChange }) => {
    return (
      <>
        {languages.map((lang) => (
          <button 
          key={lang} 
          onClick={() => languageChange(lang)}
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


  const SizeButtons = ({increase, decrease, theme}) => {
    return (
    <>
        <button 
        onClick={increase}
        style={{
      backgroundColor: theme ? 'black' : 'white',
      color: theme ? 'white' : 'black',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: 'white'
      }}
        >A+</button>

        <button 
        onClick={decrease}
      style={{
      backgroundColor: theme ? 'black' : 'white',
      color: theme ? 'white' : 'black',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: 'white'
      }}
        >A-</button>
    </>
    )
  }


  const ThemeToggle = ({theme, changeTheme}) => {
    return (
      <>
      <button 
      onClick={changeTheme}
      style={{
      backgroundColor: theme ? 'black' : 'white',
      color: theme ? 'white' : 'black',
      position: 'absolute',
      top: '20px',
      right: '20px',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: 'white'
      }}
      >{theme ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
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

  const HistoryList = ({history, clearHistory, theme}) => {
    return (
      <>
      <h3
      style={{
        display:'flex',
        displayContent:'start'
      }}
      >History</h3>

       {history.length === 0 ? <p>No Selections Yet</p> : 
       <ul> {history.map((lang, index) => <li style={{listStyle: 'none', display: 'flex', justifyContent: 'start'}} key={index}> {lang} </li>)} </ul>}
       <button   
      onClick={clearHistory} 
             style={{
      backgroundColor: theme ? 'black' : 'white',
      color: theme ? 'white' : 'black',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: 'white'
      }} 
      >Clear History</button>

      </>
    )
  }

function App() {

  const [language, setLanguage] = useState('English');
  const [size, setSize] = useState(32);
  const [theme, setTheme] = useState(false);
  const [history, setHistory] = useState([])

  const languageChange = (lang) => {
    setLanguage(lang)
    setHistory((prev) => [lang, ...prev].slice(0,5))
  }


  const increase = () => {if (size < 72) setSize(size + 1)}
  const decrease = () => { if (size > 12 ) setSize(size - 1)}

  const changeTheme = () => {
    setTheme((curr) => !curr)
  }

  const clearHistory = () => {
    setHistory([])
  }


  return (
    <>
      <ThemeToggle theme={theme} changeTheme={changeTheme}/>
      <SizeButtons increase={increase} decrease={decrease} theme={theme}/>
      <GreetingDisplay language={language} size={size}/>
      <LanguageButtons language={language} languageChange={languageChange}/>
      <HistoryList history={history} clearHistory={clearHistory} theme={theme}/>
      
    </>
  )
}

export default App
