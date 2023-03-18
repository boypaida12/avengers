import logo from './unnamed.jpeg';

import './styles.css';

function App() {
  return (
    <main className="app">
      <section className="hero-section">
        <p style={{textAlign:"center", fontSize:"4rem"}}>
          Codetrain is Awesome!!!
        </p>
        <img src={logo} alt='Codetrain students posing for a picture' width={500} />
        
      </section>
    </main>
  );
}

export default App;
