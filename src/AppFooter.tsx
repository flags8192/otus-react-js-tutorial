import React, { PureComponent } from 'react';
import styled from '@emotion/styled';

const Root = styled.div`
  height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

interface IAppFooter {
  countUsers: number;
}
export class AppFooter extends PureComponent<IAppFooter> {
  render() {
    return (
      <Root>
        <p role="userCount">Количество пользователей: {this.props.countUsers}</p>
      </Root>
    );
  }
}
