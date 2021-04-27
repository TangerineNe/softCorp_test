import styled from "styled-components";
import { GreenBtn } from "../../GreenBtn"
import darleneRobertsonImg from "../icons/Ellipse13.svg";

const UserBlock = styled.div`
	margin-bottom: 42px;
	margin-left: 35px;
	display: flex;
	align-items: center;
	& p {
		margin-left: 15px;
	}
	@media (max-width: 560px) {
		height: 117px;
		margin: 0 0 0 23px;
		justify-content: space-between;
	}
`;
const SignOutBtn = styled(GreenBtn)`
	@media (min-width: 561px) {
		display: none;
	}
`;
const User = styled.div`
	display: flex;
	align-items: center;
`;

const Footer = () => (
	<UserBlock>
		<User>
			<img width="50" height="50" src={darleneRobertsonImg} alt = "User"/>
			<p>
				Darlene
				<br />
				Robertson
			</p>
		</User>
		<SignOutBtn>Sign out</SignOutBtn>
	</UserBlock>
);
export { Footer };
