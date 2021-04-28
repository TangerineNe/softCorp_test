import styled from "styled-components";
import { useState } from "react";
const SelectWrapper = styled.div`
	position: relative;
	font: 14px Inter;
`;
const StyledSelect = styled.div`
	width: 165px;
	height: 44px;
	border: 1px solid #dedfe2;
	padding-left: 17px;
	box-sizing: border-box;
	border-radius: 6px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	&::after {
		content: "▼";
		margin-right: 21px;
		transform: scaleY(0.4) scaleX(0.75);
	}
`;
const StyledOptionsList = styled.ul`
	padding-top: 20px;
	position: absolute;
	top: 33px;
	padding-left: 17px;
	display: ${({ isActive }) => (isActive ? "flex" : "none")};
	flex-direction: column;
	width: 194px;
	height: 291px;
	overflow-y: scroll;
	box-sizing: border-box;
	background: #fff;
	z-index: 1;
	border: 1px solid rgba(12, 20, 39, 0.05);
	box-shadow: 0px 2px 2px rgba(12, 20, 39, 0.1);
	border-radius: 8px;
	::-webkit-scrollbar {
		width: 5px;
		background: #e8eaf0;
		border-radius: 3px;
	}
	::-webkit-scrollbar-thumb {
		position: absolute;
		right: 5px;
		border-radius: 3px;
		background: #8697a8;
	}
`;
const StyledOption = styled.li`
	display: block;
	margin-bottom: 22px;
	cursor: pointer;
`;

let activeOption = "January";
const Select = () => {
	let [isActive, setIsActive] = useState(false);
	function handleSelect(event){
		if(event.target.localName === "li"){
			activeOption = event.target.innerHTML;
			setIsActive(false);
		}
	}
	return (
		<SelectWrapper onClick = { ()=>setIsActive(!isActive)}>
			<StyledSelect>{activeOption}, 2021</StyledSelect>
			<StyledOptionsList isActive = {isActive} onClick = {handleSelect}>
				<StyledOption>January</StyledOption>
				<StyledOption>February</StyledOption>
				<StyledOption>March</StyledOption>
				<StyledOption>April</StyledOption>
				<StyledOption>May</StyledOption>
				<StyledOption>June</StyledOption>
				<StyledOption>July</StyledOption>
				<StyledOption>August</StyledOption>
				<StyledOption>September</StyledOption>
				<StyledOption>October</StyledOption>
				<StyledOption>November</StyledOption>
				<StyledOption>December</StyledOption>
			</StyledOptionsList>
		</SelectWrapper>
	);
};
export { Select };
