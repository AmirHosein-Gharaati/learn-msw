import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [helloStatement, setHelloStatement] = useState("Hello World!");

  useEffect(() => {
    axios
      .get("/hello")
      .then((res) => res.data)
      .then((data) => setHelloStatement(data.response));
  }, []);

  return (
    <div>
      <p>{helloStatement}</p>
    </div>
  );
}

export default App;
