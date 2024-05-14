const pool = require('../../DB/Database');

async function leavesumbit(req, res) {
    const {
        employee_id,
        leave_type_id,
        applied_on,
        start_date,
        end_date,
        total_leave_days,
        leave_reason,
        remark,
        created_by
    } = req.body;

    try {

        if(!employee_id || !remark){
            return res.status(200).json({ status: 400, message: 'Please Field All Fields' });
        }
        pool.query(
            `INSERT INTO leaves (employee_id, leave_type_id, applied_on, start_date, end_date, total_leave_days, leave_reason, remark, created_by,status)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?)`,
            [
                employee_id,
                leave_type_id,
                applied_on,
                start_date,
                end_date,
                total_leave_days,
                leave_reason,
                remark,
                created_by,
                'Done'
            ],
            (err, result) => {
                if (err) {
                    console.error('Error executing SQL query:', err);
                    return res.status(500).json({ error: 'Internal Server Error' });
                }
                return res.status(200).json({ status: 200, message: 'Leave Created Successfully' });
            }
        );
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = leavesumbit;
