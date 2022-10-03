const router = require('express').Router();
const Product = require('../models/product');
const checkJWT = require('../middlewares/check-jwt');
const cloudinary = require('cloudinary');
const algoliasearch = require('algoliasearch');
// const client = algoliasearch('9SA5PPC1N4', 'd0cd66994c1b2a3fbec69d0679914209');
// const client = algoliasearch('9SA5PPC1N4', '183f7ddb740690df8b6fe7cd82008198');
const client = algoliasearch('R8SOPXU9JW', 'bb6a60bceaea8b6e27b94b58d5d12991');
const index = client.initIndex('gdesign');

cloudinary.config({
  cloud_name: 'gdesigns',
  api_key: '429854764125427',
  api_secret: 'PxEdUKCLC9Shs-DJbMWUEmZGC-s'
});


router.route('/products')
  .get(checkJWT, (req, res, next) => {
    Product.find({ owner: req.decoded.user._id })
      .populate('owner')
      .populate('category')
      .exec((err, products) => {
        if (products) {
          res.json({
            success: true,
            message: "Products",
            products: products
          });
        }
      });
  })
  .post(checkJWT, (req, res, next) => {
    console.log('-----------------------');

    cloudinary.v2.uploader.upload(req.body.product_picture, function (error, result) {
      try {
        if (error) {
          throw error;
        }
        let product = new Product();
        product.owner = req.decoded.user._id;
        product.category = req.body.categoryId;
        product.title = req.body.title;
        product.price = req.body.price;
        product.description = req.body.description;
        product.image_name = req.body.product_image_name;
        product.image = result.url;




        product.save((err, savedProduct) => {
          console.log('saved product ', savedProduct.toObject());
          console.log('saved product ', savedProduct.toObject());
          console.log('saved product ', savedProduct.toObject());

          const prod = savedProduct.toObject();

          const algoliaObject = {
            ObjectID: prod.id,
            name: prod.name,
            price: prod.price,
            title: prod.title,
            category: prod.category,
            description: prod.description,
            image: prod.image,
            created: prod.created,
            reviews: prod.reviews,
          }

          index.saveObject(algoliaObject).then(({ objectIds }) => {
            console.log('object ids ', objectIds);
          })
            .catch(err => {
              console.log('err', err);
            })
        });

        res.json({
          success: true,
          message: 'Successfully Added the product'
        });
      } catch (err) {
        res.json({
          success: false,
          message: 'Unable to save image to cloudinary'
        })
      }

      console.log(error);
    });

  });


router.route('/products/getById')
  .get(checkJWT, (req, res, next) => {
    Product.findById({ _id: req.query.id })
      .populate('category')
      .exec((err, products) => {
        if (err) {
          console.log('error retrieving product byid ', err);
        }
        if (products) {
          res.json({
            success: true,
            message: products !== null ? 'Successfully retrieved the product by id' : 'Product not found',
            products: products
          });
        }
      });
  });


router.route('/products/edit')
  .post(checkJWT, (req, res, next) => {
    console.log('edit ', req.body);

    if (req.body.product_picture) {
      cloudinary.v2.uploader.upload(req.body.product_picture, function (error, result) {
        try {
          if (error) {
            throw error;
          }

          const editProduct = {
            image: result.url,
            description: req.body.description,
            price: req.body.price,
            title: req.body.title,
            category: req.body.category,
            owner: req.body.owner,
            created: req.body.crated,
            reviews: req.body.reviews,
            id: req.body.id
          }

          Product.findByIdAndUpdate(req.body.id, editProduct, { new: true }, function (err, products) {
            if (err) {
              console.log('error editing product ', err);
            } else {
              res.json({
                success: true,
                products: products,
                message: products !== null ? 'Successfully edited the product' : 'Product not found'
              });
            }
          });
        } catch (err) {
          res.json({
            success: false,
            message: 'Unable to save image to cloudinary'
          })
        }
        console.log(error);
      });
    } else {
      Product.findByIdAndUpdate(req.body.id, req.body, { new: true }, function (err, products) {
        if (err) {
          console.log('error editing product ', err);
        } else {
          res.json({
            success: true,
            products: products,
            message: products !== null ? 'Successfully edited the product' : 'Product not found'
          });
        }
      });
    }
  });


router.route('/products/delete')
  .get(checkJWT, (req, res, next) => {
    Product.findByIdAndRemove({ _id: req.query.id }, function (err, products) {
      if (err) {
        console.log('error deleting product ', err);
      } else {
        res.json({
          success: true,
          products: products,
          message: products !== null ? 'Successfully deleted the product' : 'Product not found'
        });
      }
    });
  });

module.exports = router;
