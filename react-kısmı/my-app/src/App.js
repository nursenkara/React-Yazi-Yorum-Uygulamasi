import React, { useEffect ,useState} from "react";
import axios from "axios";

function App() {
  const [yaziListesi,setYaziListesi]= useState([])
  useEffect(() => {
    axios
      .get("https://react-yazi-yorum.herokuapp.com/posts")
      .then((response) => {
        setYaziListesi(response.data);
      });
  }, []);
  return (
    <div className="main_wrapper">
      <header></header>
      <div class="ui raised very padded text container segment">
        <div className="item">
          <i className="large github middle aligned icon"></i>
          <div className="content">
            <span className="header">Semantic-Org/Semantic-UI</span>
            <div className="description">Updated 10 mins ago</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
