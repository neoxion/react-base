import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

function Detail() {
  
  const history = useHistory();
  const { id } = useParams();
  const [Detail, setDetail] = useState();

  const getDetail = async id => {
    axios.get(`/detail/${id}`, {
      params: {
        id: id
      }
    })
    .then( response => {
      console.log(response);
      setDetail(response);
    })
    .catch(error => {
      console.log(error);
    })
    .then(() => {
      // always executed
    });
  }

  useEffect(() => {
    getDetail();
  }, [])
  
  return (
    <div className="App">
      detail
    </div>
  );
}

export default Detail;
