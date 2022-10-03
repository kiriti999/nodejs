const router = require('express').Router();

const algoliasearch = require('algoliasearch');
// const client = algoliasearch('9SA5PPC1N4', 'd0cd66994c1b2a3fbec69d0679914209');
const client = algoliasearch('R8SOPXU9JW', 'bb6a60bceaea8b6e27b94b58d5d12991');
const index = client.initIndex('gdesign');


router.get('/', (req, res, next) => {
  if (req.query.query) {
    index.search({
      query: req.query.query,
      page: req.query.page,
    }, (err, content) => {
      res.json({
        success: true,
        message: "Here is your search",
        status: 200,
        content: content,
        search_result: req.query.query
      });
    });
  }
});

module.exports = router;

