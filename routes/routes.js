const express = require('express');
const Forgalmazo = require('../models/forgalmazo');
const Film = require('../models/film');

const router = express.Router()

//Post Method
router.post('/filmek', async (req, res) => {
    const ujFilm = new Film(req.body)

    try {
        const ujFilmnMentes = await ujFilm.save();
        res.status(201).json({ "_id": ujFilmnMentes._id })
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all Method
router.get('/filmek', async (req, res) => {
    try {
        const data = await Film.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// //Get by ID Method
router.get('/filmek/:studio', async (req, res) => {
    try {
        const studio = await Forgalmazo.findOne({ "Forgalmazo": req.params.studio })
        // console.log(studio._id);
        const filmek = await Film.find({ "Studio_id": studio._id })
            .populate('Studio_id', '-_id')
        if (filmek.length == 0) {
            res.status(404).json({ message: "Ennek a studionak nincs filmje !" })

        }
        else {
            res.json(filmek)
        }
    }
    catch (error) {
        res.status(400).json({ message: "Ilyen studio nincs!" })
    }
})



//Update by ID Method
// router.patch('/:id', async (req, res) => {
//     try {
//         const id = req.params.id;
//         const updatedData = req.body;
//         const options = { new: true, runValidators: true }; 
//         // hogy a frissítés utáni dokumentumot kapjuk vissza
//         const result = await Telefon.findByIdAndUpdate(
//             id, updatedData, options
//         )
//         if (result) {
//             res.send(result)
//         } else {
//             res.status(400).json({ message: `${id} azonosítóval nem létezik telefon!`  })
//         }
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// })

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Telefon.findByIdAndDelete(id)
        res.send(`A ${data.nev} nevű telefon törölve lett.`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;