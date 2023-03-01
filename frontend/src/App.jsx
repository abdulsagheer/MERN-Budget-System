import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={
						<ProtectedRoutes>
							<Home />
						</ProtectedRoutes>
					}
				/>
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</>
	);
}

export function ProtectedRoutes(props) {
	if (localStorage.getItem("user")) {
		return props.children;
	} else {
		return <Navigate to="/login" />;
	}
}

export default App;
