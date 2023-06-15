import {
	DollarCircleOutlined,
	ShoppingCartOutlined,
	ShoppingOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getInventory, getOrders, getRevenue } from "../../API";

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

function Dashboard() {
	const [orders, setOrders] = useState(0);
	const [inventory, setInventory] = useState(0);
	const [customers, setCustomers] = useState(0);
	const [revenue, setRevenue] = useState(0);

	useEffect(() => {
		getOrders().then((res) => {
			setOrders(res.total);
			setRevenue(res.discountedTotal);
		});
		getInventory().then((res) => {
			setInventory(res.total);
		});
		getCustomers().then((res) => {
			setCustomers(res.total);
		});
	}, []);

	return (
		<Space size={20} direction="vertical">
			<Typography.Title level={4}>Dashboard</Typography.Title>
			<Space className="spacedash1" direction="horizontal">
				<DashboardCard
					icon={
						<ShoppingCartOutlined
							style={{
								color: "green",
								backgroundColor: "rgba(0,255,0,0.25)",
								borderRadius: 20,
								fontSize: 24,
								padding: 8,
							}}
						/>
					}
					title={"Ordenes"}
					value={orders}
				/>
				<DashboardCard
					icon={
						<ShoppingOutlined
							style={{
								color: "blue",
								backgroundColor: "rgba(0,0,255,0.25)",
								borderRadius: 20,
								fontSize: 24,
								padding: 8,
							}}
						/>
					}
					title={"Inventario"}
					value={inventory}
				/>
				<DashboardCard
					icon={
						<UserOutlined
							style={{
								color: "purple",
								backgroundColor: "rgba(0,255,255,0.25)",
								borderRadius: 20,
								fontSize: 24,
								padding: 8,
							}}
						/>
					}
					title={"Clientes"}
					value={customers}
				/>
				<DashboardCard
					icon={
						<DollarCircleOutlined
							style={{
								color: "rgb(238,104,249)",
								backgroundColor: "rgb(239,251,96)",
								borderRadius: 20,
								fontSize: 24,
								padding: 8,
							}}
						/>
					}
					title={"Ganancia"}
					value={revenue}
				/>
			</Space>
			<Space className="spacedash2">
				<RecentOrders />
				<DashboardChart />
			</Space>
		</Space>
	);
}

function DashboardCard({ title, value, icon }) {
	return (
		<Card>
			<Space direction="horizontal">
				{icon}
				<Statistic title={title} value={value} />
			</Space>
		</Card>
	);
}
function RecentOrders() {
	const [dataSource, setDataSource] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		getOrders().then((res) => {
			setDataSource(res.products.splice(0, 3));

			setLoading(false);
		});
	}, []);

	return (
		<>
			<Typography.Title level={5}>Ordenes recientes</Typography.Title>
			<Table
				columns={[
					{
						title: "Contenido de compra",
						dataIndex: "title",
					},
					{
						title: "Cantidad",
						dataIndex: "quantity",
					},
					{
						title: "Precio",
						dataIndex: "price",
					},
				]}
				loading={loading}
				dataSource={dataSource}
				pagination={false}
			></Table>
		</>
	);
}

function DashboardChart() {
	const [revenueData, setRevenueData] = useState({
		labels: [],
		datasets: [],
	});

	useEffect(() => {
		getRevenue().then((res) => {
			const labels = res.carts.map((cart) => {
				return `User-${cart.userId}`;
			});
			const data = res.carts.map((cart) => {
				return cart.discountedTotal;
			});

			const dataSource = {
				labels,
				datasets: [
					{
						label: "Ganancia",
						data: data,
						backgroundColor: "rgb(238,104,249)",
					},
				],
			};

			setRevenueData(dataSource);
		});
	}, []);

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "bottom",
			},
			title: {
				display: true,
				text: "Ganancia por pedidos",
			},
		},
	};

	return (
		<Card style={{ width: 610, height: 300 }}>
			<Bar options={options} data={revenueData} />
		</Card>
	);
}
export default Dashboard;
