/*
 * @Description: 
 * @Author: yuyi
 * @Date: 2024-08-05 23:55:22
 * @LastEditors: yuyi
 * @LastEditTime: 2024-08-05 23:55:38
 */
export const SQL = `SELECT
    e.employee_id,
    e.first_name,
    e.last_name,
    d.department_name,
    SUM(s.amount) AS total_sales,
    (SELECT COUNT(*) FROM employees WHERE department_id = e.department_id) AS department_employee_count
FROM
    employees e
INNER JOIN
    departments d ON e.department_id = d.department_id
LEFT JOIN
    sales s ON e.employee_id = s.employee_id
WHERE
    e.status = 'ACTIVE'
    AND d.location = 'New York'
GROUP BY
    e.employee_id, e.first_name, e.last_name, d.department_name
HAVING
    SUM(s.amount) > 10000
ORDER BY
    total_sales DESC, e.last_name ASC;`;
