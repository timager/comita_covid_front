import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import LoginPage from "./LoginPage";
import UsersPage from "./UsersPage";
import MyModal from "./MyModal";


function App() {
    return (
        <>
            <MyModal>
            </MyModal>

            <Router>
                <Switch>
                    <Route exact path="/login">
                        <LoginPage/>
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
