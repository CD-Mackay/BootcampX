SELECT assignments.day AS day, COUNT(*) AS number_of_assignments, SUM(duration)
FROM assignments
GROUP BY assignments.day
ORDER BY assignments.day;