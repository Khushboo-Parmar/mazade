const express = require('express');
const router = express.Router();
const loginUser = require('../Controller/Auth/Login');
const register = require('../Controller/Auth/Register');
const middelware = require('../Middelware/TokenMidelware');
const addbid = require('../Controller/AllPostApi/AddBid');
const city = require('../Controller/AllGetAPi/City');
const cat = require('../Controller/AllGetAPi/Category');
const bids = require('../Controller/AllGetAPi/UsersBid');
const detail = require('../Controller/AllGetAPi/Detail');
const companybids = require('../Controller/AllGetAPi/CompanyBid');
const bid = require('../Controller/AllPostApi/SellerBid');
const price = require('../Controller/AllGetAPi/price');
const status = require('../Controller/AllGetAPi/UpdateStatus')
const canceledbid = require('../Controller/AllGetAPi/CanceledBid');
const filter = require('../Controller/AllGetAPi/CategryFilter');
const payment = require('../Payement/Payement');
const sucess = require('../Payement/Success');
const completed = require('../Controller/AllGetAPi/CompledBids');
const code = require('../Controller/AllPostApi/Code');
const review = require('../Controller/AllPostApi/AddReview');
const PaymentHistory = require('../Controller/AllGetAPi/PaymentHistory');
const Myorder = require('../Controller/AllGetAPi/Myorder');
const CompanyInfo = require('../Controller/AllGetAPi/CompanyInfo');


router.post('/login', loginUser);
router.post('/register', register);
router.get('/city', city);
router.get('/category', cat);
router.get('/bids/:id', bids);
router.get('/detail/:id', detail);
router.get('/sellerbid/:id', companybids);
router.get('/lastprice/:id', price);
router.get('/status/:id/:status',status)
router.get('/canceledbid/:id',canceledbid)
router.get('/completed/:id',completed)

router.get('/filter', filter);

router.post('/code', code);

router.post('/review', review);
router.post('/paymenthistory', PaymentHistory);

router.get('/myorder', Myorder);

router.post('/companyInfo', CompanyInfo);



// Payement Gateway

router.get('/payement', payment);
router.get('/sucess', sucess);



router.post('/addbid',middelware, addbid);
router.post('/bid',middelware, bid);


module.exports = router;
