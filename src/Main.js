import axios from 'axios';
import { useState, useEffect } from 'react';
import { Table, Container, Col, Row, Image } from 'react-bootstrap';
import {useHistory} from 'react-router-dom'

const data = {
  "itemList":[
    {
      "id":1,
      "title":"at",
      "price":100,
      "imageFile":"logo192.png"
    },
    {
      "id":2,
      "title":"bt",
      "price":200,
      "imageFile":"logo512.png"
    },
    {
      "id":3,
      "title":"ct",
      "price":300,
      "imageFile":"logo192.png"
    }
  ]
}



function Main() {
  
  const history = useHistory();
  const [list, setList] = useState([]);
  const [newList, setNewList] = useState([]);

  const getList = () => {
    axios.get(`/`, {
      params: {
        // id: id
      }
    })
    .then( response => {
      console.log(response);
      // setList(response);
      // setList(data.itemList)
    })
    .catch(error => {
      console.log(error);
    })
    .then(() => {
      // always executed
    }).finally(() => {
      
    });
  }

  const getDetail = (id) => {
    // const chartDetail = await getChartDetail(id);
    // console.log('chartDetail', chartList.chart);
    if(id !== undefined) {
      history.push('/detail/' + id);
    }
  }

  useEffect(() => {
    // getList();
    const newLine = [];
      while(data.itemList.length > 0) {
        const odd = data.itemList.shift() || undefined;
        const even = data.itemList.shift() || undefined;
        const line = [odd, even]
        console.log(line);
        newLine.push(line);
      }
      setNewList(newLine);
  }, [])
  
  return (
    <div className="App">
      <Table align="center">
        <thead>
          <tr>
            <th colSpan="4"><h1>Title</h1></th>
          </tr>
        </thead>
        <tbody>
          {newList && newList.length > 0 && newList.map((items, index) => {
            // console.log(items.length, index, items[0], items[1]);
            return (
              <tr key={index}>
                <td onClick={() => getDetail(items[0].id)}>
                  <Table align="center">
                    <tbody>
                      <tr>{items[0].id}</tr>
                      <tr>{items[0].title}</tr>
                      <tr>{items[0].price}</tr>
                      <tr><Image alt='' src={"/" + items[0].imageFile}></Image></tr>
                    </tbody>
                  </Table>
                </td>
                {items[1] && (
                  <td onClick={() => getDetail(items[1].id)}>
                    <Table align="center">
                    <tbody>
                        <tr>{items[1].id}</tr>
                        <tr>{items[1].title}</tr>
                        <tr>{items[1].price}</tr>
                        <tr><Image alt='' src={"/" + items[1].imageFile}></Image></tr>
                      </tbody>
                    </Table>
                  </td>
                )

                }
              </tr>)
          })}
          {/* <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr> */}
        </tbody>
      </Table>
    </div>
  );
}

export default Main;
