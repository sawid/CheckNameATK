import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { listNameAll, listNameSent } from "../functions/main";

const Main = () => {
  const [dataNameAll, setDataNameAll] = useState([]);
  const [dataNameSent, setDataNameSent] = useState([]);

  const loadData = () => {
    listNameAll()
      .then((res) => {
        setDataNameAll(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loadDataSent = () => {
    listNameSent()
      .then((res) => {
        setDataNameSent(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    loadData();
    loadDataSent();
  }, []);

  console.log("dataNameAll");
  console.log(dataNameAll);
  console.log(dataNameSent);
  if (
    Object.keys(dataNameAll).length === 0 &&
    Object.keys(dataNameSent).length === 0
  ) {
    return <div className="App">Loading...</div>;
  } else {
    return (
      <Container>
        <Row>
                <Col>
                        <Button className="m-2" variant="success"><Link style={{ textDecoration: "none", color: "white" }} to="/sec">ไปหน้าผล ATK (ปี 2)</Link></Button>
                        
                </Col>
        </Row>
        <Row>
          <Col>รายชื่อผู้ส่ง ATK (ปี 1)</Col>
        </Row>
        <Row>
          <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>เลขประจำตัว</th>
                <th>ชื่อ นามสกุล</th>
                <th>เบอร์โทรศัพท์</th>
                <th>สถานะ</th>
              </tr>
            </thead>
            <tbody>
              {dataNameAll.map((post) => {
                return (
                  <tr>
                    <td>{post.Number}</td>
                    <td>{post.Name}</td>
                    <td>{post.Phone}</td>
                    <td>
                      {dataNameSent.find((element) => element.Name === post.Name) ? <Badge bg="success">{ "ส่งเอกสารแล้ว" }</Badge> : <Badge bg="danger">{ "ยังไม่ส่งเอกสาร" }</Badge> }
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          </Col>
          
        </Row>
      </Container>
    );
  }
};

export default Main;
