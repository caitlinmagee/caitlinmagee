import { Layout, Typography, Col, Row} from 'antd';
import {
  CopyrightOutlined
} from '@ant-design/icons';
import profilePic from './images/profilePic.JPG'
import { Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

export default function About(){
  return (
    <Layout
       style={{
               backgroundColor: '#89CFF0',
               minHeight:"100vh"
             }}
    >
<Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#89CFF0'
        }}
      >
       <Link to="/" >
            Home
          </Link>
        <Link to="/about" >
            About
        </Link>
        <Link to="/enquiries" >
            Enquiries
        </Link>
      </Header>
      <Content
        style={{
             padding: '0 50px'
           }}
      >
      <Row>
            <Col flex="80%"> <Title>About Me</Title>
                                            <Title level={4}>Caitlin Magee</Title></Col>
            <Col flex="auto"> <img
                                                 style={{
                                                         width: "200px",
                                                         height: "300px",
                                                         borderRadius: "100px"}}
                                                 src={profilePic} className="App-logo" alt="logo" /></Col>
          </Row>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
          backgroundColor: '#89CFF0'}}
      >
        Caitlin Magee Portfolio <CopyrightOutlined /> Created 2023
      </Footer>
    </Layout>
  );
}