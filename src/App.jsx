import './App.css'
import FunFactCard from './FunFactCard';
import HeaderTitle from './HeaderTitle';

function App() {
  return (
    <div>
      <HeaderTitle info = "Fun Facts" />
      <FunFactCard fact = "I have visited 3 countries." />
      <FunFactCard fact = "My favorite hobby is sleeping" />
      <FunFactCard fact = "My partner has visited 5 countries." />
      <FunFactCard fact = "My partner loves rice" />
      <FunFactCard fact = "Our favorite artisits are Nicki Minaj, Lana Del Rey, Glaive" />

    </div>
  );
}

export default App;