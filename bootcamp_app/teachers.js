const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.connect();
const cohortName = process.argv[2];
const text = `
SELECT DISTINCT teachers.name AS name, cohorts.name AS cohort
FROM teachers 
JOIN assistance_requests ON teachers.id = assistance_requests.teacher_id
JOIN students on assistance_requests.student_id = students.id 
JOIN cohorts on students.cohort_id = cohorts.id
WHERE cohorts.name LIKE $1
ORDER BY teachers.name;
`;
const value = [`%${cohortName}%`];

pool.query(text, value)
.then(res => {
  res.rows.forEach(teacher => {
    console.log(teacher);
  })
})
.catch(err => console.error('query error', err.stack));