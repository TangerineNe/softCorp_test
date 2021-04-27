import styled from "styled-components";
import { tableData } from "./tableData.js";

const StyledTable = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(${tableData.headers.length}, 1fr);
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
	grid-column: 1 / span ${tableData.headers.length};
	display: grid;
	grid-template-columns: repeat(${tableData.headers.length}, 1fr);
	position: relative;
	left: -20px;
	border: 1px solid rgba(12, 20, 39, 0.05);
	box-shadow: 0px 2px 2px rgba(12, 20, 39, 0.1);
	border-radius: 20px;
`;
const StyledTd = styled.div`
	display: flex;
	align-items: center;
	padding-left: 25px;
	font: 14px Inter;
	font-weight: 400;
	color: #0c1427;
	& > .icon {
		margin-right: 10px;
	}
`;
const Table = () => (
	<StyledTable>
		{tableData.headers.map((val, i) => (
			<StyledTh key={val.text}>{val.text}</StyledTh>
		))}
		{tableData.body.map((row, i) => (
			<StyledTr key={i}>
				{row.map((text, j) => (
					<StyledTd key={j}>
						{!!tableData.headers[j]?.img && (
							<img className="icon" alt="Man" src={tableData.headers[j].img} />
						)}
						<p>{text}</p>
					</StyledTd>
				))}
			</StyledTr>
		))}
	</StyledTable>
);

export { Table };
