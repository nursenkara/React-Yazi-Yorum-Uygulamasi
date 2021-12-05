import React, { useState, useEffect } from "react";
import axios from "axios";

const YaziListesi = (props) => {
  const [yaziListesi, setYaziListesi] = useState([]);
  useEffect(() => {
    axios
      .get("https://react-yazi-yorum.herokuapp.com/posts")
      .then((response) => {
        setYaziListesi(response.data);
      });
  }, []);

  return (
    <div className="ui relaxed divided list">
      {yaziListesi.map((yazi) => {
        return (
          <div className="item" key={yazi.id}>
            <i className="large github middle aligned icon"></i>
            <div className="content">
              <span className="header">{yazi.title}</span>
              <div className="description">{yazi.created_at}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default YaziListesi;
