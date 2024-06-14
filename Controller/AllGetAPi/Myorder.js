
// const pool = require('../../DB/Database');

// async function Myorder(req, res) {
//     try {
       
//         pool.query('SELECT * FROM category', (err, categoryResult) => {
//             if (err) {
//                 console.error('Error executing SQL query for category:', err);
//                 return res.status(500).json({ error: 'Internal Server Error' });
//             }

//             if (categoryResult.length === 0) {
//                 return res.status(404).json({ status: 404, error: 'No category name found' });
//             }


//             const categoryIds = categoryResult.map(category => category.id);

           
//             pool.query('SELECT * FROM bid WHERE category IN (?)', [categoryIds], (err, bidResult) => {
//                 if (err) {
//                     console.error('Error executing SQL query for bid result:', err);
//                     return res.status(500).json({ error: 'Internal Server Error' });
//                 }

//                 if (bidResult.length === 0) {
//                     return res.status(404).json({ status: 404, error: 'No order found' });
//                 }

 
//                 res.status(200).json({ status: 200, data: bidResult });
//             });
//         });
//     } catch (error) {
//         console.error('Unexpected error:', error);
//         return res.status(500).json({ error: 'Internal Server Error' });
//     }
// }

// module.exports = Myorder;

const pool = require('../../DB/Database');

async function Myorder(req, res) {
    try {
        // Query to get bids along with their corresponding category names
        const query = `
            SELECT bid.*, category.name AS category_name 
            FROM bid 
            JOIN category ON bid.category = category.id
        `;

        pool.query(query, (err, results) => {
            if (err) {
                console.error('Error executing SQL query:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            if (results.length === 0) {
                return res.status(404).json({ status: 404, error: 'No orders found' });
            }

            // Send the successful response with the bids and their category names
            res.status(200).json({ status: 200, data: results });
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = Myorder;
