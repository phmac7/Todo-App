import Main from "./components/Pages/Main";
import TaskListProvider from "./context/TaskListContext";
import ThemeProvider from "./context/ThemeContext";

function App() {
    return (
        <ThemeProvider>
            <TaskListProvider>
                <Main />
            </TaskListProvider>
        </ThemeProvider>
    );
}

export default App;
