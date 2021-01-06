const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.connect();

pool.query(`
SELECT DISTINCT teachers.name AS name, cohorts.name AS cohort
FROM teachers JOIN assistance_requests ON teachers.id = assistance_requests.teacher_id
JOIN students on assistance_requests.student_id = students.id 
JOIN cohorts on students.cohort_id = cohorts.id
WHERE cohorts.name LIKE '%${process.argv[2]}%'
ORDER BY teachers.name;
`)
.then(res => {
  res.rows.forEach(teacher => {
    console.log(teacher);
  })
})
.catch(err => console.error('query error', err.stack));