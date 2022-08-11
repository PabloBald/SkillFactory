const notFound = (req,res,next)=>{
    res.status(404).json({error: true,message:'Not found'})
}

const errorHandler={
    notFound
}
module.exports = errorHandler;