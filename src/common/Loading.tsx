import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const loading = document.getElementById('loading');

const Fullscreen = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Root = styled(Fullscreen)`
  background: rgba(0, 0, 0, 0.7);

  article {
    display: inline-block;
    width: 64px;
    height: 64px;

    div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 51px;
      height: 51px;
      margin: 6px;
      border: 4px solid #0055a6;
      border-radius: 50%;
      animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: #0055a6 transparent transparent transparent;
    }

    div:nth-child(1) {
      animation-delay: -0.45s;
    }

    div:nth-child(2) {
      animation-delay: -0.3s;
    }

    div:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
`;

export class Loading extends PureComponent {
  render() {
    return (
      loading &&
      createPortal(
        <Root role="loading">
          <article>
            <div />
            <div />
            <div />
            <div />
          </article>
        </Root>,
        loading
      )
    );
  }
}
