var express = require('express');
var router = express.Router();
var months = ['January','February','March','April','May','June','July','August','September','October','November','December']
var dateObj = {'unix':null,'natural':null};
router.get('/:time',function(req,res){
    var date = null;
    var time = req.params.time;
    var naturalRegex = /[A-za-z]+\s\d+,\s\d+/;
    var unixRegex = /^\d+/; 
    if(unixRegex.test(time)){
        console.log('unix');
        date = new Date(parseInt(time));
    }
    else if(naturalRegex.test(time)){
        console.log("natural " +time);
        console.log('natural');
        console.log(time);
        date = new Date(time);
        if(date=="Invalid Date"){
            date=null;
        }
    }
    if(date!=null){
        var unix = date.getTime();
        var natural = months[date.getMonth()]+' '+date.getDate()+', '+date.getFullYear();
        dateObj = {'unix':unix,'natural':natural};
    }
    
    res.send(dateObj);
});

module.exports = router;