import {useEffect, useState} from 'react'
import {Table} from '../../page_elements/Table.jsx'

export function UserUsersPage() {

    const [users, setUsers] = useState(null)
    useEffect(() => {
        get_users()
    }, [])

    function get_users() {
        fetch('/api/user/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                data.sort((a, b) => a.user_id - b.user_id)
                setUsers(data)
            })
            .catch(error => {
                console.log('Error getting user info', error)
            })
    }

    if (!users) return <div>Loading...</div>

    return (
        <div className='user_users_page page_content'>
            <h2>Users</h2>
            <Table data={users} keys={'user_id'} columns={[{label: 'ID', key: 'user_id', type: 'text'},
                {label: 'Email', key: 'user_email', type: 'text'},
                {label: 'Password', key: 'user_password', type: 'text'},
                {label: 'Name', key: 'user_name', type: 'text'},
                {label: 'Surname', key: 'user_surname', type: 'text'}]}/>
        </div>
    )
}
