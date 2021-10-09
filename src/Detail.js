import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Table, Image, Row, Col } from 'react-bootstrap';

function Detail() {

  const history = useHistory();
  const { id } = useParams();
  const [detail, setDetail] = useState();

  const getDetail = async id => {
    // axios.get(`http://localhost:3300/v1/chart/detail/${id}`).then(response => {
    //   setDetail(response);
    // })

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

  const handleClick = () => {
    history.goBack();
  }

  useEffect(() => {
    getDetail();
  }, [])

  return (
    <div className="App">
      <Image src={`../images/back_arrow.png`} onClick={handleClick} />

      {detail && (
          <div>
            <h1>{detail.title}</h1>
            <p>{detail.singer}</p>
            <Table>
            <tbody>
              <tr>
                <td>작사</td>
                <td align={'left'}>{detail.lyricist}</td>
              </tr>
              <tr>
                <td>작곡</td>
                <td align={'left'}>{detail.melodizer}</td>
              </tr>
              <tr>
                <td>장르</td>
                <td align={'left'}>{detail.genre}</td>
              </tr>
            </tbody>
            </Table>
          </div>
        )

      }
      <br/>

    </div>
  );
}

export default Detail;
