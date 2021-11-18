import "./App.css";
import Dictionary from "./Dictionary";

function App() {
    return (
        <div className="App">
            <img src="/transparent_cat2.png" className="cat" alt="cat asks a question" />
            <div className="container">
                <main>
                    <Dictionary defaultKeyword="sunset" />
                </main>
                <footer className="App-footer">
                    <small>
                        Coded by Egle Taraskeviciute, the project is{" "}
                        <a href="https://github.com/Egleta/dictionary-react" target="_blank" rel="noreferrer">
                            open-sourced
                        </a>
                    </small>
                </footer>
            </div>
        </div>
    );
}

export default App;
