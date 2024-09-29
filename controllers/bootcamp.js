const Bootcamp = require("../models/Bootcamp");

exports.getBootcamps = async (req, res, next) => {
   try{
    const bootcamps = await Bootcamp.find();

    if(!bootcamps){
         return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: bootcamps });
   }catch(err){
    console.error(error);
    res.status(400).json({ success: false, error: 'Bad Request' });

   }
}


exports.getBootcamp = async (req, res, next) => {
    try{
        const bootcamp = await Bootcamp.findById(req.params.id);

        res.status(200).json({ success: true, data: bootcamp});
    }catch(err){
       console.error(error);
        res.status(400).json({ success: false, error: 'Bad Request' });
    }
}
exports.createBootcamp = async (req, res, next) => {
    try{
    const bootcamp = await Bootcamp.create(req.body);

    res.status(201).json({
        success: true,  
        data: bootcamp 
    });
    } catch (error) {
        console.error(error);
        res.status(400).json({ success: false, error: 'Bad Request' });
    }  
};
exports.updateBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
            runValidators: true
         });
    
         if(!bootcamp){
           return  res.status(400).json({success: false});
         }
             res.status(200).json({success: true, data: bootcamp });
    } catch (error) {
        console.error(error);
        res.status(400).json({ success: false, error: 'Bad Request' });
    };
   
}

exports.deleteBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

    if(!bootcamp){
        return res.status(404).json({success: false});
    }
      res.status(200).json({success: true});

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Server Error' });
    }
   
}