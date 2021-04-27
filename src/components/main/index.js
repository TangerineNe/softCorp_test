import styled from "styled-components";
import manImg from "./icons/Man.svg";
import clockImg1 from "./icons/Clock.svg";
import clockImg2 from "./icons/Clock2.svg";
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
const H1 = styled.h1`
	position: relative;
	margin: 0 0 20;
	font: 40px Inter;
	font-weight: 700;
`;
const StyledTable = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-template-rows: 8px;
	grid-auto-rows: 60px;
	grid-gap: 10px;
`;
const StyledTh = styled.div`
	text-transform: uppercase;
	font: 10px Inter;
	font-weight: 500;
	color: #8697a8;
`;
const StyledTr = styled.div`
	grid-column: 1 / span 6;
	display: grid;
	grid-template-columns: repeat(6, 1fr);

	position: relative;
	left: -20px;
	border: 1px solid rgba(12, 20, 39, 0.05);
	box-shadow: 0px 2px 2px rgba(12, 20, 39, 0.1);
	border-radius: 20px;
	& div {
		display: flex;
		align-items: center;
		padding-left: 25px;
		font: 14px Inter;
		font-weight: 400;
		color: #0c1427;
	}
	& img {
		margin-right: 10px;
	}
`;
const ClockDiv = styled.div`
	position: relative;
	& img {
		position: absolute;
		top: -10;
		left: 0;
	}
	& img + img {
		top: -5px;
		left: 8px;
	}
`;
const Main = () => (
	<MainWrapper>
		<Header>
			<H1>
				All Shifts for <font color="#058373">January 2021</font>
			</H1>
			<select>
        <option value="0">January, 2021</option>
        <option value="1">February</option>
        <option value="2">March</option>
        <option value="3">April</option>
        <option value="4">May</option>
        <option value="5">June</option>
        <option value="6">July</option>
        <option value="7">August</option>
        <option value="8">September</option>
        <option value="9">October</option>
        <option value="10">November</option>
        <option value="11">December</option>
      </select>
		</Header>

		<StyledTable>
			<StyledTh>Date</StyledTh>
			<StyledTh>Shift type</StyledTh>
			<StyledTh>Period</StyledTh>
			<StyledTh>Hours</StyledTh>
			<StyledTh>Salary (Gross)</StyledTh>
			<StyledTh>Bonus (Gross)</StyledTh>
			{new Array(20).fill(0).map((elem, i) => (
				<StyledTr key={elem + i}>
					<div>
						<img alt="Man" src={manImg}></img>
						<p>January 06, 2020</p>
					</div>
					<div>Afternoon</div>
					<div>
						<ClockDiv>
							<img alt="Clock" src={clockImg1}></img>
							<img alt="Clock" src={clockImg2}></img>
						</ClockDiv>
						<p>15:00-23:00</p>
					</div>
					<div>8h</div>
					<div>$1,630</div>
					<div>30</div>
				</StyledTr>
			))}
		</StyledTable>
	</MainWrapper>
);

export { Main };
