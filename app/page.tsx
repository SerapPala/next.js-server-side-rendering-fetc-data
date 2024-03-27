import ApiService from '@/services/ApiService';
import Loading from "@/components/Loading";

interface Todo {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}
export default async function HomePage() {

    const homeData = await getHomeData();

    if (!homeData) {
        return <Loading/>;
    }

    const todos = homeData.todos;

    console.log(todos)

    return (
        <ul>
            {todos.map((todo: Todo) => (
                <li key={todo.id}>
                    <strong>{todo.title}</strong>: {todo.description}
                </li>
            ))}
        </ul>
    );
}

async function getHomeData() {
    try {
        const response = await ApiService.getHomePageData();
        return response;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}
