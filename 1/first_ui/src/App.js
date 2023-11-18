import './App.css';
import NavBar from './components/navBar.js';
import NavBarTabs from './components/navBarTabs.js';
// import Card from './components/card.js';
import DocumentCard from './components/documentCard.js';
import NavBarDocuments from './components/navBarDocuments.js';
import Card1 from './components/reworkedCards/card1.js';
import Card2 from './components/reworkedCards/card2.js';
import Card3 from './components/reworkedCards/card3.js';
import Card4 from './components/reworkedCards/card4.js';
import Card5 from './components/reworkedCards/card5.js';
import Card6 from './components/reworkedCards/card6.js';
import Card7 from './components/reworkedCards/card7.js';

function App() {
  return (
    <div className="App">
      <div className="nav-bar-wrapper">{/* <NavBar></NavBar> */}</div>
      <div className="main-wrapper">
        <div className="main-window">
          <NavBar></NavBar>
          <div className="navDiv">
            <NavBarTabs></NavBarTabs>
            <div className='navBarDoc'>
            <NavBarDocuments></NavBarDocuments>

            </div>
          </div>
          <div className="cards">
            <div className="cards-section">
              <div className="column">
                <Card1></Card1>
                <Card4></Card4>
                <Card6></Card6>
              </div>
              <div className="column">
                <Card3></Card3>
                <Card2></Card2>
                <Card5></Card5>
                <Card7></Card7>
              </div>
            </div>
            <div className="document-section">
              
                <DocumentCard
                  title="Bank benefits form"
                  imageUrl="https://cdn-icons-png.flaticon.com/128/4726/4726016.png"
                  documentUrl="https://example.com/document1.pdf"
                />

                <DocumentCard
                  title="Customer form"
                  imageUrl="https://cdn-icons-png.flaticon.com/128/2991/2991108.png"
                  documentUrl="https://example.com/document1.pdf"
                />
                <DocumentCard
                  title="Bank presentation"
                  imageUrl="https://cdn-icons-png.flaticon.com/128/4726/4726010.png"
                  documentUrl="https://example.com/document2.pdf"
                />
                <DocumentCard
                  title="Bank benefits form"
                  imageUrl="https://cdn-icons-png.flaticon.com/128/4726/4726040.png"
                  documentUrl="https://example.com/document1.pdf"
                />
                <DocumentCard
                  title="Bank service prices"
                  imageUrl="https://cdn-icons-png.flaticon.com/128/4726/4726040.png"
                  documentUrl="https://example.com/document2.pdf"
                />
                 <DocumentCard
                  title="Customer form"
                  imageUrl="https://cdn-icons-png.flaticon.com/128/2991/2991108.png"
                  documentUrl="https://example.com/document1.pdf"
                />
                <DocumentCard
                  title="Bank presentation"
                  imageUrl="https://cdn-icons-png.flaticon.com/128/4726/4726010.png"
                  documentUrl="https://example.com/document2.pdf"
                />
                <DocumentCard
                  title="Bank benefits form"
                  imageUrl="https://cdn-icons-png.flaticon.com/128/4726/4726040.png"
                  documentUrl="https://example.com/document1.pdf"
                />
                 <DocumentCard
                  title="Customer form"
                  imageUrl="https://cdn-icons-png.flaticon.com/128/2991/2991108.png"
                  documentUrl="https://example.com/document1.pdf"
                />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
