import React, {useState, useEffect} from "react";
import {Input, Select} from "antd";
import "./styles.scss";
import UserSearchResult from "../components/search/UserSearch";
import RepositorySearch from "../components/search/RepositorySearch";
const {Option} = Select;



function Search() {
    let [searchType, setSearchType] = useState('repository');
    let [searchTerm, setSearchTerm] = useState('');


    useEffect(() => {
        const code = window.location.href.match(/\?code=(.*)/) && window.location.href.match(/\?code=(.*)/)[1];
        console.log(code);
        if (code) {
            fetch(`https://localhost:9999/authenticate/${code}`)
                .then(response => response.json())
                .then(({ token }) => {
                    if (token) {
                        localStorage.setItem('token', token);
                    }
                });
            
            }
    });

    return (
        <div>
            <div className="search-container">
                <Input className="search-input" value={searchTerm}
                       onChange={(event) => setSearchTerm(event.target.value)} placeholder={searchType}/>

                <Select
                    value={searchType}
                    onChange={value => setSearchType(value)}
                    className="mb-10 search-select"
                >
                    <Option value="repository">Repositories</Option>
                    <Option value="user">Users</Option>
                </Select>
            </div>
            {
                searchType === 'repository' ?
                    (<RepositorySearch query={searchTerm}/>) :
                    (<UserSearchResult login={searchTerm}/>)
            }
        </div>
    )
}

export default Search;