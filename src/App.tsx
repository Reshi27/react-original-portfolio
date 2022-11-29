// import './App.css'
import { AppRouter } from "./components/router/AppRouter";
import { GlobalStyle } from "./style/GlobalStyle";
import { Fragment } from "react";
function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <AppRouter></AppRouter>
    </Fragment>
  );
}

export default App;
