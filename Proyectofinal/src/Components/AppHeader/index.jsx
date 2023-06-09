import { BellOutlined, MailOutlined} from "@ant-design/icons";
import { Image, Typography, Space, Badge} from "antd";

function AppHeader() {
  return (
  <div className="AppHeader">
  <Image 
  width={40}
  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/2048px-BMW_logo_%28gray%29.svg.png"/>
  <Typography.Title>Dashboard BIT</Typography.Title>
  <Space>
    <Badge count={10} dot>
    <MailOutlined style={{fontSize:24}}/>
    </Badge>
    <Badge count ={20}>
    <BellOutlined style={{fontSize:24}}/>
    </Badge>
  </Space>
  </div>
);
}

export default AppHeader;