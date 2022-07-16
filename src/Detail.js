import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Table, Container, Col, Row, Image } from 'react-bootstrap';


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
      {true && (
               <div style={{textAlign: 'center'}}>
                   {/* <h2> title </h2>
                   <span> sub title </span>   */}

                   <div align="center"> 
                   <div align="left"><Button href="/"><Image alt='<-' src='/logo192.png' /* onClick={() => window.location.assign('/')} */></Image></Button></div>
                    {/* <Table striped bordered hover> */}
                    <Table>
                      <thead>
                        <tr align="center">
                          <th colSpan="2"><h1>Title</h1></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr align="center">
                          <td colSpan="2"><Image alt='' src='/logo512.png'></Image></td>
                        </tr>
                        <tr>
                          <td align="right"><span><b>right</b></span></td>
                          <td align="left"><span>left</span></td>
                        </tr>
                        <tr>
                        <td align="right"><span><b>right</b></span></td>
                          <td align="left"><span>left</span></td>
                        </tr>
                        <tr>
                        <td align="right"><span><b>right</b></span></td>
                          <td align="left"><span>left</span></td>
                        </tr>
                      </tbody>
                    </Table>
                   
                      {/* <Row> 
                          <Col md={2} />
                          <Col md={2} style={{textAlign: "right"}}><h4>right</h4></Col>  
                          <Col md={1} /> 
                          <Col md={5} style={{textAlign: "left"}}><span>left</span></Col>                       
                      </Row>
                      <Row> 
                        <Col style={{textAlign: "left"}}><Image alt='<-' src='/logo192.png'></Image></Col>    
                      </Row>
                      <Row> 
                        <Col style={{textAlign: "center"}}><h1>Title</h1></Col>    
                      </Row>
                      <Row> 
                        <Col style={{textAlign: "center"}}><Image alt='' src='/logo512.png'></Image></Col>    
                      </Row>
                      <Row> 
                        <Col md={5} style={{textAlign: "ritght"}}>Right</Col>    
                        <Col md={5} style={{textAlign: "left"}}><span>Left</span></Col>
                      </Row>
                      <Row>
                        <Col style={{
                          backgroundColor: 'red',
                        }}>
                          Sample First Col
                        </Col>
                          <Col style={{
                            backgroundColor: 'yellow',
                          }}>
                            Sample Second Col
                        </Col>
                          <Col style={{
                            backgroundColor: 'green',
                          }}>
                            Sample Third Col
                        </Col>
                      </Row> */}
                   

                   </div>
                </div>   
           )}
    </div>
  );
}

export default Detail;
