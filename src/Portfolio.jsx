import React, { useState } from 'react';
import Styled, { keyframes } from 'styled-components';
import Linkedin from './images/linkedin.png';
import Github from './images/github.png';
import Curriculo from './images/curriculo.png';
import Projetos from './images/projetos.png';
import ProjectsModal from './ProjectsModal';
import CurriculoPdf from './files/Curriculo.pdf';

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const hoverEffect = keyframes`
  0% {
    transform: scale(1);
    filter: brightness(1);
  }
  50% {
    transform: scale(1.1);
    filter: brightness(1.2);
  }
  100% {
    transform: scale(1);
    filter: brightness(1);
  }
`;

const MainDiv = Styled.div`
    height: 100vh;
    background: linear-gradient(145deg, #4e54c8, #8f94fb);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: ${slideIn} 1s ease-out;

    @media(max-width: 768px) {
        padding: 1rem;
        text-align: center;
    }
`;

const TextContainer = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;

    @media(max-width: 768px) {
        align-items: center;
        text-align: center;
    }
`;

const NameContainer = Styled.div`
    display: flex;
    align-items: center;
    margin-bottom: -1rem;

    @media(max-width: 768px) {
        flex-direction: column;
        align-items: center;
        margin-bottom: 0;
    }
`;

const IconsContainer = Styled.div`
    display: flex;
    gap: 1rem;
    margin-left: 1rem;

    @media(max-width: 768px) {
        margin-left: 0;
        margin-bottom: 1rem;
        justify-content: center;
    }
`;

const Icon = Styled.a`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;
    cursor: pointer;

    @media(max-width: 768px) {
        width: 2.5rem;
        height: 2.5rem;
    }

    &:hover {
        animation: ${hoverEffect} 0.5s ease-in-out infinite;
    }

    &.linkedin {
        background-image: url(${Linkedin});
    }

    &.github {
        background-image: url(${Github});
    }

    &.curriculo {
        background-image: url(${Curriculo});
    }

    &.projetos {
        background-image: url(${Projetos});
    }
`;

const Name = Styled.h2`
    background: linear-gradient(145deg, #ccc, #ffffff);
    -webkit-background-clip: text;
    color: transparent;
    font-size: 4rem;
    margin: 0;

    @media(max-width: 768px) {
        font-size: 2rem;
        margin-left: 0;
        margin-bottom: 0.5rem;
    }
`;

const Tec = Styled.h1`
    background: linear-gradient(145deg, #ccc, #ffffff);
    -webkit-background-clip: text;
    color: transparent;
    font-size: 10rem;
    margin: 0;
    margin-bottom: -3rem;

    @media(max-width: 768px) {
        font-size: 3.5rem;
        margin-left: 0;
        margin-bottom: 0;
    }
`;

const Description = Styled.p`
    font-size: 1.5rem;
    color: white;
    margin-top: 3rem;
    width: 30rem;
    margin-left: 18rem;

    @media(max-width: 768px) {
        font-size: 1rem;
        width: 100%;
        margin-left: 0;
        margin-right: 0;
        margin-top: 2rem;
    }
`;

const Portfolio = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <MainDiv>
            <TextContainer>
                <NameContainer>
                    <Name>Gabriel Dill</Name>
                    <IconsContainer>
                        <Icon href="https://www.linkedin.com/in/gabriel-dill-401342324/" target="_blank" className="linkedin" />
                        <Icon href="https://github.com/GabrielDillDev" target="_blank" className="github" />
                        <Icon href={CurriculoPdf} download className="curriculo" />
                        <Icon href="#" className="projetos" onClick={(e) => {
                            e.preventDefault();
                            openModal();
                        }} />
                    </IconsContainer>
                </NameContainer>
                <Tec>FullStack</Tec>
                <Tec>Developer</Tec>
                <Description>Tenho 23 anos e sou desenvolvedor fullstack trabalhando há alguns meses como freelancer.</Description>
            </TextContainer>
            <ProjectsModal isOpen={isModalOpen} onClose={closeModal} />
        </MainDiv>
    );
}

export default Portfolio;
