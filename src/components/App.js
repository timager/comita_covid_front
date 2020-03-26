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
import MeetingsPage from "./MeetingsPage";
import Security from "./Security";


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
                    {/*<Security>{*/}
                    {/*    user => {*/}
                    {/*        return (<>*/}
                                <Route exact path="/">
                                    <HomePage/>
                                </Route>
                                <Route path="/users">
                                    <UsersPage currentUser={null}/>
                                </Route>
                                <Route path="/meetings">
                                    <MeetingsPage currentUser={null}/>
                                </Route>
                    {/*        </>);*/}
                    {/*    }*/}
                    {/*}*/}
                    {/*</Security>*/}
                </Switch>
            </Router>
        </>
    );
}

export default App;
