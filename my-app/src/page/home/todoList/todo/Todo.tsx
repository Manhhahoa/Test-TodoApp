import { deleteApi, patchApi } from '../../../../axios/Api'
type Props = {
    name: string,
    isdone: boolean,
    id: string,
    check: boolean,
    setcheck: (check: boolean) => void
    checkupdate: boolean,
    setcheckupdate: any,
    setidTodoUpdate: any,
    setname: any
}
const checkTodoFinish = async (e: any, id: string, check: boolean, setcheck: any, name: string) => {
    await patchApi('http://192.168.1.35:3001/todo', {
        "title": name,
        "_id": id,
        "is_finished": e.target.checked
    })
    setcheck(!check)
}
const deleteTodo = async (id: string, check: boolean, setcheck: any) => {
    await deleteApi('http://192.168.1.35:3001/todo/' + id)
    setcheck(!check)
}
const updateTodo = async (id: string, checkupdate: boolean, setcheckupdate: any, setidTodoUpdate: any, setname: any, name: string) => {
    setidTodoUpdate(id)
    setname(name)
    setcheckupdate(!checkupdate)
}
const Todo = ({ name, isdone, id, check, setcheck, checkupdate, setcheckupdate, setidTodoUpdate, setname }: Props) => {
    return (
        <div>
            <div className='todo w-60 dflex m-top20'>
                {isdone ? <p className='text-decoration'>{name}</p> : <p>{name}</p>}

                <div className='dflex-center'>
                    {isdone
                        ? <input type="checkbox" className='cursor-pointer' checked={true} onChange={(e) => { checkTodoFinish(e, id, check, setcheck, name) }} />
                        : <input type="checkbox" className='cursor-pointer' checked={false} onChange={(e) => { checkTodoFinish(e, id, check, setcheck, name) }} />
                    }
                    <img onClick={() => { deleteTodo(id, check, setcheck) }} className='cursor-pointer' src="https://png.pngtree.com/png-vector/20190531/ourlarge/pngtree-trash-bin-icon-png-image_1252142.jpg" alt="" />
                    <img className='cursor-pointer' onClick={() => { updateTodo(id, checkupdate, setcheckupdate, setidTodoUpdate, setname, name) }} src="https://png.pngtree.com/png-clipart/20190517/original/pngtree-vector-tools-repair-icon-png-image_4278669.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Todo
