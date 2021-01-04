import { useState, useEffect } from "react";
import EmployeeComponent from "./EmployeeComponent";

function EmployeeListComponent() {
	const [employees, setEmployees] = useState([
		{
			name: "Yazeen Jasim",
			email: "yj@code.com",
			phone: "087020090",
			skills: "Code Master",
			avatar: "https://i.imgur.com/TUhCrsY.png",
		},
		{
			name: "Eva Britt",
			email: "eb@britain.com",
			phone: "0700700700",
			skills: "Bakare",
			avatar: "https://i.imgur.com/ebHfuth.png",
		},
		{
			name: "Claes Göran",
			email: "cg@cglife.com",
			phone: "0700000000",
			skills: "äta mat",
			avatar: "https://i.imgur.com/t9HFQvX.png",
		},
	]);

	function handleAddNewEmployee() {
		setEmployees((prevState) => {
			return [
				...prevState,
				{
					name: "Dude",
					email: "thedude@la.com",
					phone: "0702738910",
					skills: "Chillaxing",
					avatar: "https://i.imgur.com/Q9qFt3m.png",
				},
			];
		});
	}

	return (
		<div>
			<h3>Employee list</h3>
			<button onClick={handleAddNewEmployee} className="button">
				Add employee
			</button>
			{employees.map((employee) => (
				<EmployeeComponent EmployeeData={employee} />
			))}
		</div>
	);
}

export default EmployeeListComponent;
