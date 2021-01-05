SELECT cohorts.name, COUNT(assignment_submissions.*) 
FROM cohorts JOIN students ON cohorts.id = students.cohort_id 
JOIN assignment_submissions ON student_id = students.id
GROUP BY cohorts.name
ORDER BY COUNT(assignment_submissions.*) DESC;