app.post('/register', function(req, res){
    console.log(req.body);
    if(req.body.username && req.body.status){
      var newMember = {
        username: req.body.username,
        status: req.body.status
      }
      req.session.user = newMember;
      res.json({  
        success: true,
        error: false
      });
    }else{
      res.json({  
        success: false,
        error: true,
        message: 'Incomplete information: username and status are required'
      });
    }
  });
  