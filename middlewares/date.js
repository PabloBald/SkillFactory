const dateLogger = function(req,res,next){
    const date = new Date().toLocaleDateString();
    const method = req.method;
    console.log(`\nRequested at: ${date}.\nMethod: ${method}.`);
    next();
}

module.exports = dateLogger;