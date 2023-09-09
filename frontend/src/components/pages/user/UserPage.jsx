import {Link, Route, Routes} from 'react-router-dom'
import {UserUsersPage} from './UserUsersPage.jsx'
import React from 'react'

export function UserPage() {
    return (
        <div className='user_page'>
            <div className='user_container'>
                <nav className='user_menu'>
                    <Link to='/user/users' className='user_menu_item'>Users</Link>
                </nav>


                <div className='user_content'>
                    <Routes>
                        <Route path='users' element={<UserUsersPage/>}/>
                    </Routes>
                </div>
            </div>

        </div>
    )
}
