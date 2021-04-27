import manImg from "./icons/Man.svg";
import clockImg from "./icons/Clock.svg";
const tableData = {
	headers: [
		{ text: "Date", img: manImg },
		{
			text: "Shift type",
			img: null,
		},
		{
			text: "Period",
			img: clockImg,
		},
		{
			text: "Hours",
			img: null,
		},
		{
			text: "Salary (Gross)",
			img: null,
		},
		{
			text: "Bonus (Gross)",
			img: null,
		},
	],
	body: [],
};
for (let i = 0; i < 20; i++) {
	tableData.body.push([
		"January 06, 2020",
		"Afternoon",
		"15:00-23:00",
		"8h",
		"$1,630",
		"30",
	]);
}
export { tableData };