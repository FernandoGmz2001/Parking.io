import '../styles/Home.css'
import {PageContext } from '../App.jsx'
import { useContext } from 'react';
function Home() {
  const {changePage } = useContext(PageContext)
  const handleClick = () => {
    changePage('Parking'); // Cambiar la página a 'Parking'
  };
  return (
    <main className='app-container'>
      <header className="app-header">
        <h1>Parking<span className='title-span'>.io</span></h1>
        <p>por Fernando Gomez</p>
      </header>
      <section>
        <picture className='car-container'>
            <img src="/images/Home/car-pulse.png" alt="car-pulse" className='car-pulse'/>
        </picture>
      </section>
      <button className='btn btn-start' onClick={handleClick}>
        Empezar
      </button>
    </main>
  );
}

export default Home;
