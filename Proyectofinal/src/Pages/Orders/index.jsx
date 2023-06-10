import { Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getOrders } from "../../API";

function Orders() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Ordenes</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Contenido de compra",
            dataIndex: "title",
          },
          {
            title: "Precio unitario",
            dataIndex: "price",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "Total con oferta",
            dataIndex: "discountedPrice",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "Cantidad",
            dataIndex: "quantity",
          },
          {
            title: "Total",
            dataIndex: "total",
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
export default Orders;