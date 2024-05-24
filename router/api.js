const express = require('express');
const danz = require('d-scrape');
const router = express.Router();
const config = require("../schema/config");
const skrep = require('../scrapers/ai');
const dev = config.options.developer;

//Log Info
mess = {
    error: { 
        status: 404,
        developer: `${dev}`,
        result: 'Error, Service Unavaible'
    },
    notres: {
      status: 404,
      developer: `${dev}`,
      result: 'Error, Invalid JSON Result'
    },
    query: {
        status: 404,
        developer: `${dev}`,
        result: 'Please input parameter query!'
    },
  url: {
      status: 404,
      developer: `${dev}`,
      result: 'Please input parameter URL!'
  },
    noturl: {
      status: 404,
      developer: `${dev}`,
      result: 'Error, Invalid URL'
    }
};

//ROUTER API🔥 

//--AI FEATURE//

router.get('/ai/chatgpt', async (req, res, next) => {
  var query = req.query.query
  if (!query) return res.json(mess.query)
danz.ai.ChatGpt(query).then(data => {
    if (!data) return res.json(mess.notres)

  res.json({

  status: true,

  developer: `${dev}`,

  result: data

})
}).catch(e => {
  res.json(mess.error)
})
})


router.get('/ai/gptlogic', async (req, res, next) => {
  var query = req.query.query
  if (!query) return res.json(mess.query)
  var prompt = req.query.prompt
  if (!prompt) return res.json("Please input prompt!")
danz.ai.gptLogic(query, prompt).then(data => {
    if (!data) return res.json(mess.notres)

  res.json({

  status: true,

  developer: `${dev}`,

  result: data

})
}).catch(e => {
  res.json(mess.error)
})
})

router.get('/ai/virtualgirl', async (req, res, next) => {
  var query = req.query.query
  if (!query) return res.json(mess.query)
danz.ai.VirtualGirlfriends(query).then(data => {
    if (!data) return res.json(mess.notres)

  res.json({

  status: true,

  developer: `${dev}`,

  result: data

})
}).catch(e => {
  res.json(mess.error)
})
})

router.get('/ai/dystopia', async (req, res, next) => {
  var query = req.query.query
  if (!query) return res.json(mess.query)
danz.ai.dystopia(query).then(data => {
    if (!data) return res.json(mess.notres)

  res.json({

  status: true,

  developer: `${dev}`,

  result: data

})
}).catch(e => {
  res.json(mess.error)
})
})

router.get('/ai/ersgan', async (req, res, next) => {
  var url = req.query.url
  if (!url) return res.json(mess.url)
danz.ai.ersgan(url).then(data => {
    if (!data) return res.json(mess.notres)

  res.json({

  status: true,

  developer: `${dev}`,

  result: data

})
}).catch(e => {
  res.json(mess.error)
})
})

router.post('/ai/luminai', async (req, res, next) => {
  var query = req.query.query
  if (!query) return res.json(mess.query)
  var username = req.query.username
  if (!username) return res.json("Please input Usernams session!")
skrep.luminai(query, username).then(data => {
    if (!data) return res.json(mess.notres)

  res.json({

  status: true,

  developer: `${dev}`,

  result: data

})
}).catch(e => {
  res.json(mess.error)
})
})

//--DOWNLOADER FEATURE//
router.get('/downloader/tiktok', async (req, res, next) => {
  var url = req.query.url
  if (!url) return res.json(mess.url)
danz.downloader.tiktok(url).then(data => {
    if (!data) return res.json(mess.notres)

  res.json({

  status: true,

  developer: `${dev}`,

  result: data

})
}).catch(e => {
  res.json(mess.error)
})
})

router.get('/downloader/igdl', async (req, res, next) => {
  var url = req.query.url
    if (!url) return res.json(mess.url)
  danz.downloader.igdl(url).then(data => {
  if (!data) return res.json(mess.notres)

  res.json({

  status: true,

  developer: `${dev}`,

  result: data

})
}).catch(e => {
  res.json(mess.error)
})
})


router.get('/downloader/spotify', async (req, res, next) => {
  var url = req.query.url
  if (!url) return res.json(mess.url)
  danz.downloader.spotifyDownload(url).then(data => {
  if (!data) return res.json(mess.notres)

  res.json({

  status: true,

  developer: `${dev}`,

  result: data

})
}).catch(e => {
  res.json(mess.error)
})
})

//--TOOLS FEATURE//
router.get('/tools/remini', async (req, res, next) => {
  var url = req.query.url
  if (!url) return res.json(mess.url)
  danz.tools.remini(url).then(data => {
  if (!data) return res.json(mess.notres)

  res.json({

  status: true,

  developer: `${dev}`,

  result: data

})
}).catch(e => {
  res.json(mess.error)
})
})


module.exports = router;