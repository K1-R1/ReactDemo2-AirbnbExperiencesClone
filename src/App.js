import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Card
                img="katie-zaferes.png"
                rating="5.0"
                reviewCount={6}
                country="USA"
                title="Life lessons with Katie Z"
                price={136}
            />
        </div>
    )
}

export default App;