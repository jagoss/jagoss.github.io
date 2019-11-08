const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));

    //__dirname : It will resolve to your project folder.
});

router.get('/about',function(req,res){
    res.sendFile(path.join(__dirname+'/about.html'));
});

router.get('/sitemap',function(req,res){
    res.sendFile(path.join(__dirname+'/sitemap.html'));
});

app.get('/home', function(req, res) {
    res.render('/pages/conversion.html');
});

//add the router
app.use('/public', express.static(path.join(__dirname, 'public')));
//Store all JS and CSS in Scripts folder.

app.use('/home', router);
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');