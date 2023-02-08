import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserForm, SchemaUser } from "../signin/yupSubmit/YupSubmit"
import { Link, useNavigate } from "react-router-dom";
import '../signin/SignIn.scss'
import { postApi } from "../../axios/Api";
const SignUp = () => {
    const nav = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<UserForm>({ resolver: yupResolver(SchemaUser), });
    const SignUp = async (data: UserForm) => {
        try {
            await postApi('http://192.168.1.35:3001/user', {
                "username": `${data.username}`,
                "password": `${data.password}`
            })
            nav('/sign-in')
        } catch {
            alert('Tài khoản đã tồn tại')
        }

    }
    return (
        <div className='sign-up boder-us10 dflex-center '>
            <div className='form-signup form-shadow boder-us10'>
                <h1>Trang đăng ký</h1>
                <form onSubmit={handleSubmit(SignUp)}>
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
                    <button className='boder-us10 p8-12' type='submit'>Sign-up</button>
                </form>
                <p className="to-signup ">Đã có tài khoản ? <Link to={'/sign-in'}>Đăng nhập</Link></p>
            </div>
        </div >
    )
}


export default SignUp
