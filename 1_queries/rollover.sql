SELECT students.name, cohorts.name AS cohort_name, cohorts.start_date AS cohort_start_date, students.start_date
FROM students
 JOIN cohorts on cohort_id = cohorts.id
WHERE cohorts.start_date != students.start_date
ORDER BY cohort_start_date;
