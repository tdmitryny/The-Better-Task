import FirstBox from './components/FirstBox';
import SecondBox from './components/SecondBox';
import { useContext } from 'react';
import './App.css';
import './Responsive.css';
import showSecondBox from './components/Context'

function App() {

  const { state, setState } = useContext(showSecondBox);



  return (
    <div className="Container">
      <div className="Mainbox">
        <FirstBox />
        {
          state && (
            <SecondBox />
          )
        }
      </div>
    </div>
  );
}

export default App;
