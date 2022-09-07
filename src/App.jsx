import './App.scss';
import Hero from './components/Hero';
import Work from './components/Work';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Hero />
        <Work />
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
