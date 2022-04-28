import React, { useState, useEffect } from 'react'
import { Spinner, ButtonGroup, Button } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import queryString from 'query-string'
import { isEmpty } from 'lodash'
import BasicLayout from '../../layout/BasicLayout'
import ListUsers from '../../components/ListUsers'
import { withRouter } from '../../utils/functions'
import { getFollowsApi } from '../../api/follow'


import "./Users.scss";


function Users(props) {
    const { setRefreshCheckLogin, router } = props;

    const [users, setUsers] = useState(null);
    const params = useUsersQuery(router);
    const [typeUser, setTypeUser] = useState(params.type || "follow");
    const [searchParams, setSearchParams] = useSearchParams();


    console.log(props);

    useEffect(() => {
        console.log(searchParams);
        getFollowsApi(queryString.stringify(params))
            .then(response => {
                if (isEmpty(response)) {
                    setUsers([]);
                } else {
                    setUsers(response);
                }
            })
            .catch(err => {
                setUsers([]);
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router.location])

    const onChangeType = type => {
        //const history = MemoryRouter();
        setUsers(null);
        if (type === "new") {
            setTypeUser("new");
        } else {
            setTypeUser("follow");
        }
        window.history.pushState(null, queryString.stringify(`?page=${1}&type=${type}&search=${""}`));
        /*setSearchParams({
            search: queryString.stringify(`?page=${1}&type=${type}&search=${""}`)
        });*/
        /*history.push({
            search: queryString.stringify({type: type, page: 1, search: ""})
        })*/
        /*HashHistory.push({
            search: queryString.stringify({type: type, page: 1, search: ""})
        });*/
    }

    return (
        <BasicLayout className="users" title="Usuarios" setRefreshCheckLogin={setRefreshCheckLogin}>
            <div className='users__title'>
                <h2>Usuarios</h2>
                <input type="texto" placeholder='Busca un usuario...' />
            </div>

            <ButtonGroup className="users__options">
                <Button onClick={() => onChangeType("follow")}>Siguiendo</Button>
                <Button onClick={() => onChangeType("new")}>Nuevos</Button>
            </ButtonGroup>

            {!users ? (
                <div className='users__loading'>
                    <Spinner animation='border' variant="info" />
                    Buscando Usuarios
                </div>
            ) : (
                <ListUsers users={users} />
            )}
        </BasicLayout>
    );
}

function useUsersQuery(router) {
    const { page = 1, type = "follow", search } = queryString.parse(router.location.search);

    return { page, type, search };
}

export default withRouter(Users)