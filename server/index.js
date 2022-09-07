const express =require('express');
const app = express();
const port = 5000;
const multer = require('multer')
const mongoose =require('mongoose')
const bodyParser =require('body-parser')
const cookieParser =require('cookie-parser')
const {User} =require('./models/User');
const {Contents} =require('./models/Contents')
const {auth} =require('./middleware/auth');
app.use('/static', express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser())
mongoose.connect('mongodb+srv://admin:qwer1234@cluster0.l9bb7.mongodb.net/travelapp?retryWrites=true&w=majority'
).then(()=>console.log('mongoDb connected'))
.catch(err=>console.log(err))

app.get('/',(req,res)=>res.send('Hello world!'))
app.use(express.static('uploads'));
app.post('/api/users/register',(req,res)=>{
    //회원가입할때 필요한 정보들을 client에서 가져오면 
    //그것들을 데이터 베이스에 넣어준다.

    const user = new User(req.body)

    user.save((err,doc)=>{
        if(err) return res.json({success:false,err})
        return res.status(200).json({
          success:true
        })
    })
})
app.get('/api/hello',(req,res)=>{
  res.send('안녕하세요')
})
app.post('/api/users/login', (req, res) => {

    // console.log('ping')
    //요청된 이메일을 데이터베이스에서 있는지 찾는다.
    User.findOne({ email: req.body.email }, (err, user) => {
  
      // console.log('user', user)
      if (!user) {
        return res.json({
          loginSuccess: false,
          message: "제공된 이메일에 해당하는 유저가 없습니다."
        })
      }
  
      //요청된 이메일이 데이터 베이스에 있다면 비밀번호가 맞는 비밀번호 인지 확인.
      user.comparePassword(req.body.password, (err, isMatch) => {
        // console.log('err',err)
  
        // console.log('isMatch',isMatch)
  
        if (!isMatch)
          return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다." })
  
        //비밀번호 까지 맞다면 토큰을 생성하기.
        user.generateToken((err, user) => {
          if (err) return res.status(400).send(err);
  
          // 토큰을 저장한다.  어디에 ?  쿠키 , 로컳스토리지 
          res.cookie("x_auth", user.token)
            .status(200)
            .json({ loginSuccess: true, userId: user._id })
        })
      })
    })
  })

  app.get('/api/users/auth', auth, (req, res) => {
    //여기 까지 미들웨어를 통과해 왔다는 얘기는  Authentication 이 True 라는 말.
    res.status(200).json({
      _id: req.user._id,
      isAdmin: req.user.role === 0 ? false : true,
      isAuth: true,
      email: req.user.email,
      name: req.user.name,
      lastname: req.user.lastname,
      role: req.user.role,
      image: req.user.image,
      good:req.user.good,
      history:req.user.history,
      schedule:req.user.schedule,
      UserStyle:req.user.userStyle
     
    })
  })

  app.get('/api/users/logout',auth,(req,res)=>{
      User.findOneAndUpdate({_id:req.user._id},
       {token:""},
       (err,user)=>{
           if(err) return res.json({success:false,err})
           return res.status(200).send({success:true})
       } )
  })


