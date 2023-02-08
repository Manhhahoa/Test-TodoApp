import React, { useEffect, useState } from 'react'
import { getApi } from '../../../axios/Api'
import AddTodo from './addTodo/AddTodo'
import Todo from './todo/Todo'
import './TodoList.scss'
import UpdateTodo from './updateTodo/UpdateTodo'
import { useSearchParams } from 'react-router-dom'
const TodoList = () => {
    const [listTodo, setListTodo] = useState([])
    const [check, setcheck] = useState(false)
    const [checkUpdate, setcheckUpdate] = useState(false)
    const [idTodoUpdate, setidTodoUpdate] = useState('')
    const [name, setname] = useState('')
    const arrPage: number[] = []
    const [searchParams, setSearchParams] = useSearchParams()
    const page = searchParams.get('page');
    const getTodoList = async () => {
        const todoList = await getApi(`http://192.168.1.35:3001/todo/?page=${page}`)
        setListTodo(todoList.data.data)
    }
    useEffect(() => {
        getTodoList()

    }, [check, checkUpdate, page])
    for (let i = 0; i <= 3; i++) {
        arrPage.push(i)
    }

    return (
        <div className='todo-list form-shadow boder-us10'>
            <h1 className='text-center m8-12 '>Todo App</h1>
            <AddTodo check={check} setcheck={setcheck} checkUpdate={checkUpdate} />
            <UpdateTodo name={name} idTodoUpdate={idTodoUpdate} checkUpdates={checkUpdate} setcheckUpdate={setcheckUpdate} />
            <div className='list-todo-render'>
                {listTodo.length > 0 &&
                    listTodo.slice(0, 4).map((todo: any) => {
                        return <div>
                            <Todo name={todo.title} setname={setname} isdone={todo.is_finished} id={todo._id} check={check} setcheck={setcheck} checkupdate={checkUpdate} setcheckupdate={setcheckUpdate} setidTodoUpdate={setidTodoUpdate} />
                            <hr />
                        </div>
                    })
                }
            </div>
            <div className='dflex-center m-top20'>
                {
                    arrPage.map((page, index) => {
                        return <button onClick={() => {
                            setSearchParams({ page: `${page + 1}` })
                        }} className='m8-12 p8-12 boder-us10 boder-light cursor-pointer'>
                            {page + 1}
                        </button>
                    })
                }
            </div>
        </div>
    )
}

export default TodoList
