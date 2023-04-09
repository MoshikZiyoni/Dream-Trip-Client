import Index from "./pages/chatBot";
import logo from './logo.jpg';

function App() {
  return (
    <>
    <div style={{
          backgroundImage: `url(${logo})`,
          "backgroundSize": "cover",
          // position: "absolute",
          minHeight: '100vh',
          width: "100%",
          zIndex: 1,}} className="App">
    <Index ></Index>
    </div>

    </>
  );
}

export default App;
