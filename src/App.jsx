import "./App.css"
import Card from "./components/Card"

function App() {
  const cardData = {
    card1: {
      cardName: "John Doe",
      description: "Software Engineer"
    },
    card2: {
      cardName: "Merry Cruz",
      description: "Marketing Expert"
    },
    card3: {
      cardName: "Jason Oliver",
      description: "Web Designer"
    }
  }
  
  return (
    <div className='card-container'>
      <Card {...cardData.card1} />
      <Card {...cardData.card2} />
      <Card {...cardData.card3} />
    </div>
  )
}

export default App
