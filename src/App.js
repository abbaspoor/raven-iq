import {  Route, Switch} from "react-router-dom";
import Start from "./pages/Start";
import Run from "./pages/Run";
import Results from "./pages/Results";

function App() {
  return (
      <Switch>
        <Route exact path="/">
          <Start />
        </Route>
        <Route path="/run">
          <Run />
        </Route>
        <Route path="/result">
          <Results />
        </Route>
      </Switch>
  );
}

export default App;
