import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../redux/Hook'
const Header = () => {
    const nav = useNavigate()
    const user = useAppSelector(state => state.user)
    return (
        <div className='w-100 dflex header m8-12 p8-12' >
            <h3>Header</h3>
            <div className='m-right20'>
                <p>{user.username}</p>
                <button className='boder-us10 p8-12 boder-light cursor-pointer' onClick={() => {
                    window.localStorage.removeItem('token')
                    nav('sign-in')
                }}>Log out</button>
            </div>
        </div>
    )
}

export default Header
