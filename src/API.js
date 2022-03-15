import { useEffect } from "react";
import axios from "axios";

export default function App() {
  const api_url = "https://api.themoviedb.org/3/discover/movie?sort_by=release_date.desc&api_key=";
  const api_key = "54cfa8fd3e538287147c85dbc892b4da";
  useEffect(() => {
    axios
      .get(api_url + api_key)
      .then((response) => console.log(response.data));
  }, []);

  return <div>Different ways to fetch Data</div>;
}
