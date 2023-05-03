import { Container, Row, Col } from "react-bootstrap";
import { ImFacebook, ImTwitter, ImLinkedin2, ImInstagram, ImGithub } from 'react-icons/im';
import '../css/styles.css';

export default function Footer() {
    return (
        <Container fluid style={{
            backgroundColor: '#324adc',
            paddingTop: '3rem',
            paddingBottom: '3rem',
        }}>
            <Row>
                <Col style={{ fontSize: 'x-large', color: 'white', textAlign: 'center',  }}>
                    <ImFacebook className="m-2"/>
                    <ImTwitter className="m-2"/>
                    <ImLinkedin2 className="m-2"/>
                    <ImInstagram className="m-2"/>
                    <ImGithub className="m-2"/>
                </Col>
            </Row>
            <Row>
                <Col style={{ fontSize: 'x-small', color: 'white', textAlign: 'center',  }}>
                    © Copyright 2023 | Design by Felipe Martinez
                </Col>
            </Row>
        </Container>
    ); 
}