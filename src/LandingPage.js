import { Layout, Typography} from 'antd';
import {
  CopyrightOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

export default function LandingPage(){
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
      <Content>
         <Title style={{ textAlign: 'center', color: 'pink',fontSize: '100px'}}>Caitlin Magee</Title>
         <Title style={{ textAlign: 'center', color: 'pink',fontSize: '50px'}}> Software Engineer</Title>
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