import React, {useState, useEffect} from "react";
import {Button, Col, Icon, Input, Row} from "antd";
import Octocat from "../static/images/Octocat.png";
import "./styles.scss";

function Login() {

    const CLIENT_ID = "df76084ebaa9a735ff88";
    const REDIRECT_URI = "http://localhost:3000/search";

    return (
        <div>
            <Row type="flex" justify="center">
                <Col align="center" xs={20} sm={16} md={12} lg={8} xl={8}>
                    <img src={Octocat} alt="" className="mb-10 img"/>
                
                    <Button 
                        href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user%20public_repo%20gist&redirect_uri=${REDIRECT_URI}`}
                        size="large"
                        className="button-theme"
                    >
                        Log in
                    </Button>
                </Col>
            </Row>
        </div>
    );
}

export default Login;