import React from 'react';
import '../App.css';
import 'antd/dist/antd.css';
import {Button, PageHeader} from "antd";
import Octocat from "./static/images/Octocat.png";
import {useHistory} from "react-router-dom";

function App({children}) {
    let history = useHistory();
    return (
        <div>
            {history.location.pathname !== '/login' &&
            <PageHeader
                style={{
                    border: '1px solid rgb(235, 237, 240)',
                }}
                title={
                    <img height="40px" src={Octocat} alt="logo"/>
                }
                extra={[
                    <Button className="button-theme" key="3" onClick={() => history.push('/search')} shape="square" icon="search"> 
                        Search
                    </Button>,
                    <Button  className="button-theme" key="2" onClick={() => history.push('/my-profile')} shape="square" icon="user">
                        Profile
                    </Button>,
                    <Button className="logout-button" onClick={logOut} key="1" shape="square" type="primary" icon="logout">
                        Logout
                    </Button>,
                ]}
            />
            }
            <div style={Layout}>
                {children}
            </div>
        </div>
    );

    function logOut() {
        localStorage.removeItem('token');
        history.push('/login');
    }
}

export default App;

const Layout = {
    margin: '50px'
};
