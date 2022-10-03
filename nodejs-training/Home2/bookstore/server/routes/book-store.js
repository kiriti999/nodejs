const router = require('express').Router();

const BookStore = require('../models/book-store');

const booksJson = require('./../books.json');

// router.get('/books', (req, res, next) => {
//     console.log('getting books...');
//     BookStore.find({}, (err, books) => {
//         if (err) {
//             console.log('error getting books ', err);
//             res.json({
//                 success: false,
//                 message: "Failed",
//                 err: err
//             });
//         } else {
//             res.json({
//                 success: true,
//                 message: "Success",
//                 books: books
//             })
//         }
//     })
// });

router.post('/books/save', (req, res, next) => {
    var bookStore = new BookStore(req.body);
    bookStore.save();

    bookStore.save(function (err, books) {
        if (err) {
            console.log('error saving books ', err);
            res.json({
                success: false,
                message: "Failed",
                err: err
            });
        } else {
            res.json({
                success: true,
                message: "Success",
                books: books
            });
        }
    })
});


router.get('/books/:id', (req, res, next) => {
    BookStore.findById({ _id: req.params.id })
        .exec((err, books) => {
            if (err) {
                res.json({
                    success: false,
                    message: 'book by id not found',
                    err: err
                });
            } else {
                if (books) {
                    res.json({
                        success: true,
                        books: books
                    });
                }
            }
        });
});

router.get('/books/:year?', (req, res, next) => {
    console.log('getting books by year...', req.query.year);
    BookStore.aggregate([{ $match: { published: parseInt(req.query.year) } }])
        .exec((err, books) => {
            if (err) {
                res.json({
                    success: false,
                    message: 'books not found',
                    err: err
                });
            } else {
                if (books) {
                    res.json({
                        success: true,
                        books: books
                    });
                }
            }
        });
});

router.get('/books/:pricestart?/:priceend?', (req, res, next) => {
    console.log('getting books by range');
    BookStore.find({
        minNum: { $gte: parseInt(req.query.pricestart) },
        maxNum: { $lte: parseInt(req.query.priceend) }
    }).exec((err, books) => {
        if (err) {
            res.json({
                success: false,
                message: 'book by range',
                err: err
            });
        } else {
            if (books) {
                res.json({
                    success: true,
                    books: books
                });
            }
        }
    });
});

module.exports = router;


