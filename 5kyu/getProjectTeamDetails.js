const projects = [
	{projectId: 'p1', name: 'Website Redesign', status: 'active', team: ['empA', 'empC']},
	{projectId: 'p2', name: 'Mobile App Development', status: 'pending', team: ['empB']},
	{projectId: 'p3', name: 'Database Optimization', status: 'completed', team: ['empA', 'empB', 'empD']},
];

const employees = [
	{employeeId: 'empA', name: 'Alice', role: 'Developer', experience: 5},
	{employeeId: 'empB', name: 'Bob', role: 'Tester', experience: 3},
	{employeeId: 'empC', name: 'Charlie', role: 'Designer', experience: 7},
	{employeeId: 'empD', name: 'David', role: 'DBA', experience: 6},
];

const getProjectTeamDetails = (projects, employees, projectId = 'p3') => {
	const projectsById = new Map();
	projects.forEach((item) => projectsById.set(item.projectId, item));

	const employeesById = new Map();
	employees.forEach((emp) => employeesById.set(emp.employeeId, emp));

	const project = projectsById.get(projectId);

	if (!project) {
		return []
	}

	const teamEmployeesIds = project.team;


	const teamDetails = teamEmployeesIds.map((employeeId) => {
		const employee = employeesById.get(employeeId);

		if (employee) {
			return {
				employeeId: employee.employeeId,
				name: employee.name,
				role: employee.role
			}
		} else {
			return null
		}
	})

	return teamDetails.filter(Boolean)
};

console.log(getProjectTeamDetails(projects, employees))