import { useRef } from "react"
import { postApi } from "../../../../axios/Api"

type Props = {
    check: boolean,
    setcheck: any,
    checkUpdate: boolean
}
const AddTodo = ({ check, setcheck, checkUpdate }: Props) => {
    const inputref = useRef<HTMLInputElement>(null)
    const addTodos = async () => {
        if (inputref.current?.value !== '') {
            await postApi('http://192.168.1.35:3001/todo', {
                "title": `${inputref.current?.value}`
            })
            setcheck(!check)
        }
    }
    return (
        <div>
            {
                !checkUpdate &&
                <div className='addTodo w-60 dflex-center'>
                    <input ref={inputref} id='addTodo' type="text" placeholder='nhap cv' className='m8-12 boder-light input-add boder-us10' />
                    <button className='boder-light button-add boder-us10 cursor-pointer' onClick={addTodos}>ADD TODO</button>
                </div>
            }
        </div>
    )
}

export default AddTodo
