import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navigation/Navbar";
import Footer from "./components/Footer/Footer";
import Main from "./route-manger/Main";
function App() {
	return (
		<div className="App">
			<Navbar />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
