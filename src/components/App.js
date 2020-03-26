import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import LoginPage from "./LoginPage";
import UsersPage from "./UsersPage";
import HomePage from "./HomePage";
import UserForm from "./UserForm";
import MyModal from "./MyModal";


function App() {
    return (
        <>
            <MyModal>
            </MyModal>
            <Router>
                <Switch>
                    <Route path="/meetings">
                        789
                    </Route>
                    <Route exact path="/login">
                        <LoginPage/>
                    </Route>
                    <Route exact path="/home">
                        <HomePage/>
                    </Route>
                    <Route path="/users">
                        <UsersPage/>
                    </Route>
                    <Route path="/meetings">
                        789
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
