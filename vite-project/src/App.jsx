import './App.css'
import FunFactCard from './FunFactCard';

function App() {
  return (
    <div>
      <h1> Fun Facts</h1>
      <FunFactCard fact = "I have visited more than 3 countries." />
      <FunFactCard fact = "My favorite hobby is sleeping" />
      <FunFactCard fact = "My partner has visited more than 5 countries." />
      <FunFactCard fact = "My partner loves rice" />
      <FunFactCard fact = "Our favorite artisits are Nicki Minaj, Lana Del Rey, Glaive" />

    </div>
  );
}

export default App;