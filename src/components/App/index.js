import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import { Fragment } from "react";
import { Sidebar } from "../Sidebar";
import { Main } from "../Main";
import { Header } from "../Header";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
		min-width: 320px;
  }
  @font-face{
		font-family: "Inter";
		src: url(${require("../../fonts/Inter/Inter-Regular.ttf").default});
    font-weight: 400;
	}
  @font-face{
		font-family: "Inter";
		src: url(${require("../../fonts/Inter/Inter-Medium.ttf").default});
    font-weight: 500;
	}
  @font-face{
		font-family: "Inter";
		src: url(${require("../../fonts/Inter/Inter-SemiBold.ttf").default});
    font-weight: 600;
	}
  @font-face{
		font-family: "Inter";
		src: url(${require("../../fonts/Inter/Inter-Bold.ttf").default});
    font-weight: 700;
	}
`;
const AppWrapper = styled.div`
	display: grid;
	grid-template-columns: 247px 1fr;
	grid-template-rows: 100vh;
	@media (max-width: 560px) {
		grid-template-columns: 1fr;
		grid-template-rows: 56px calc(100vh - 56px);
	}
`;
function App() {
	let [menuIsActive, setMenuIsActive] = useState(false);
	return (
		<Fragment>
			<GlobalStyle />
			<AppWrapper>
				<Header
					onClick={() => setMenuIsActive(!menuIsActive)}
					menuIsActive={menuIsActive}
				/>
				<Sidebar isActive={menuIsActive} />
				<Main isActive={!menuIsActive} />
			</AppWrapper>
		</Fragment>
	);
}

export { App };
