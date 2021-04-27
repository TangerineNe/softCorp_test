import styled from "styled-components";
import menuImg from "./icons/menu.svg";
import closeImg from "./icons/close.svg";

const StyledHeader = styled.div`
	background: black;
	padding: 22px 16px;
	@media (min-width: 561px) {
		display: none;
	}
	& > img {
    cursor: pointer;
	}
`;
const Header = ({ onClick, menuIsActive }) => {
	return (
		<StyledHeader>
			<img onClick={onClick} src={menuIsActive ? closeImg : menuImg} alt="Menu img"></img>
		</StyledHeader>
	);
};
export { Header };
