import { HashRouter } from "react-router-dom";

import PageList from "./PageList";

const App = () => {
  return (
    <>
      <HashRouter>
        <PageList />
      </HashRouter>
    </>
  );
};

export default App;
