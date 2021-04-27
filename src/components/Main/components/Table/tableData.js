import manImg from "./icons/Man.svg";
import clockImg from "./icons/Clock.svg";
const tableData = {
	headers: [
		{
			shortText: "Date",
			fullText: "Date",
			img: manImg,
		},
		{
			shortText: "Period",
			fullText: "Shift type",
			img: null,
		},
		{
			shortText: "Salary",
			fullText: "Period",
			img: clockImg,
		},
		{
			shortText: "Bonus",
			fullText: "Hours",
			img: null,
		},
		{
			shortText: "Shift type",
			fullText: "Salary (Gross)",
			img: null,
		},
		{
			shortText: "Hours",
			fullText: "Bonus (Gross)",
			img: null,
		},
	],
	body: [],
};
for (let i = 0; i < 20; i++) {
	tableData.body.push([
		{
			shortText: "January 06, 2020",
			fullText: "January 06, 2020"
		},
		{
			shortText: "15:00 - 23:00",
			fullText: "Afternoon"
		},
		{
			shortText: '<font color="#8697a8">€</font>248',
			fullText: "15:00 - 23:00"
		},
		{
			shortText: "30",
			fullText: "8h"
		},
		{
			shortText: "Afternoon",
			fullText: "$1,630"
		},
		{
			shortText: "8h",
			fullText: "30"
		}
	]);
}
export { tableData };
