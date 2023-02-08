import Header from '../../component/header/Header'
import TodoList from './todoList/TodoList'
const Home = () => {
    return (
        <div className='home'>
            <Header />
            <TodoList />
        </div>
    )
}

export default Home
