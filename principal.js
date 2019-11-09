const express = require('express');
const router = express.Router();

// Home page route
// router.get('/',function(req,res){
//     res.sendFile(path.join(__dirname+'/index.html'));
//     //__dirname : It will resolve to your project folder.
// });

// router.get('/about',function(req,res){
//     res.sendFile(path.join(__dirname+'/about.html'));
// });

router.get('/home', function(req, res) {
    res.render('/pages/conversion.html');
});
//
// router.get('/sitemap',function(req,res){
//     res.sendFile(path.join(__dirname+'/sitemap.html'));
// });

module.exports = router;