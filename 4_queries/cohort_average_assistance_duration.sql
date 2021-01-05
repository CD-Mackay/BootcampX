SELECT AVG(total_duration) as average_total_duration
FROM (
SELECT cohorts.name as cohort, SUM(assistance_requests.completed_at - assistance_requests.started_at) 
AS total_duration
FROM assistance_requests JOIN students on student_id = students.id 
JOIN cohorts on students.cohort_id = cohorts.id
GROUP BY cohorts.name
ORDER by total_duration)
as total_durations;
