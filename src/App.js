import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages";
import TermsOfService from "./pages/termsOfService";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/termsofservice" component={TermsOfService} exact />
        {/* <Route path="/signin" component={SigninPage} exact /> */}
      </Switch>
    </Router>
  );
}

export default App;
