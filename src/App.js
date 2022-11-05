import './App.css';
import Elipse1 from './images/ellipse2.png'

function App() {
  return (
    <div className="header">
      <div className='header-left'>
        <div className="logo_container">
          <div className="logo"></div>
          <h1 className="logo_description">Interior Thinkers</h1>
        </div>

        <div className='interior-page-head'>
          <h3>Make Your Interior more minimalistic</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus sodales vel facilisis amet. Fringilla viverra euismod risus vel nisl, dolor mauris.</p>
          <button>See Projects</button>
        </div>

        <div className='first-image'>
          <img src={Elipse1} alt="" />
        </div>

        <div className="frame-container first">
          <div className='frame'>
            <h2>10+</h2>
            <p>Years of experience</p>
          </div>
        </div>

        <div className="frame-container second">
          <div className='frame'>
            <h2>10+</h2>
            <p>Years of experience</p>
          </div>
        </div>


      </div>
      <div className='header-right'>
        <div className='header-right-overlay'></div>
      </div>
    </div>
  );
}

export default App;
