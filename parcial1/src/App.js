import './App.css';
import {React,useState} from 'react';
import Login from './components/Login.js'
import MainPage from './components/MainPage.js'
import Container from 'react-bootstrap/Container';
import {IntlProvider} from 'react-intl';
import Spanish from "./languages/es";
import English from "./languages/en";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  const [locale, setLocale] = useState("en");
  const handleChange = (event) => {
      setLocale(event.target.value);
      };
  let lang;
  if (locale ==="en"){
      lang = English;
  } else {
      lang = Spanish
  }
  
  return (
    <IntlProvider locale={locale} messages= {lang}>
        <select value={locale} onChange={handleChange}>
            <option value="es">Spanish</option>
            <option value="en">English</option>
        </select>
  <Container fluid>
  <BrowserRouter>
    <Routes>
           <Route path="/" element={<Login />} />
           <Route path="/profile" element={<MainPage />} />
    </Routes>

  </BrowserRouter>
  </Container>
  </IntlProvider>
  )
}

export default App;
