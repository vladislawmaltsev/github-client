import React from "react";
import './profile.scss';
import {Card} from "antd";
import {Link} from "react-router-dom";
import Star from "../repositories/Star";

const Repositories = ({repositories}) => (
    <div className="repositories">
        {repositories.edges.map(({node}) => {
            return (
                <Link key={node.id} to={`/repository/${node.owner.login}/${node.name}`}>
                    <Card hoverable className="mb-10">  <span className="repository-name">{node.name}</span>
                        <Star id={node.id} hasStarred={node.viewerHasStarred} />
                    </Card>
                </Link>
            );})
        }
    </div>
);

export default Repositories;