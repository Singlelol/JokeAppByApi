import React, { useState } from "react";

import JokeList from "./components/JokeList";
import "./App.css";

function App() {
  // const dummyJokes = [
  //   {
  //     id: 1,
  //     type: "general",
  //     setup: "What do you call a bee that lives in America?",
  //     punchline: "A USB.",
  //   },
  //   {
  //     id: 2,
  //     type: "programming",
  //     setup: "What's the best thing about a Boolean?",
  //     punchline: "Even if you're wrong, you're only off by a bit.",
  //   },
  // ];

  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchJokesHandler() {
    setIsLoading(true);
    const response = await fetch('https://official-joke-api.appspot.com/random_ten');
    const data = await response.json();
    setJokes(data);
    setIsLoading(false);
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchJokesHandler}>Fetch Jokes</button>
      </section>
      <section>
        {!isLoading && jokes.length > 0 && <JokeList jokes={jokes} />}
        {!isLoading && !jokes.length && <p>Шуток не найдено.</p>}
        {isLoading && <p>Загрузка шуток...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
