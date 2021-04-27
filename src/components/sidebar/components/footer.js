import styled from "styled-components";
import darleneRobertsonImg from "../icons/Ellipse13.svg";

const UserBlock = styled.div`
	margin-bottom: 42px;
	margin-left: 35px;
	display: flex;
	align-items: center;
	& p {
		margin-left: 15px;
	}
	@media (max-width: 320px) {
		height: 117px;
		margin: 0 0 0 23px;
		justify-content: space-between;
	}
`;
const SignOut = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	width: 100px;
	height: 34px;
	background: rgba(5, 131, 115, 0.1);
	border-radius: 6px;
	color: #058373;
	font-weight: 500;
	margin-right: 27px;
	@media (min-width: 321px) {
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
		<SignOut as="div">Sign out</SignOut>
	</UserBlock>
);
export { Footer };
