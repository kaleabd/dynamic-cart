import './App.css'
import CardList from './components/CardList';
import { Navbar } from './components/Navbar';

function App() {
  const cards = [
    {
      id: 1,
      title: 'Card 1',
      description: 'This is card 1.',
    },
    {
      id: 2,
      title: 'Card 2',
      description: 'This is card 2.',
    },
    {
      id: 3,
      title: 'Card 3',
      description: 'This is card 3.',
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
