import { Sidebar } from "../Sidebar";
import { Main } from "../Main";
import { createGlobalStyle } from "styled-components";
import { Fragment } from "react";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
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
function App() {
	return (
		<Fragment>
			<GlobalStyle />
			<Sidebar />
      <Main />
		</Fragment>
	);
}

export { App };
