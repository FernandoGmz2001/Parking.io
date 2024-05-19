import Home from "./components/Home"
import Parking from "./components/Parking"
import { useState, createContext } from "react";

export const PageContext = createContext();

function App() {
  const [page, setPage ] = useState('Home')

  return (
    <PageContext.Provider value={{currentPage: page, changePage: setPage}}>
      <div className="App">
        {page === 'Home' && <Home />}
        {page === 'Parking' && <Parking />}
      </div>
    </PageContext.Provider>
  );
}

export default App;