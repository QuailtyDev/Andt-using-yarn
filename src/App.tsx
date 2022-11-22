import React from 'react';
import './App.css';
import AdvancedHooksComponent from "./components/AdvancedHooksComponent";
import HomeComponent from './components/HomeComponent';

export const UserContext = React.createContext('');

const App: React.FC = () => {
  const value : string = "codersera";

  return (
    <div className="App">
      <UserContext.Provider value={value}>
        <HomeComponent />
        <AdvancedHooksComponent />
      </UserContext.Provider>
    </div>
  );
};

export default App;