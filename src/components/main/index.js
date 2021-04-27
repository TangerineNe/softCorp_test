import styled from "styled-components";
import { GreenBtn } from "../GreenBtn";
import { Table } from "./components/Table/index";
import { Select } from "./components/Select";
const MainWrapper = styled.div`
	position: relative;
	overflow-y: scroll;
	padding: 122px 42px 0 60px;
	display: inline-flex;
	flex-direction: column;
	box-sizing: border-box;
	@media (max-width: 830px) {
		padding: 122px 15px 0 15px;
	}
	@media (max-width: 560px) {
		padding: 15px;
		margin: 0;
		top: 0px;
		width: 100%;
	}
`;
const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	& > .select {
		width: 165px;
		height: 44px;
		border-radius: 6px;
		border: 1px solid #dedfe2;
	}
	@media (max-width: 830px) {
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		margin-bottom: 15px;
		& > h1 {
			margin-bottom: 15px;
			font-size: 24px;
		}
	}
`;
const ShortText = styled.span`
	@media (min-width: 830px){
		display: none;
	}
`;
const FullText = styled.span`
	@media (max-width: 830px){
		display: none;
	}
`;
const StyledH1 = styled.h1`
	position: relative;
	margin: 0 10px 20px;
	font: 40px Inter;
	font-weight: 700;
`;
const SignOutBtn = styled(GreenBtn)`
	position: absolute;
	top: 44px;
	right: 44px;
	@media (max-width: 830px) {
		right: 15px;
	}
	@media (max-width: 560px) {
		display: none;
	}
`;
const Main = () => (
	<MainWrapper>
		<SignOutBtn>Sign Out</SignOutBtn>
		<Header>
			<StyledH1>
				<ShortText>All worked shifts </ShortText>
				<FullText>All Shifts </FullText>
				for <font color="#058373">January 2021</font>
			</StyledH1>
			<Select />
		</Header>
		<Table />
	</MainWrapper>
);

export { Main };
