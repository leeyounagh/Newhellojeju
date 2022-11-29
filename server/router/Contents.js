const {Contents} =require(
    '../models/Contents' )
    const multer = require('multer');
const express = require('express');
    const router = express.Router();

    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/')
        },
        filename: function (req, file, cb) {
            cb(null, `${Date.now()}_${file.originalname}`)
        }
    })
      
    var upload = multer({ storage: storage }).single("file")

      app.post('/image',(req,res)=>{
        upload(req, res, err => {
          if (err) {
              return req.json({ success: false, err })
          }
          return res.json({ success: true, filePath: res.req.file.path, fileName: res.req.file.filename })
      })
      })


    
module.exports = router