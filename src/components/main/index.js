import styled from "styled-components";
import { GreenBtn } from "../GreenBtn";
import { Table } from "./components/Table/index";
import { Select } from "./components/Select";
const MainWrapper = styled.div`
	position: relative;
	width: calc(100% - 247px);
	height: 100vh;
	overflow-y: scroll;
	top: 113px;
	margin-top: -122px;
	padding: 122px 42px 0 60px;
	display: inline-flex;
	flex-direction: column;
	box-sizing: border-box;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & select{
    width: 165px;
    height: 44px;
    border-radius: 6px;
    border: 1px solid #DEDFE2;
  }
`;
const StyledH1 = styled.h1`
	position: relative;
	margin: 0 0 20;
	font: 40px Inter;
	font-weight: 700;
`;
const SignOutBtn = styled(GreenBtn)`
	position: absolute;
	top: 44px;
	right: 44px;
	@media (max-width: 320px){
		display: none;
	}
`;
const Main = () => (
	<MainWrapper>
		<SignOutBtn>Sign Out</SignOutBtn>
		<Header>
			<StyledH1>
				All Shifts for <font color="#058373">January 2021</font>
			</StyledH1>
			<Select/>
		</Header>
		<Table />
	</MainWrapper>
);

export { Main };