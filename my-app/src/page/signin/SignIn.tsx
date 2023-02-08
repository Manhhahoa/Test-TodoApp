import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserForm, SchemaUser } from ".././signin/yupSubmit/YupSubmit"
import { Link, useNavigate } from "react-router-dom";
import './SignIn.scss'
import { postApi } from "../../axios/Api";
import { useAppDispatch } from "../../redux/Hook";
import { setUserSignIn } from "../../redux/user/UserSlice";
import { getToken } from "../../redux/user/UserToken";
const SignIn = () => {
    const nav = useNavigate()
    const dispatch = useAppDispatch();
    function setCookie(cname: any, cvalue: any, exdays: any) {
        const d = new Date();
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<UserForm>({ resolver: yupResolver(SchemaUser), });
    const signIn = async (data: UserForm) => {
        try {
            const tokenUser = await postApi('http://192.168.1.35:3001/user/sign-in', {
                "username": `${data.username}`,
                "password": `${data.password}`
            })
            setCookie("user", tokenUser.data.accessToken, 30);
            window.localStorage.setItem('token', JSON.stringify(tokenUser.data.accessToken))
            dispatch(setUserSignIn(data))
            dispatch(getToken(tokenUser.data))
            nav('/')
        } catch {
            alert('Tài khoản hoặc mk không đúng')
        }

    }
    return (
        <div className='sign-in boder-us10 dflex-center '>
            <div className='form-signin form-shadow boder-us10'>
                <h1>Trang đăng nhập</h1>
                <form onSubmit={handleSubmit(signIn)}>
                    <label htmlFor="username">Nhập Email</label>
                    <input {...register("username")}
                        placeholder='nhap username' className='w-100 ' name='username' id='username'
                        style={errors.username && { border: '1px solid red' }}
                    />
                    <p>{errors.username?.message}</p>
                    <br />
                    <label htmlFor="password">Password</label>
                    <input type="password" {...register("password")}
                        placeholder='nhap password' className='w-100 ' name='password' id='password'
                        style={errors.password && { border: '1px solid red' }}
                    />
                    <p>{errors.password?.message}</p>
                    <br />
                    <button className='boder-us10 p8-12' type='submit'>Sign-in</button>
                </form>
                <p className="to-signup ">chưa có tài khoản ? <Link to={'/sign-up'}>Đăng ký</Link></p>
            </div>
        </div >
    )
}


export default SignIn
