import Hero from "./Components/hero.jsx";
import Demo from "./Components/demo.jsx";
import "./app.css";

const App = () => {
    return (
        <>
            <div className='main'>
                <div className='gradient' />
            </div>

            <div className='app'>
                <Hero />
                <Demo />
            </div>
        </>
    );
};

export default App;