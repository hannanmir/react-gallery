const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log("In PUT", req.params.id);
    let queryText = `
        UPDATE "images"
        SET "likes" = "likes" + 1
        WHERE "id" = $1;
        `;
    pool.query(queryText, [req.params.id])
        .then((result) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log("error in likeImage", error);
        res.sendStatus(500);
    });
});

// GET Route
router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "images" ORDER BY "id";';
    pool.query(queryText).then(result => {
        res.send(result.rows);
    })
    .catch(error => {
        console.log('error getting images', error);
        res.sendStatus(500);
    });
})

module.exports = router;