app.post('/api/users/addToGood',auth,(req,res)=>{
  //먼저 user collection 에 해당유저의 정보를 가져오기
  User.findOne({_id:req.user._id},
    (err,userInfo)=>{
      let duplicate = false
      //가져온 정보에서 카트에다 넣으려하는 상품이 이미 들어있는지 확인
      userInfo.good.forEach(item => {
        if(item.id === req.body.productId){
          duplicate = true;
        }
      });
       //상품이 이미 있을때
      if(duplicate){
         User.findOneAndUpdate({_id:req.user._id ,"good.id":req.body.productId}),
         {$inc : {"good.$.quantity":1}},
         {new:true},
        async (err,userInfo)=>{
           if(err) return await res.status(400).json({success:false,err})
           res.status(200).send(userInfo.good)
         }
      }
        //상품이 이미 있지않을때
      else{
            User.findOneAndUpdate(
              {_id:req.user._id},
              {
                $push:{
                  good: {
                    id:req.body.contentsId,
                    quantity:1,
                    image:req.body.image,
                    address:req.body.address,
                    title:req.body.title,
                    
                    date: Date.now()
                  }
                }
              },
              {new:true},
              (err,userInfo)=>{
                if(err) return res.status(400).json({success:false,err})
                res.status(200).send(userInfo.good)
              }
            )
      }

    })

  })

    app.get('/api/users/removeFromGood',auth,(req,res)=>{


 

      User.findOneAndUpdate(
        { _id: req.user._id },//$pull 상품지우기
        {
          "$pull":
              { "good": { "id": req.query.id} }
      }, {new:true},
      (err, userInfo) => {
        let cart = userInfo.good;
 
          if(err) return res.status(400).json({success:false,err})
          res.status(200).send(cart)
     
    }
     
     
    )
     
    })
    
    
    app.post('/api/users/addschedule',auth,(req,res)=>{
      //먼저 user collection 에 해당유저의 정보를 가져오기
      User.findOne({_id:req.user._id},
        (err,userInfo)=>{
   
      
                User.findOneAndUpdate(
                  {_id:req.user._id},
                  {
                    $push:{
                      schedule: {
                        writer:req.body.writer,
                        title:req.body.title,
                        desc:req.body.desc,
                        style:req.body.style,
                        startDate:req.body.startDate,
                        endDate:req.body.endDate,
                        id:req.body.id,
                        date: Date.now()
                      }
                    }
                  },
                  {new:true},
                  (err,userInfo)=>{
                    if(err) return res.status(400).json({success:false,err})
                    return  res.status(200).json({success:true,userInfo})
                  }
                )
          
    
        })
    
      })
    
   

      app.get('/api/users/removefromschedule',auth,(req,res)=>{


 

        User.findOneAndUpdate(
          { _id: req.user._id },//$pull 상품지우기
          {
            "$pull":
                { "schedule": { "id": req.query.id} }
        }, {new:true},
        (err, userInfo) => {
          let scd = userInfo.schedule;
   
            if(err) return res.status(400).json({success:false,err})
            res.status(200).send(scd)
       
      }
       
       
      )
       
      })
    

        var storage = multer.diskStorage({
          destination: function (req, file, cb) {
              cb(null, 'uploads/')
          },
          filename: function (req, file, cb) {
              cb(null, `${Date.now()}_${file.originalname}`)
          }
      })
        
      var upload = multer({ storage: storage }).single("file")

        app.post('/api/contents/image',(req,res)=>{
          upload(req, res, err => {
            if (err) {
                return req.json({ success: false, err })
            }
            return res.json({ success: true, filePath: res.req.file.path, fileName: res.req.file.filename })
        })
        })

        var upload = multer({ storage: storage }).single("file")

        app.post('/api/users/addcommunity',(req,res)=>{
          const contents =new Contents(req.body)

          contents.save((err)=>{
              if(err) return res.status.apply(400).json({success:false,err})
              return res.status(200).json({success:true})
          })
        })

        
        app.post('/api/users/addcommunity/letter',(req,res)=>{

           



                    Contents.find()
                    .populate("writer")
                 
                    .exec((err,productInfo)=>{
                      if(err) return res.status(400).json({success:false,err})
                      return res.status(200).json({success:true,productInfo})
                    })

        })

                
        app.get('/api/users/addcommunity/letter/letter_by_id',(req,res)=>{


          let type =req.query.type
          let productId =req.query.contentsid

        //   if (type === "array") {
        //     //id=123123123,324234234,324234234 이거를 
        //     //productIds = ['123123123', '324234234', '324234234'] 이런식으로 바꿔주기
        //     let ids = req.query.id.split(',')
        //     productId = ids.map(item => {
        //         return item
        //     })
    
        // }

          Contents.find({_id: productId })
          .populate('writer')
          .exec((err,product)=>{
            if(err) return res.status(400).send(err)
            return res.status(200).send({success:true,product})
          })
     
 })


   
 app.post('/api/users/addcommunity/letter/comment',auth,(req,res)=>{
  //먼저 user collection 에 해당유저의 정보를 가져오기

  let productId =req.query.contentsid

  Contents.findOne({_id:productId},
    (err,userInfo)=>{

  
      Contents.findOneAndUpdate(
              {_id:productId},
              {
                $push:{
                  comment: {
                    writer:req.body.writer,
                    comment:req.body.comment,
                    date: Date.now()
                  }
                }
              },
              {new:true},
              (err,userInfo)=>{
                if(err) return res.status(400).json({success:false,err})
                return  res.status(200).json({success:true,userInfo})
              }
            )
      

    })

  })


  app.post('/api/users/addToStyle',auth,(req,res)=>{
    //먼저 user collection 에 해당유저의 정보를 가져오기
    User.findOne({_id:req.user._id},
      (err,userInfo)=>{
    
          //상품이 이미 있지않을때
   
              User.findOneAndUpdate(
                {_id:req.user._id},
                {
                  $push:{
                    userStyle:
                      req.body.UserStyle
                    
                  }
                },
                {new:true},
                (err,userInfo)=>{
                  if(err) return res.status(400).json({success:false,err})
                  return  res.status(200).json({success:true,userInfo})
                }
              )
        
  
      })
  
    })
  
      
  app.listen(port, () => console.log(`Example app listening on port ${port}!`))