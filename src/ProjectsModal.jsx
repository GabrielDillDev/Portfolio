import React, { useState, useEffect } from 'react';
import Styled, { keyframes } from 'styled-components';
import Projeto1 from './images/projeto1.png';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-50px);
  }
`;

const ModalOverlay = Styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${props => (props.isClosing ? fadeOut : fadeIn)} 0.5s ease-out;
  opacity: ${props => (props.isClosing ? '0' : '1')};
  pointer-events: ${props => (props.isClosing ? 'none' : 'auto')};
  transition: opacity 0.5s ease-out;
`;

const ModalContent = Styled.div`
  background: linear-gradient(145deg, #4e54c8, #8f94fb);
  padding: 2rem;
  border-radius: 8px;
  width: 90vw; 
  max-width: 1000px; 
  height: 90vh; 
  max-height: 800px; 
  animation: ${fadeIn} 0.5s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: auto;
  box-sizing: border-box;
`;

const CloseButton = Styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;
`;

const Title = Styled.h2`
  color: white;
  margin: 0 0 1rem 0;
  font-size: 2.5rem; 
`;

const GridContainer = Styled.div`
  display: grid;
  gap: 1rem; 
  width: 100%;
  height: auto; 
  padding: 1rem;
  box-sizing: border-box;
  overflow-y: auto; 
  align-items: start; 
  
  grid-template-columns: repeat(1, 1fr); 
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr); 
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr); 
  }
`;

const GridItem = Styled.div`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 180px; 
  width: 100%; 
  color: #333;
  font-size: 1.5rem; 
  padding: 1rem; 
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
`;

const ProjectLink = Styled.a`
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
`;

const ProjectImage = Styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease;
`;

const ProjectTitle = Styled.h3`
  color: white;
  margin-top: 0.5rem;
  font-size: 1.2rem;
  text-align: center;
  cursor: pointer;
  transition: color 0.3s ease;
`;

const GridItemWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative; 
  
  &:hover ${ProjectImage} {
    transform: scale(1.05);
  }
  
  &:hover ${ProjectTitle} {
    color: #333;
  }
`;

const ComingSoonTitle = Styled.h3`
  font-size: 1.5rem;
  color: #333;
  text-align: center;
`;

const ProjectsModal = ({ isOpen, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 500); 
  };

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
    }
  }, [isOpen]);

  if (!isOpen && !isClosing) return null;

  return (
    <ModalOverlay isClosing={isClosing} onClick={handleClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={handleClose}>&times;</CloseButton>
        <Title>Projetos</Title>
        <GridContainer>
          <GridItemWrapper>
            <GridItem>
              <ProjectLink href="https://whatsappbotclinica.vercel.app" target="_blank">
                <ProjectImage src={Projeto1} alt="Projeto 1" />
              </ProjectLink>
            </GridItem>
            <ProjectLink href="https://whatsappbotclinica.vercel.app" target="_blank">
              <ProjectTitle>WhatsApp Bot</ProjectTitle>
            </ProjectLink>
          </GridItemWrapper>
          <GridItemWrapper>
            <GridItem>
              <ComingSoonTitle>Em breve...</ComingSoonTitle>
            </GridItem>
            <ProjectTitle>Em breve...</ProjectTitle>
          </GridItemWrapper>
          <GridItemWrapper>
            <GridItem>
              <ComingSoonTitle>Em breve...</ComingSoonTitle>
            </GridItem>
            <ProjectTitle>Em breve...</ProjectTitle>
          </GridItemWrapper>
          <GridItemWrapper>
            <GridItem>
              <ComingSoonTitle>Em breve...</ComingSoonTitle>
            </GridItem>
            <ProjectTitle>Em breve...</ProjectTitle>
          </GridItemWrapper>
        </GridContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ProjectsModal;
