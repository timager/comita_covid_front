import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import LoginPage from "./LoginPage";
import UsersPage from "./UsersPage";
import HomePage from "./HomePage";
import MyModal from "./MyModal";
import MeetingsPage from "./MeetingsPage";
import Security from "./Security";
import HomePageEn from "./HomePageEn";

// const staticContent = `
//         <!-- Yandex.Metrika counter -->
//             <script type="text/javascript" >
//                 (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
//                 m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
//                 (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
//                 ym(61405390, "init", {
//                 clickmap:true,
//                 trackLinks:true,
//                 accurateTrackBounce:true,
//                 webvisor:true
//             });
//             </script>
//             <noscript><div><img src="https://mc.yandex.ru/watch/61405390" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
//             <!-- /Yandex.Metrika counter -->
//     `;

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
                    <Route exact path="/en">
                        <HomePageEn/>
                    </Route>
                    <Route path="/meetings">
                        <MeetingsPage currentUser={{id:1}}/>
                    </Route>
                    <Security>{
                        user => {
                            return (<>
                                <Route exact path="/">
                                    <HomePage/>
                                </Route>
                                <Route exact path="/en">
                                    <HomePageEn/>
                                </Route>
                                <Route path="/users">
                                    <UsersPage/>
                                </Route>
                                <Route path="/meetings">
                                    <MeetingsPage currentUser={user}/>
                                </Route>
                            </>);
                        }
                    }
                    </Security>
                </Switch>
            </Router>
            {/*<div dangerouslySetInnerHTML={{__html: staticContent}}/>*/}
        </>
    );
}

export default App;
