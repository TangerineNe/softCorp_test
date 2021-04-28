import styled from "styled-components";
import myDashboardImg from "../icons/MyDashboard.svg";
import peopleImg from "../icons/People.svg";
import operationsImg from "../icons/Operations.svg";
import shedulePlanningImg from "../icons/ShedulePlanning.svg";
import administrationImg from "../icons/Administration.svg";
import actionTrackingImg from "../icons/ActionTracking.svg";

const Navigation = styled.ul`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	padding: 45px 0 0 24px;
	margin: 0;

	@media (max-width: 560px) {
		padding-top: 0;
		align-items: flex-start;
	}
`;
const NavElem = styled.li`
	position: relative;
	display: flex;
	align-items: center;
	height: 40px;
	width: 199px;
	margin-bottom: 10px;
	background: ${(props) => (props.active ? "#fff" : "transparent")};
	border-radius: 8px;
	color: #0c1427;
	padding-left: 14px;
	box-sizing: border-box;
	cursor: pointer;
`;
const StyledP = styled.p`
	position: absolute;
	margin-left: 32px;
`;

const NavigationWrapper = () => (
	<Navigation>
		<NavElem active>
			<img src={myDashboardImg} alt = "My Dashboard" />
			<StyledP>My Dashboard</StyledP>
		</NavElem>
		<NavElem>
			<img src={peopleImg} alt = "People" />
			<StyledP>People</StyledP>
		</NavElem>
		<NavElem>
			<img src={operationsImg} alt = "Operations" />
			<StyledP>Operations</StyledP>
		</NavElem>
		<NavElem>
			<img src={shedulePlanningImg} alt = "Schedule Planning" />
			<StyledP>Schedule Planning</StyledP>
		</NavElem>
		<NavElem>
			<img src={administrationImg} alt = "Administration" />
			<StyledP>Administration</StyledP>
		</NavElem>
		<NavElem>
			<img src={actionTrackingImg} alt = "Action Tracking" />
			<StyledP>Action Tracking</StyledP>
		</NavElem>
	</Navigation>
);

export { NavigationWrapper as Navigation };
