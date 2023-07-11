import React from 'react';
import { useParams } from 'react-router-dom';
import './main.css';
import { useDispatch } from 'react-redux';
import { addItem } from './store';
import styled, { keyframes } from 'styled-components';

const Wrap = styled.div`
    width: 1300px;
    margin: 0 auto;
    margin-top: 150px;
`;

export default function Detail(props) {
    const { bests } = props;
    const { id } = useParams();
    const dispatch = useDispatch();

    return (
        <Wrap>
            <p className='detail_title'>{bests[id].title}</p>
            <div className='detail_box'>
                <img src={bests[id].image} alt='detail_img' style={{ width: 500 }} />
                <div className='text_wrap'>
                    <h4>{bests[id].title}</h4>
                    <p>{bests[id].price}</p>
                    <button
                        onClick={() => {
                            dispatch(addItem({ id: bests[id].id, title: bests[id].title, count: 1, price: bests[id].price }));
                        }}
                    >
                        장바구니
                    </button>
                </div>
            </div>
        </Wrap>
    );
}
