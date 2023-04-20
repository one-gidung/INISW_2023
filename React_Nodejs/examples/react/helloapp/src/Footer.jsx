import React from 'react';
import styled from 'styled-components';

const Footer = (props) => {
    const FooterBox = styled.div`
    position: absolute;
    right: 0; bottom: 0;  left: 0;
    padding: 1rem;
    background-color: ${
        (props)=> props.theme === 'basic' ? 'skyblue' : 'yellow'
    };
    text-align: center;
    `;
    return (
        <FooterBox theme={props.theme}>React styled-components!!</FooterBox>
    );
};

export default Footer;