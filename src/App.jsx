import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


function App() {
  const [advices, setAdvices] = useState(null);
  const [loading, setLoading] = useState(true);
  let hundleClick = () => {
    setLoading(true);
    setAdvices(null)
    axios('https://api.adviceslip.com/advice').then(data => {
      setAdvices(data.data.slip);
    }).then(()=> setLoading(false));
  }
  useEffect(() => {
    axios('https://api.adviceslip.com/advice').then(data => {
      setAdvices(data.data.slip);
    }).then(() => setLoading(false));
  }, [])

  return (
    <div className="app">
      {advices && <p className="num">Advice #{advices['id']}</p>}
      {advices && <p className="advice">{advices['advice']}</p>}
      {loading && <p className="advice">Loading...</p>}
      <div className="seperator">
        <div className="line"></div>
        <i className="fa-solid fa-pause"></i>
        <div className="line"></div>
      </div>
      <div className="button">
        <img onClick={hundleClick} src="/src/images/icon-dice.svg" alt="" />
      </div>
    </div>
  );
}

export default App
