import { Fragment } from "react";
import styled from "styled-components";
import { tableData } from "./tableData.js";

const StyledTable = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(${tableData.headers.length}, 1fr);
	grid-template-rows: 8px;
	grid-auto-rows: 60px;
	grid-gap: 10px;
	font: 14px Inter;
	font-weight: 400;
	@media (max-width: 1050px) {
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: auto;
		grid-auto-rows: auto;
		margin-left: 15px;
	}
`;
const StyledTh = styled.div`
	text-transform: uppercase;
	font: 10px Inter;
	font-weight: 500;
	color: #8697a8;
	padding-left: 18px;
	@media (max-width: 1050px) {
		display: none;
	}
`;
const StyledTr = styled.div`
	grid-column: 1 / span ${tableData.headers.length};
	display: grid;
	grid-template-columns: repeat(${tableData.headers.length}, 1fr);
	position: relative;
	border: 1px solid rgba(12, 20, 39, 0.05);
	box-shadow: 0px 2px 2px rgba(12, 20, 39, 0.1);
	border-radius: 20px;
	@media (max-width: 1050px) {
		grid-template-columns: 80px 1fr 145px;
		grid-template-rows: repeat(6, 30px);
		padding: 21px 16px;
		left: -15px;
	}
`;
const StyledTd = styled.div`
	display: flex;
	align-items: center;
	padding-left: 25px;
	color: #0c1427;
	& > .icon {
		margin-right: 10px;
	}
	@media (max-width: 1050px) {
		grid-column-start: 3;
		& > p {
			width: 100%;
			text-align: right;
		}
		& > .icon{
			display: none;
		}
	}
`;
const MiniHeader = styled.div`
	display: flex;
	align-items: center;
	grid-column-start: 1;
	text-transform: uppercase;
	font: 10px Inter;
	font-weight: 500;
	color: #8697a8;
	@media (min-width: 1050px){
		display: none;
	}
`;
const ShortText = styled.p`
	@media (min-width: 1050px){
		display: none;
	}
`;
const FullText = styled.p`
	@media (max-width: 1050px){
		display: none;
	}
`;
const Table = () => (
	<StyledTable>
		{tableData.headers.map((val, i) => (
			<StyledTh key={val.fullText}>{val.fullText}</StyledTh>
		))}
		{tableData.body.map((row, i) => (
			<StyledTr key={i}>
				{row.map((text, j) => (
					<Fragment key={j}>
						<MiniHeader>{tableData.headers[j].shortText}</MiniHeader>
						<StyledTd>
							{!!tableData.headers[j]?.img && (
								<img
									className="icon"
									alt="Man"
									src={tableData.headers[j].img}
								/>
							)}
							<ShortText>{text.shortText}</ShortText>
							<FullText>{text.fullText}</FullText>
						</StyledTd>
					</Fragment>
				))}
			</StyledTr>
		))}
	</StyledTable>
);

export { Table };
