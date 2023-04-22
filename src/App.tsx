import './App.css'
import { Shoes } from './assets/Shoes';
import CardList from './components/CardList';
import { Navbar } from './components/Navbar';

function App() {
  const cards = [
    {
      id: 1,
      title: "congo",
      description: "congo made out of corocodile skin",
      image: <Shoes />, // as this is svg files
      price: 156,
    },
    {
      id: 2,
      title: "shebex",
      description: "congo made out of corocodile skin",
      image: <Shoes />, // as this is svg files
      price: 50,
    },
    {
      id: 3,
      title: "sandals",
      description: "congo made out of corocodile skin",
      image: <Shoes />, // as this is svg files
      price: 78,
    },

  ];

  return (
    <div >
     <Navbar />
     <CardList cards={cards} />
    </div>
  )
}

export default App
