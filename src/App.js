import "./App.css";
import Dictionary from "./Dictionary";

function App() {
    return (
        <div className="App">
            <div className="container">
                <main>
                    <Dictionary defaultKeyword="sunset"/>
                </main>
                <footer className="App-footer">
                    <small>Coded by Egle Taraskeviciute</small>
                </footer>
            </div>
        </div>
    );
}

export default App;
