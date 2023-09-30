import './App.css';
import NavBar from "./components/navBar.js";
import NavBarTabs from './components/navBarTabs.js';
import Card from './components/card.js';


function App() {
  return (
    <div className="App">  
      <NavBar>
      </ NavBar>
       
      <div className="main-window"> 
        <NavBarTabs></ NavBarTabs>

      <div className="cards-section"> 

      <Card
        title="Card 1"
        description="This is a sample card."
        imageUrl="https://via.placeholder.com/300x200"
      />
      <Card
        title="Card 2"
        description="Another card example."
        imageUrl="https://via.placeholder.com/300x200"
      />
      <Card
        title="Card 1"
        description="This is a sample card."
        imageUrl="https://via.placeholder.com/300x200"
      />
      <Card
        title="Card 2"
        description="Another card example."
        imageUrl="https://via.placeholder.com/300x200"
      />
      <Card
        title="Card 1"
        description="This is a sample card."
        imageUrl="https://via.placeholder.com/300x200"
      />
      <Card
        title="Card 2"
        description="Another card example."
        imageUrl="https://via.placeholder.com/300x200"
      />
      <Card
        title="Card 1"
        description="This is a sample card."
        imageUrl="https://via.placeholder.com/300x200"
      />
      <Card
        title="Card 2"
        description="Another card example."
        imageUrl="https://via.placeholder.com/300x200"
      />
</div>
      </div>


    </div>
  );
}

export default App;
