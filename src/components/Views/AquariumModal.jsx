import React, { useState, useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { showAquariumModal, setShowAquariumModal } from "./Aquariums";
import { MdClose } from "react-icons/md";



const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const AquariumModal = ({ showAquariumModal, setShowAquariumModal }) => {
    const aquariumModalRef = useRef();

    const animation = useSpring({
      config: {
        duration: 2500
      },
      opacity: showAquariumModal ? 1 : 0,
      transform: showAquariumModal ? `translateY(0%)` : `translateY(-100%)`
    });
  
    const closeAquariumModal = e => {
      if (aquariumModalRef.current === e.target) {
        setShowAquariumModal(false);
      }
    };
  
    const keyPress = useCallback(
      e => {
        if (e.key === 'Escape' && showAquariumModal) {
          setShowAquariumModal(false);
          console.log('I pressed');
        }
      },
      [setShowAquariumModal, showAquariumModal]
    );
  
    useEffect(
      () => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
      },
      [keyPress]
    );
  
    return (
      <>
        {showAquariumModal ? (
          <Background onClick={closeAquariumModal} ref={aquariumModalRef}>
            <animated.div style={animation}>
              <ModalWrapper showAquariumModal={showAquariumModal}>
                <ModalImg src={require('./aquascape.jpg')} alt='aquarium' />
                <ModalContent>
                  <h1>Are you ready?</h1>
                  <p>Get exclusive access to our next launch.</p>
                  <button>Join Now</button>
                </ModalContent>
                <CloseModalButton
                  aria-label='Close aquarium modal'
                  onClick={() => setShowAquariumModal(prev => !prev)}
                />
              </ModalWrapper>
            </animated.div>
          </Background>
        ) : null}
      </>
    );
  };