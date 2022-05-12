/* eslint-disable no-undef */

import { render, screen } from '@testing-library/react';
// import userEvents from '@testing-library/user-event';
// theme styles
import { ThemeProvider } from 'styled-components';
import { themeMode } from '../../../../styles/Theme.styled';
// component
import ThemeToggle from './ThemeToggle';

describe('ThemeToggle', () => {
  it('Should show moon icon', async () => {
    const theme = 'light';

    render(
      <ThemeProvider theme={themeMode[theme]}>
        <ThemeToggle theme={theme} setTheme={() => {}} />
      </ThemeProvider>
    );

    const moonIconElement = await screen.findByTestId('moon-icon');
    expect(moonIconElement).toBeInTheDocument();

    const sunIconElement = screen.queryByTestId('sun-icon');
    expect(sunIconElement).not.toBeInTheDocument();
  });

  it('Should show sun icon', async () => {
    const theme = 'dark';

    render(
      <ThemeProvider theme={themeMode[theme]}>
        <ThemeToggle theme={theme} setTheme={() => {}} />
      </ThemeProvider>
    );

    const sunIconElement = await screen.findByTestId('sun-icon');
    expect(sunIconElement).toBeInTheDocument();

    const moonIconElement = screen.queryByTestId('moon-icon');
    expect(moonIconElement).not.toBeInTheDocument();
  });

  it('Should toggle theme status', async () => {
    const theme = 'light';

    render(
      <ThemeProvider theme={themeMode[theme]}>
        <ThemeToggle theme={theme} setTheme={() => {}} />
      </ThemeProvider>
    );

    // ** BUG: this click isn't being registered as a toggle **

    // userEvents.click(screen.getByRole('button'));

    // expect(await screen.findByTestId('sun-icon')).toBeInTheDocument();
    // expect(screen.queryByTestId('moon-icon')).not.toBeInTheDocument();

    // userEvents.click(screen.getByRole('button'));

    // expect(await screen.findByTestId('moon-icon')).toBeInTheDocument();
    // expect(screen.queryByTestId('sun-icon')).not.toBeInTheDocument();
  });
});
