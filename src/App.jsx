
import './App.css';
import MainRoutes from './MainRoutes';
import Footer from './components/Footer';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
