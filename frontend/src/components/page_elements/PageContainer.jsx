import { Route, Routes } from 'react-router-dom'
import { MainPage } from '../pages/general/MainPage.jsx'
import { UserPage } from '../pages/user/UserPage.jsx'

export function PageContainer(props) {
    const { user, setUser } = props
    return (
        <section className={'page_container'}>
            <Routes>
                <Route path='/' element={<MainPage user={user} />} />
                <Route path='/user/*' element={<UserPage />} />
            </Routes>
        </section>
    )
}
