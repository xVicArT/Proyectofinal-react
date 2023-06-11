import { Typography } from "antd";

function AppFooter() {
	return (
		<div className="AppFooter">
			<Typography.Link href="tel:+573023349919">+57 302 334 9919</Typography.Link>
			<Typography.Link href="https://www.google.com" target={"_blank"}>
				Privacy Policy
			</Typography.Link>
			<Typography.Link href="https://www.google.com" target={"_blank"}>
				Terms of Use
			</Typography.Link>
		</div>
	);
}
export default AppFooter;
