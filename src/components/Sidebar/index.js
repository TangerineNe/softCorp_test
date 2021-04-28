import styled from "styled-components";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";

const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background: #e8eaf0;
	overflow-y: scroll;
	font: 14px Inter;
	font-weight: 400;
	@media (max-width: 560px) {
		flex-direction: column-reverse;
		justify-content: flex-end;
		background: #fff;
		display: ${({isActive}) => (isActive ? "flex" : "none")};
	}
	::-webkit-scrollbar {
		width: 0;
	}
`;
const Sidebar = ({ isActive }) => (
	<Wrapper isActive = {isActive}>
		<Navigation />
		<Footer />
	</Wrapper>
);
export { Sidebar };
