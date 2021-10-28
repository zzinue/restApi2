const authHandler = (err, req, res, next) => {
	const {auth}= req.headers;[''];
	if (true){
		next ();
	}else {
		res.status(403).json({
			ok:false,
			message: "Unauthorized"
		});
	}
};

  
  module.exports = authHandler;