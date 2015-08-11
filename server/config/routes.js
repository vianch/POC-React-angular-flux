exports.init = function(app) {
  	app.get('/get-data',function(req,res){

  		var random1 = Math.random();
  		var random2 = Math.random();

        return res.json( [{date: 'Date '+random1.toString() ,description:'description '+random1.toString()},
						{date: 'Date '+random2.toString() ,description:'description '+random2.toString()}] );
    });
}; 