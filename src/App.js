import { useState, useEffect } from "react";

//moving backgrounds
import clouds from "./assets/clouds.mp4";
import snow from "./assets/snow.mp4";
//pacman loader
import PacmanLoader from "react-spinners/PacmanLoader";
//components
import Main from "./Components/Main";
import Video from "./Components/Video";
import Glass from "./Components/Glass";
//utils
import weatherRequest from "./util/utils";

function App() {
  const [temp, setTemp] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    weatherRequest()
      .then((res) => {
        setTemp(res);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((err) => console.log(err));

    // weatherRequest("sacramento")
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
  }, []);

  return (
    <Main>
      {loading ? (
        <PacmanLoader color="yellow" size={50} />
      ) : (
        <>
          <Video src={temp >= 70 ? clouds : snow} />
          <Glass>{temp}°F</Glass>
        </>
      )}
    </Main>
  );
}

export default App;
