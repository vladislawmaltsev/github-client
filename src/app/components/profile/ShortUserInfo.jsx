import React from "react";
import {Avatar} from "antd";

function ShortUserInfo({user}) {
    return (
        <div>
            <Avatar shape="square"  size={200} src={user.avatarUrl} alt="avatar"/>
            <h2>{user.name}</h2>
            <p>{user.login}</p>
        </div>
    )
}


export default ShortUserInfo;