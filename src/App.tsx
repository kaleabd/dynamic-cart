import './App.css'
import CardList from './components/CardList';
import { Navbar } from './components/Navbar';
import { useCardStore } from './store/UseCardStore';

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

  const {bears} = useCardStore()
  console.log("bears count:", bears)

  return (
    <div >
     <Navbar />
     <CardList cards={cards} />

     {bears}
     {/* <button onClick={() => addCarts({
            id: 3,
            title: 'Card 3',
            description: 'This is card 3.',
     })}>increase</button> */}

    </div>
  )
}

export default App
