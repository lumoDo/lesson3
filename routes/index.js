var express = require('express');
var router = express.Router();



/* GET home page. */
router.get("/",function (req,res) {

	if(req.originalUrl==='/index'){
console.log(1);
res.end();
	}else{
	res.render('index',{
		title:'首页'
	});
}
});



module.exports = router;
