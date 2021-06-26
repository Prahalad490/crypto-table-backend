const express = require("express");
const router = express.Router();
const Saved = require("../model/saved");


router.post("/savedata", (req, res) => {
    
    const saved = new Saved({
        name: req.body.name,
        symbol: req.body.symbol,
        market_cap: req.body.market_cap,
        saved_status: req.body.saved_status,
        price: req.body.price
    })

    saved.save()
    .then(response => {
        res.status(201).json({
            message: "stock saved",
            result: response
        })

    })
    
})


router.get("/getdata", (req, res) => {
    Saved.find((err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.send(err);
        }
    });
});


router.delete("/delete",(req, res) => {
    Saved.deleteOne(
        { symbol : req.body.symbol},
        (err) => {
        if (!err) {
            res.send("successfully delete")
        } else {
            res.send(err)
        }
    });
});

module.exports = router;