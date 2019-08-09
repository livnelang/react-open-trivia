import React, { PureComponent } from "react";
import styled from 'styled-components';
import './header.css';
import { FaGithub } from 'react-icons/fa';

const GitHubLinkBox = styled.div`
    position: fixed;
    cursor: pointer;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`
    font-family: 'Cairo-ExtraLight';
    font-size: 113px;
    font-weight: 500;
    margin: 0;
    max-height: 180px;
`;

export default class Header extends PureComponent {

    render() {
        return (
            <div className="topPanel flexColumnCenter">
                <GitHubLinkBox>
                    <FaGithub size={30} />
                </GitHubLinkBox>
                <Wrapper>
                    <Title>Trivia time!</Title>
                    <p>Go on, start by selecting your category!</p>
                </Wrapper>
            </div>
        );
    }
}