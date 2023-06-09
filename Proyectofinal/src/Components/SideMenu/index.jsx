import { Menu } from "antd";
import { useNavigate} from "react-router-dom"
import { AppstoreOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";

function SideMenu () {
  const navigate = useNavigate()
  return(

     <div className="SideMenu">
    <Menu 
    onClick={(item)=>{
      //item.key
      navigate(item.key);
    }}
    items={[
      {
        label:"Dashboard",
        icon: <AppstoreOutlined/>,
        key:'/',
      },

      {
        label:"Inventory",
        icon: <ShopOutlined/>,
        key:'/inventory',
      },
      {
        label:"Orders",
        icon: <ShoppingCartOutlined/>,
        key:'/orders',
      },
      {
        label:"Customers",
        icon: <UserOutlined/>,
        key:'/customers',
      },
    ]}>

    </Menu>
    </div>

  );
}

export default SideMenu;