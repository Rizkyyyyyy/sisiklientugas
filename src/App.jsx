import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Props from './components/Props';
import State from './components/State';
import FetchData from './components/FetchData';
import { ThemeProvider } from './context/ThemeContext';
import ThemedComponent from './ThemedComponent';
import { Provider } from 'react-redux';
import store from './Store';
import Counter from './components/Counter';

function App() {
  return (
<Provider store={store}>
<ThemeProvider>
    <div className="min-vh-200 d-flex align-items-center justify-content-center bg-light">
      <header className="text-center">
        <h1 className="text-3xl font-bold">Muhammad Rizky Ramadhani</h1>
        <p className="text-xl">NIM: A11.2021.13325</p>
        
      <Routes>
        <Route path="/props" element={<Props />} />
        <Route path="/state" element={<State />} />
        <Route path="/fetchdata" element={<FetchData />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
<ThemedComponent/>
<provider/>
      </header>
    </div>
</ThemeProvider>
</Provider>

  );
}

export default App;
