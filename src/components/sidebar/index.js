import styled from "styled-components";
import { Footer } from "./components/footer";
import { Navigation } from "./components/navigation";

const Wrapper = styled.div`
	position: relative;
	display: inline-flex;
	flex-direction: column;
	justify-content: space-between;
	background: #e8eaf0;
	width: 247px;
	height: 100vh;
	overflow-y: scroll;
	font: 14px Inter;
	font-weight: 400;
	@media (max-width: 320px) {
		width: 100%;
		flex-direction: column-reverse;
		justify-content: flex-end;
		background: #fff;
	}
	::-webkit-scrollbar {
		width: 0;
	}
`;
const Sidebar = () => (
	<Wrapper>
		<Navigation />
		<Footer />
	</Wrapper>
);
export { Sidebar };
