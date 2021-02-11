import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import logo from '../../assets/images/Logo.svg';

export default function Header() {
    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="logo" />
            </Link>
        </Container>
    );
}
