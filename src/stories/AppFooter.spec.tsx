import React from 'react';
import { render, screen } from '@testing-library/react';
import { AppFooter } from '@src/AppFooter';

describe('AppBody', () => {
  it('Render <AppFooter> without data', () => {
    const { asFragment } = render(<AppFooter countUsers={50} />);
    expect(asFragment()).toMatchSnapshot();
    const dataMessage = screen.getByText(/Количество пользователей: 50/gi);
    expect(dataMessage).toBeInTheDocument();
  });
});
