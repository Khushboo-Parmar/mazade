
// // const pool = require('../../DB/Database');

// // async function Payment(req, res) {
// //     try {
// //         const userId = req.body.created_by; 
// //         console.log("userId= ", userId)

       
// // //   1. bid table      
// //         pool.query('SELECT * FROM bid WHERE created_by = ? AND (status = 4 OR status = 5)', [userId], (err, bids) => {
// //             if (err) {
// //                 console.error('Error executing SQL query for bids:', err);
// //                 return res.status(500).json({ error: 'Internal Server Error' });
// //             }

// //             if (bids.length === 0) {
// //                 return res.status(404).json({ status: 404, error: 'No bids found for the given user ID with status 4 or 5' });
// //             }
// //             const finalPrices = bids.map(bid => bid.final_price);
// //             console.log('final price =',finalPrices )


// //             pool.query('SELECT * FROM seller_bid WHERE id IN (?)', [finalPrices], (err, sellerBids) => {
// //                 if (err) {
// //                     console.error('Error executing SQL query for seller bids:', err);
// //                     return res.status(500).json({ error: 'Internal Server Error' });
// //                 }

// //                 if (sellerBids.length === 0) {
// //                     return res.status(404).json({ status: 404, error: 'No seller bids found for the given final_price' });
// //                 }

          
// //                 const sellerBidIds = sellerBids.map(sellerBid => sellerBid.id);
// //                 console.log('sellerBidIds =',sellerBidIds )
             
// //                 pool.query('SELECT * FROM payement WHERE price IN (?)', [sellerBidIds], (err, payments) => {
// //                     if (err) {
// //                         console.error('Error executing SQL query for payments:', err);
// //                         return res.status(500).json({ error: 'Internal Server Error' });
// //                     }

// //                     if (payments.length === 0) {
// //                         return res.status(404).json({ status: 404, error: 'No payments found for the given seller bid IDs' });
// //                     }

              
// //                     const result = {
// //                         bids,
// //                         sellerBids,
// //                         payments
// //                     };
// //                     console.log('result =',result )
// //                     return res.status(200).json({ status: 200, result });
                    
// //                 });
               
// //             });
           
// //         });


// //     } catch (error) {
// //         console.error('Error in Payment function:', error);
// //         return res.status(500).json({ error: 'Internal Server Error' });
// //     }
// // }

// // module.exports = Payment;

// const pool = require('../../DB/Database');

// async function PaymentHistory(req, res) {
//     try {
//         const userId = req.body.created_by; 
//         console.log("userId= ", userId)

       
// //   1. bid table      
//         pool.query('SELECT * FROM bid WHERE created_by = ? AND (status = 4 OR status = 5)', [userId], (err, bids) => {
//             if (err) {
//                 console.error('Error executing SQL query for bids:', err);
//                 return res.status(500).json({ error: 'Internal Server Error' });
//             }

//             if (bids.length === 0) {
//                 return res.status(404).json({ status: 404, error: 'No bids found for the given user ID with status 4 or 5' });
//             }
//             const finalPrices = bids.map(bid => bid.final_price);
//             console.log('final price =',finalPrices )


//             pool.query('SELECT * FROM seller_bid WHERE id IN (?)', [finalPrices], (err, sellerBids) => {
//                 if (err) {
//                     console.error('Error executing SQL query for seller bids:', err);
//                     return res.status(500).json({ error: 'Internal Server Error' });
//                 }

//                 if (sellerBids.length === 0) {
//                     return res.status(404).json({ status: 404, error: 'No seller bids found for the given final_price' });
//                 }

          
//                 const sellerBidIds = sellerBids.map(sellerBid => sellerBid.id);
//                 console.log('sellerBidIds =',sellerBidIds )
             
//                 pool.query('SELECT * FROM payement WHERE price IN (?)', [sellerBidIds], (err, payments) => {
//                     if (err) {
//                         console.error('Error executing SQL query for payments:', err);
//                         return res.status(500).json({ error: 'Internal Server Error' });
//                     }

//                     if (payments.length === 0) {
//                         return res.status(404).json({ status: 404, error: 'No payments found for the given seller bid IDs' });
//                     }

              
//                     const result = {
//                         bids,
//                         sellerBids,
//                         payments
//                     };
//                     console.log('result =',result )
//                     return res.status(200).json({ status: 200, result });
                    
//                 });
               
//             });
           
//         });


//     } catch (error) {
//         console.error('Error in Payment function:', error);
//         return res.status(500).json({ error: 'Internal Server Error' });
//     }
// }

// module.exports = PaymentHistory;


// const pool = require('../../DB/Database');

// async function Payment(req, res) {
//     try {
//         const userId = req.body.created_by; 
//         console.log("userId= ", userId)

       
// //   1. bid table      
//         pool.query('SELECT * FROM bid WHERE created_by = ? AND (status = 4 OR status = 5)', [userId], (err, bids) => {
//             if (err) {
//                 console.error('Error executing SQL query for bids:', err);
//                 return res.status(500).json({ error: 'Internal Server Error' });
//             }

//             if (bids.length === 0) {
//                 return res.status(404).json({ status: 404, error: 'No bids found for the given user ID with status 4 or 5' });
//             }
//             const finalPrices = bids.map(bid => bid.final_price);
//             console.log('final price =',finalPrices )


//             pool.query('SELECT * FROM seller_bid WHERE id IN (?)', [finalPrices], (err, sellerBids) => {
//                 if (err) {
//                     console.error('Error executing SQL query for seller bids:', err);
//                     return res.status(500).json({ error: 'Internal Server Error' });
//                 }

