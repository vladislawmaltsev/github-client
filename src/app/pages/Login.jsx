import React, {useState, useEffect} from "react";
import {Button, Col, Icon, Input, Row} from "antd";
import github from "../static/images/github.png";
import "./styles.scss";
import { useLazyQuery } from '@apollo/react-hooks';
import {Redirect} from "react-router-dom";
import VALIDATION_QUERY from "../graphql/queries/validation";

function Login() {

    const CLIENT_ID = "df76084ebaa9a735ff88";
    const REDIRECT_URI = "http://localhost:3000/search";

    return (
        <div>
            <Row type="flex" justify="center">
                <Col align="center" xs={20} sm={16} md={12} lg={8} xl={8}>
                    <img src={github} alt="" className="mb-10 img"/>
                
                    <Button 
                        href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user%20public_repo%20gist&redirect_uri=${REDIRECT_URI}`}
                    >
                        Log in
                    </Button>
                </Col>
            </Row>
        </div>
    );
}

export default Login;