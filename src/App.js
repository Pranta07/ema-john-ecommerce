import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import OrderReview from "./components/OrderReview/OrderReview";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
    return (
        <AuthProvider>
            <Router>
                <Header></Header>
                <Switch>
                    <Route exact path="/">
                        <Shop></Shop>
                    </Route>
                    <Route exact path="/shop">
                        <Shop></Shop>
                    </Route>
                    <Route exact path="/review">
                        <OrderReview></OrderReview>
                    </Route>
                    <PrivateRoute exact path="/inventory">
                        <Inventory></Inventory>
                    </PrivateRoute>
                    <Route exact path="/login">
                        <Login></Login>
                    </Route>
                    <Route exact path="/register">
                        <Register></Register>
                    </Route>
                    <Route path="*">
                        <NotFound></NotFound>
                    </Route>
                </Switch>
            </Router>
        </AuthProvider>
    );
}

export default App;
