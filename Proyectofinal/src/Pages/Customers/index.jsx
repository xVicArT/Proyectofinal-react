import { Avatar, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getCustomers } from "../../API";

function Customers() {
	const [loading, setLoading] = useState(false);
	const [dataSource, setDataSource] = useState([]);

	useEffect(() => {
		setLoading(true);
		getCustomers().then((res) => {
			setDataSource(res.users);
			setLoading(false);
		});
	}, []);

	return (
		<Space size={20} direction="vertical">
			<Typography.Title level={4}>Clientes</Typography.Title>
			<Table
		
				loading={loading}
				columns={[
					{
						title: "Foto",
						dataIndex: "image",
						render: (link) => {
							return <Avatar src={link} />;
						},
					},
					{
						title: "Nombre",
						dataIndex: "firstName",
					},
					{
						title: "Apellido",
						dataIndex: "lastName",
					},
					{
						title: "E-mail",
						dataIndex: "email",
					},
					{
						title: "Telefono",
						dataIndex: "phone",
					},

					{
						title: "Direccion",
						dataIndex: "address",
						render: (address) => {
							return (
								<span>
									{address.address}, {address.city}
								</span>
							);
						},
					},
				]}
				dataSource={dataSource}
				pagination={{
					pageSize: 5,
				}}
			></Table>
		</Space>
	);
}
export default Customers;
