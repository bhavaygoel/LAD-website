
import { CardDefault } from "./Card";
import { NavbarWithSearch } from "./Navbar";


function App() {
  const cards = [
    { title: 'ELAD', link: '#', logo: 'elad.png',
      description: 'English Literary and Debate Society, the bastion of english in our college.' },
    { title: 'HLAD', link: '#' , logo: 'hlad.png', 
      description: 'Hindi Literary and Debating Society, the devotees of our mother tongue'},
    
    // Add more cards here
  ];

  return (
    <>
    <div className="relative">

    <NavbarWithSearch/>
    </div>
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-row space-x-10 mb-40">
        {cards.map((card, index  ) => (
          <CardDefault key={index} title={card.title} link={card.link} logo={card.logo} description = {card.description}/>
        ))}
      </div>
    </div>
    </>
  )
}

export default App
