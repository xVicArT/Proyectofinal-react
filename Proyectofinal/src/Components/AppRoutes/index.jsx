import { Route, Routes } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import Inventory from "../../Pages/Inventory";
import Orders from "../../Pages/Orders";
import Customers from "../../Pages/Customers";

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Dashboard />}></Route>
			<Route path="/inventory" element={<Inventory />}></Route>
			<Route path="/orders" element={<Orders />}></Route>
			<Route path="/customers" element={<Customers />}></Route>
		</Routes>
	);
}

export default AppRoutes;
