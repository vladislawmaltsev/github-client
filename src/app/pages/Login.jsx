import React from "react";
import {Button, Col, Row} from "antd";
import Octocat from "../static/images/Octocat.png";
import "./styles.scss";

function Login() {

    const CLIENT_ID = "decf03864073e59a11873";
    const REDIRECT_URI = "https://fathomless-bayou-38075.herokuapp.com/search";

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