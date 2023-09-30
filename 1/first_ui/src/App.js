import './App.css';
import NavBar from "./components/navBar.js";
import NavBarTabs from './components/navBarTabs.js';
import Card from './components/card.js';
import DocumentCard from './components/documentCard.js';



function App() {
  return (
    <div className="App">  
      <NavBar>
      </ NavBar>
       
      <div className="main-window"> 
        <NavBarTabs></ NavBarTabs>
        <div className='intermiadiate-section'>
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
          <div className='document-section'>
          <DocumentCard
        title="Document 1"
        description="This is a sample document card."
        imageUrl="https://via.placeholder.com/150"
        documentUrl="https://example.com/document1.pdf"
      />
      <DocumentCard
        title="Document 2"
        description="Another document example."
        imageUrl="https://via.placeholder.com/150"
        documentUrl="https://example.com/document2.pdf"
      />
      <DocumentCard
        title="Document 1"
        description="This is a sample document card."
        imageUrl="https://via.placeholder.com/150"
        documentUrl="https://example.com/document1.pdf"
      />
      <DocumentCard
        title="Document 2"
        description="Another document example."
        imageUrl="https://via.placeholder.com/150"
        documentUrl="https://example.com/document2.pdf"
      />
          </div>
        </div>
          
      </div>


    </div>
  );
}

export default App;
