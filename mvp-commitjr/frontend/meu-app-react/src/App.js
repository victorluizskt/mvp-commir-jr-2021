import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Lancamentos from './components/Lançamentos'
import Destaques from './components/Destaques'

function App() {
  return (
    <div className="App">
      <Header />
      <Lancamentos />
      <Destaques />
      <Footer />       
    </div>
  );
}

export default App;
