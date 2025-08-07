const students = [
	{name: 'Alice', isActive: true, courses: [{title: 'Math', grade: 90}, {title: 'Physics', grade: 85}]},
	{name: 'Bob', isActive: false, courses: [{title: 'Math', grade: 75}]},
	{name: 'Charlie', isActive: true, courses: [{title: 'Math', grade: 95}, {title: 'Chemistry', grade: 88}]}
];

const getStudentSummary = (students) => {
	const activeStudents = students.filter(({isActive}) => isActive);
	const totalActiveStudents = activeStudents.length;
	const allGrades = [];
	const gradesMap = new Map();

	activeStudents.forEach((student) => {
		const { courses } = student;

		courses.forEach((course) => {
			const { title, grade } = course;
			allGrades.push(grade)

			if (!gradesMap.has(title)) {
				gradesMap.set(title, {sum: 0, count: 0})
			}

			const data = gradesMap.get(title);
			data.sum += grade;
			data.count += 1
		});
	});

	const totalGrades = allGrades.reduce((sum, grade) => sum + grade, 0);
	const averageGrade = totalGrades > 0 ? (totalGrades / allGrades.length) : 0;

	const finalCourseGrade = {};

	for (const [title, data] of gradesMap.entries()) {
		finalCourseGrade[title] = data.sum / data.count
	}

	return {
		totalActiveStudents,
		averageGrade: Number(averageGrade.toFixed(2)),
		courseGrades: finalCourseGrade
	}
};

console.log(getStudentSummary(students));
/*
Ожидаемый вывод:
{
  totalActiveStudents: 2,
  averageGrade: 89.5,
  courseGrades: {
    'Math': 92.5,
    'Physics': 85,
    'Chemistry': 88
  }
}
*/
