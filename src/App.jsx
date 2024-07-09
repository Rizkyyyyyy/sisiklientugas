import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Counter from './components/Counter';
import Timer from './components/Timer';
import ThemedComponent from './components/ThemedComponent';
import CounterReducer from './components/CounterReducer';
import CounterCallback from './components/CounterCallback';
import AppWithExpensiveCalculation from './components/ExpensiveCalculation';
import TextInput from './components/TextInput';
import DataFetchingComponent from './components/DataFetchingComponent';
import { ThemeProvider } from './context/ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="min-vh-200-d-flex-align-items-center justify-content-center bg-primary">
      <div className="text-center">
        <h1>Muhammad Rizky Ramadhani</h1>
        <h1>NIM:A11.2021.13325</h1>
      </div>
    </div>
      <div>
        <nav>
          <ul>
            <li><Link to="/counter">Counter (useState)</Link></li>
            <li><Link to="/timer">Timer (useEffect)</Link></li>
            <li><Link to="/theme">Themed Component (useContext)</Link></li>
            <li><Link to="/reducer">Counter (useReducer)</Link></li>
            <li><Link to="/callback">Counter (useCallback)</Link></li>
            <li><Link to="/expensive">Expensive Calculation (useMemo)</Link></li>
            <li><Link to="/input">Text Input (useRef)</Link></li>
            <li><Link to="/fetch">Data Fetching (Custom Hook)</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/theme" element={<ThemeProvider><ThemedComponent /></ThemeProvider>} />
          <Route path="/reducer" element={<CounterReducer />} />
          <Route path="/callback" element={<CounterCallback />} />
          <Route path="/expensive" element={<AppWithExpensiveCalculation />} />
          <Route path="/input" element={<TextInput />} />
          <Route path="/fetch" element={<DataFetchingComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;