//                 if (sellerBids.length === 0) {
//                     return res.status(404).json({ status: 404, error: 'No seller bids found for the given final_price' });
//                 }

          
//                 const sellerBidIds = sellerBids.map(sellerBid => sellerBid.id);
//                 console.log('sellerBidIds =',sellerBidIds )
             
//                 pool.query('SELECT * FROM payement WHERE price IN (?)', [sellerBidIds], (err, payments) => {
//                     if (err) {
//                         console.error('Error executing SQL query for payments:', err);
//                         return res.status(500).json({ error: 'Internal Server Error' });
//                     }

//                     if (payments.length === 0) {
//                         return res.status(404).json({ status: 404, error: 'No payments found for the given seller bid IDs' });
//                     }

              
//                     const result = {
//                         bids,
//                         sellerBids,
//                         payments
//                     };
//                     console.log('result =',result )
//                     return res.status(200).json({ status: 200, result });
                    
//                 });
               
//             });
           
//         });


//     } catch (error) {
//         console.error('Error in Payment function:', error);
//         return res.status(500).json({ error: 'Internal Server Error' });
//     }
// }

// module.exports = Payment;

// const pool = require('../../DB/Database');

// async function PaymentHistory(req, res) {
//     try {
//         const userId = req.body.created_by; 
//         console.log("userId= ", userId)

       
// //   1. bid table      
//         pool.query('SELECT * FROM bid WHERE created_by = ? AND final_price', [userId], (err, bids) => {
//             if (err) {
//                 console.error('Error executing SQL query for bids:', err);
//                 return res.status(500).json({ error: 'Internal Server Error' });
//             }

//             if (bids.length === 0) {
//                 return res.status(404).json({ status: 404, error: 'No bids found for the given user ID ' });
//             }
//             const finalPrices = bids.map(bid => bid.final_price);
//             console.log('final price =',finalPrices )


//             pool.query('SELECT * FROM seller_bid WHERE id IN (?)', [finalPrices], (err, sellerBids) => {
//                 if (err) {
//                     console.error('Error executing SQL query for seller bids:', err);
//                     return res.status(500).json({ error: 'Internal Server Error' });
//                 }

//                 if (sellerBids.length === 0) {
//                     return res.status(404).json({ status: 404, error: 'No seller bids found for the given final_price' });
//                 }

          
//                 const sellerBidIds = sellerBids.map(sellerBid => sellerBid.id);
//                 console.log('sellerBidIds =',sellerBidIds )
             
//                 pool.query('SELECT * FROM payement WHERE price IN (?)  AND (status = 3 OR status = 5)', [sellerBidIds], (err, payments) => {
//                     if (err) {
//                         console.error('Error executing SQL query for payments:', err);
//                         return res.status(500).json({ error: 'Internal Server Error' });
//                     }

//                     if (payments.length === 0) {
//                         return res.status(404).json({ status: 404, error: 'No payments found for the given seller bid IDs' });
//                     }

              
//                     const result = {
//                         bids,
//                         sellerBids,
//                         payments
//                     };
//                     console.log('result =',result )
//                     return res.status(200).json({ status: 200, result });
                    
//                 });
               
//             });
           
//         });


//     } catch (error) {
//         console.error('Error in Payment function:', error);
//         return res.status(500).json({ error: 'Internal Server Error' });
//     }
// }

// module.exports = PaymentHistory;




// join tables

// const pool = require('../../DB/Database');

// async function PaymentHistory(req, res) {
//     try {
//         const userId = req.body.created_by; 
//         console.log("userId= ", userId);

    
//         const query = `
//             SELECT bid.*, seller_bid.*, payement.*
//             FROM bid
//             JOIN seller_bid ON bid.final_price = seller_bid.id
//             JOIN payement ON payement.price = seller_bid.id
//             WHERE bid.created_by = ? AND (payement.status = 3 OR payement.status = 5)
//         `;

//         pool.query(query, [userId], (err, results) => {
//             if (err) {
//                 console.error('Error executing SQL query:', err);
//                 return res.status(500).json({ error: 'Internal Server Error' });
//             }

//             if (results.length === 0) {
//                 return res.status(404).json({ status: 404, error: 'No records found for the given user ID' });
//             }

//             // Send the successful response with the combined data from the three tables
//             res.status(200).json({ status: 200, data: results });
//         });
//     } catch (error) {
//         console.error('Error in Payment function:', error);
//         return res.status(500).json({ error: 'Internal Server Error' });
//     }
// }

// module.exports = PaymentHistory;

// 

const pool = require('../../DB/Database');

async function PaymentHistory(req, res) {
    try {
        const userId = req.body.created_by; 
        console.log("userId= ", userId);

  
        const query = `
            SELECT bid.*, seller_bid.*, payement.*, category.name
            FROM bid
            JOIN seller_bid ON bid.final_price = seller_bid.id
            JOIN payement ON payement.price = seller_bid.id
            JOIN category ON bid.category = category.id
            WHERE bid.created_by = ? AND (payement.status = 3 OR payement.status = 5)
        `;

        pool.query(query, [userId], (err, results) => {
            if (err) {
                console.error('Error executing SQL query:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            if (results.length === 0) {
                return res.status(404).json({ status: 404, error: 'No records found for the given user ID' });
            }

    
            res.status(200).json({ status: 200, data: results });
        });
    } catch (error) {
        console.error('Error in Payment function:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = PaymentHistory;
