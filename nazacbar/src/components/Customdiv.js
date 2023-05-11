import React, { useState } from 'react';
// test
const CustomDiv1 = ({ text }) => {
    const customStyle = {
        padding: '2em 2em',
        margin: '2em 10px',
        fontWeight: 'bold',
        color: '#565656',
        background: '#ffeaea',
        boxShadow: '0px 0px 0px 10px #ffeaea',
        border: 'dashed 2px #ffc3c3',
        borderRadius: '8px',
        width: '97%',
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={customStyle}>
                <h3>드론의 정의</h3>
                <p>{text}</p>
            </div>
        </div>
    );
};

const CustomDiv2 = ({ text }) => {
    const customStyle = {
        padding: '2em 2em',
        margin: '2em 10px',
        fontWeight: 'bold',
        color: '#565656',
        background: '#FFF8E8',
        boxShadow: '0px 0px 0px 10px #FFF8E8',
        border: 'dashed 2px #FFC06E',
        borderRadius: '8px',
        width: '97%'
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={customStyle}>
                <h3>드론의 역사</h3>
                <p>{text}</p>
            </div>
        </div>
    );
}

const CustomDiv3 = ({ text }) => {
    const customStyle = {
        padding: '2em 2em',
        margin: '2em 10px',
        fontWeight: 'bold',
        color: '#565656',
        background: '#E4FCFF',
        boxShadow: '0px 0px 0px 10px #E4FCFF',
        border: 'dashed 2px #1DC1D6',
        borderRadius: '8px',
        width: '97%'
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={customStyle}>
                <h3>현재의 드론</h3>
                <p>{text}</p>
            </div>
        </div>
    );
}

const CustomDiv4 = ({ text }) => {
    const customStyle = {
        padding: '2em 2em',
        margin: '2em 10px',
        fontWeight: 'bold',
        color: '#565656',
        background: '#F8E8FF',
        boxShadow: '0px 0px 0px 10px #F8E8FF',
        border: 'dashed 2px #8A66AE',
        borderRadius: '8px',
        width: '97%'
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={customStyle}>
                <h3>드론의 미래 동향</h3>
                <p>{text}</p>
            </div>
        </div>
    );
}

export { CustomDiv1, CustomDiv2, CustomDiv3, CustomDiv4 };
