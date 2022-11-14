const express = require('express')
const router = express.Router()
const ShortUrl = require('../models/ShortUrl')

router.get('/',async (req,res) => {
    let page = parseInt(req.query.page) || 1
     // const limit = parseInt(req.query.limit)
    
  
      const startIndex = (page - 1) * 5
     // const endIndex = page * 5
      
  const shortUrls = await ShortUrl.find().limit(5).skip(startIndex).exec()
   
    
    res.render('urlView',{shortUrls:shortUrls,nextPage:page+1,prevPage:page-1})
}) 

router.get('/all', async(req,res) => {
    const shortUrls = await ShortUrl.find()
   res.json({shortUrls})
    
})

router.post('/shortUrls', async (req,res) => {
    await ShortUrl.create({fullUrl : req.body.fullUrl})
    res.redirect('/')
})

router.get('/:shortUrl',async (req,res) => {
    let shortUrl = await ShortUrl.findOne({short : req.params.shortUrl})
    
    if(shortUrl == null) {
        return res.sendStatus(404)
    }
    shortUrl.countClicks++
    shortUrl.lastDateClicked = new Date()
    shortUrl.save()
    res.redirect(shortUrl.fullUrl)
})

router.delete('/:shortUrl',async (req,res) => {
 
   const url = await ShortUrl.findOneAndDelete({short : req.params.shortUrl})
    res.status(200).json({url});
   
   
})

module.exports = router