import styled from "styled-components";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";

const Wrapper = styled.div`
	position: relative;
	display: inline-flex;
	flex-direction: column;
	justify-content: space-between;
	background: #e8eaf0;
	overflow-y: scroll;
	font: 14px Inter;
	font-weight: 400;
	@media (max-width: 560px) {
		width: 100%;
		flex-direction: column-reverse;
		justify-content: flex-end;
		background: #fff;
		display: none;
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
