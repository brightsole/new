import { injectGlobal, ThemeProvider } from 'styled-components';
import { Article, NavBar } from './layout/nav';
import { AppLayout } from './layout';
import { Icon } from './layout/zoo';
import { TDefault } from './theme';

/* eslint-disable-next-line no-unused-expressions */
injectGlobal`
  html, body {
    width: 100%;
    height: 100%;
    min-height: 100%;
    font-family: helvetica;
    background-color: white;
  }
  * {
    margin: 0;
    padding: 0;
    color: inherit;
    font-size: inherit;
    align-items: center;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    background-color: inherit;
  }
  h1 { font-size: 36px; }
  h2 { font-size: 32px; }
  h3 { font-size: 28px; }
  h4, label { font-size: 24px; }
  h5 { font-size: 20px; }
  h6, p, div { font-size: 16px; }
  small { font-size: 12px; }

  h1, h2 { font-family: impact; }
  label, small {
    font-family: Garamond, 'Trebuchet MS', Times, serif;
    font-style: italic;
  }
`;

const App = () => (
  <ThemeProvider theme={TDefault}>
    <AppLayout>
      <NavBar />
      <Article>
        <h1>This is a header</h1>
        <p>
          <strong>p: </strong>
          Helvetica === class????
        </p>
        <small>
          {"(don't forget to implement ligatures)"}
          <Icon />
        </small>
      </Article>
    </AppLayout>
  </ThemeProvider>
);

export default App;
