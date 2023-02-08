import React, { useEffect, useRef } from 'react'
import { patchApi } from '../../../../axios/Api'
type Props = {
    idTodoUpdate: string,
    checkUpdates: boolean,
    setcheckUpdate: any,
    name: string,
}
const UpdateTodo = ({ idTodoUpdate, checkUpdates, setcheckUpdate, name }: Props) => {

    const inputref = useRef<HTMLInputElement>(null)
    useEffect(() => {

    }, [])
    const updateOneTodo = async (idTodoUpdate: string, checkUpdates: boolean, setcheckUpdates: any) => {
        if (inputref.current?.value !== '') {
            await patchApi('http://192.168.1.35:3001/todo', {
                "title": `${inputref.current?.value}`,
                "_id": idTodoUpdate
            })
            setcheckUpdate(!checkUpdates)
        }
    }
    return (
        <div className='dflex-center '>
            {
                checkUpdates && <div className='w-60 input-chang-todo  '>
                    <input defaultValue={name} ref={inputref} className='boder-us10 p8-12 w-100 boder-light outline-none' type="text" placeholder=' Nhập tên mới' />
                    <button onClick={() => { updateOneTodo(idTodoUpdate, checkUpdates, setcheckUpdate) }} className='boder-us10 p8-12 m-top20 boder-light cursor-pointer'> OK</button>
                </div>
            }
        </div>
    )
}

export default UpdateTodo
