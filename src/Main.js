import axios from 'axios';
import { useState, useEffect } from 'react';

function Main() {
  
  const [List, setList] = useState();

  const getList = () => {
    axios.get(`/`, {
      params: {
        // id: id
      }
    })
    .then( response => {
      console.log(response);
      setList(response);
    })
    .catch(error => {
      console.log(error);
    })
    .then(() => {
      // always executed
    });
  }

  useEffect(() => {
    getList();
  }, [])
  
  return (
    <div className="App">
      main
    </div>
  );
}

export default Main;
