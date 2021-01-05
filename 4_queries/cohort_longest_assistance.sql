SELECT cohorts.name, AVG(assistance_requests.completed_at - assistance_requests.started_at)
AS average_assistance_request_duration
FROM assistance_requests JOIN students on student_id = students.id 
JOIN cohorts on students.cohort_id = cohorts.id
GROUP BY cohorts.name
ORDER BY average_assistance_request_duration DESC
LIMIT 1;