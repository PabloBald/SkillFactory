const dateLogger = function(req,res,next){
    const date = new Date().toLocaleDateString();
    console.log(`\nRequested at: ${date}.`);
    next();
}

module.exports = dateLogger;