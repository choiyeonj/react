import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './pages/productData';
import styled, { keyframes } from 'styled-components';

import About from './pages/About';
import Detail from './pages/Detail';
import Cart from './pages/Cart';

import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './pages/store';

const Wrap = styled.div`
    width: 1300px;
    margin: 0 auto;
`;

const TextBox = styled.div`
    background-color: #f8f8f8;
`;

const Title = styled.h2`
    background-color: #fdd000;
    padding: 50px;
    text-align: center;
    margin-bottom: 80px;
    color: #444;
    font-weight: 900;
`;

function App() {
    const navigate = useNavigate();
    const [bests] = useState(data);
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <div className='App'>
            <Navbar bg='bright' data-bs-theme='bright' className='nav_bar'>
                <Container>
                    <Navbar.Brand
                        onClick={() => {
                            navigate('/');
                        }}
                    >
                        <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='logo' className='logo' />
                    </Navbar.Brand>

                    <Nav className='me-auto'>
                        <Nav.Link
                            onClick={() => {
                                navigate('/about');
                            }}
                        >
                            메가 스토리
                        </Nav.Link>

                        <Nav.Link
                            onClick={() => {
                                navigate('/cart');
                            }}
                        >
                            Cart
                        </Nav.Link>
                    </Nav>
                    <a href='https://blog.naver.com/ekddusekddus' target='_blank' className='nav_btn'>
                        <img src={process.env.PUBLIC_URL + '/images/sns_blog.png'}></img>
                    </a>
                    <a href='https://www.facebook.com/mega.mgc.coffee.official' target='_blank' className='nav_btn'>
                        <img src={process.env.PUBLIC_URL + '/images/sns_facebook.png'}></img>
                    </a>
                    <a href='https://www.instagram.com/mega.mgc.coffee_official/' target='_blank' className='nav_btn'>
                        <img src={process.env.PUBLIC_URL + '/images/sns_instagram.png'}></img>
                    </a>
                </Container>
            </Navbar>

            <Routes>
                <Route
                    path='/'
                    element={
                        <>
                            <img src={process.env.PUBLIC_URL + '/images/visual_main_01.jpg'} alt='vm' className='main_visual' />
                            <Title>
                                메가MGC커피의 엄선된 메뉴 <br /> MEGA MENU
                            </Title>
                            <Wrap>
                                <Row>
                                    {bests.map((best, index) => {
                                        return (
                                            <Col>
                                                <Link
                                                    to={`detail/${index}`}
                                                    style={{
                                                        textDecoration: 'none',
                                                        color: '#222',
                                                        display: 'block',
                                                        width: 280,
                                                        margin: '0 auto',
                                                        boxShadow: 'rgba(0,0,0,0.1) 3px 3px 14px',
                                                    }}
                                                >
                                                    <div className='img_box' style={{ overflow: 'hidden' }}>
                                                        <img src={best.image} alt='product_img' style={{ width: 280 }}></img>
                                                    </div>
                                                    <TextBox>
                                                        <h4 style={{ fontSize: 18, paddingTop: 10 }}>{best.title}</h4>
                                                        <p
                                                            style={{
                                                                fontSize: 14,
                                                                margin: '10px 0',
                                                            }}
                                                        >
                                                            {best.desc}
                                                        </p>
                                                        <p>{best.price}</p>
                                                    </TextBox>
                                                </Link>
                                                <button
                                                    onClick={() => {
                                                        dispatch(addItem({ id: best.id, title: best.title, count: 1, price: best.price }));
                                                    }}
                                                >
                                                    장바구니
                                                </button>
                                            </Col>
                                        );
                                    })}
                                </Row>
                            </Wrap>
                        </>
                    }
                />
                <Route path='about' element={<About />}>
                    <Route path='info' element={<div>Infomation</div>} />
                </Route>
                <Route path='detail/:id' element={<Detail bests={bests} />} />
                <Route path='cart' element={<Cart />} />
            </Routes>
        </div>
    );
}

export default App;
