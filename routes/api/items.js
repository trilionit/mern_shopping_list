const express= require("express");
const router= express.Router();

//ITEM MODEL
const Item= require("../../models/Item");

//@GET api/items
//@DESC Get all Items
//@access Public

router.get("/", async (req, res)=>{
    // Item.find()
    //     .then(items=>{
    //         let allItems= res.json(items.data);
    //         console.log(allItems);
    //         //res.send(allItems);
    //     });
    const allItems = await Item.find({})

    try {
        res.send(allItems);
        console.log(allItems);
    } catch(err) {
        res.status(500).send(err);
    }
    console.log("items route reached...");
})

//@POST api/items
//@DESC Create Items
//@access Public

router.post("/", (req, res)=> {
    const newItem= new Item({
        name: req.body.name
    })

    newItem.save().then(item=>res.json(item));
    console.log(req.body.name);
    console.log("form input submitted");
})

//@DELETE api/items
//@DESC DELETE  Items by ID
//@access Public

router.delete("/:id", (req, res)=> {
    console.log(req.params.id);
    Item.findById(req.params.id)
        .then(item=> item.remove().then(()=>res.json({success: true})))
        .catch(err=>res.status(404).json({success: false}));
        console.log("Item Delete initiated...");
})

module.exports = router;