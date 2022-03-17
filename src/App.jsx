import './App.css';
import { useState } from 'react';
import axios from 'axios'

function App() {

  const [isRadioDisplay, setIsRadioDisplay] = useState(false)
  const [radioLink, setRadioLink] = useState("")


  let radio = <audio controls>
      <source src="http://radio.garden/api/ara/content/listen/_hQCemA1/channel.mp3" type="audio/ogg"/>
  </audio>

  const generateRandomRadio = () => {
    const places = axios.get("/api/ara/content/places")
    places.then((data) => {
      console.log(data)
    })
  }

  return (
    <div className="App">
      {isRadioDisplay && radio}

      <button onClick={generateRandomRadio}>Random Radio</button>
      
    </div>
  );
}

export default App;
