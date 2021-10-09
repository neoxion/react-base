import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Table, Image, Row, Col } from 'react-bootstrap';

function Main() {

  const history = useHistory();
  const [list, setList] = useState([]);

  const getList = (type) => {

    // axios.get(`http://localhost:3300/v1/chart/${type}`).then(response => {
    //   console.log(response);
    // })

    axios.get(`/`, {
      params: {
        type: type
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

  const handleClick = (id) => {
    history.push(`/detail/${id}`);
  }

  useEffect(() => {
    getList('typeA');
  }, []);

  return (
    <div className="App">
      <p>title</p>
      {/* https://react-bootstrap.github.io/components/table/ */}
      <Table striped bordered hover size="sm">
        <tbody>
          {list && list.length > 0 && list.map(({id, rank, title, singer, imageUrl}) => {
            return (
              <div>
                <Row style={{alignItems: "center"}} >
                    <Col md={2} style={{textAlign: 'right'}} onClick={() => handleClick(id)}>{id}</Col>
                    <Col md={2} style={{textAlign: 'center'}}>{rank}</Col>
                    <Col md={2}><img alt='' src={imageUrl}></img></Col>
                    <Col md={5} style={{textAlign: 'left'}}>{title}</Col>
                    <Col md={3} style={{textAlign: 'right', whiteSpace: "nowrap" ,textOverflow: "ellipsis", overflow: 'hidden'}}>{singer}</Col>
                </Row>
              </div>
            )
          })}
          {/* {list && list.length > 0 && list.map(item => {
            return (
              <tr key={item.id} onClick={() => handleClick(item.id)}>
                <td>{item.rank}</td>
                <td><Image src={`./images/${item.imageUrl}`} rounded /></td>
                <td align={'left'}>{item.title}</td>
                <td align={'right'}>{item.singer}</td>
              </tr>
            )
          })} */}
        </tbody>
      </Table>
    </div>
  );
}

export default Main;
