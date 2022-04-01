const express = require('express')

const router = express.Router();

const connect = require("../config/dbconfig")

//console.log('step');



//get the events data table
router.get('/event-display',(req,res) => {
    connect.query('SELECT * from events',(err,rows)=>{
        if(!err)
        {
            res.send(rows)
        }
        else
        {
            console.log(err)
        }
    })
})

//post data to events table data
router.post('/event-update',(req,res)=>{
    data={
        eventname: req.body.eventname,
        clubname: req.body.clubname,
        eventdesc: req.body.eventdesc,
        eventdate: req.body.eventdate,
        brochure: req.body.brochure,
        registrationlink: req.body.registrationlink
    }
    connect.query('INSERT into events SET eventname = ?, clubname = ?, eventdesc = ?, eventdate = ?, brochure = ?, registrationlink = ?',[data.eventname, data.clubname,data.eventdesc,data.eventdate,data.brochure, data.registrationlink],(err,rows) => 
    {
        if(!err)
        {
            res.send(rows)
        }
        else{
            console.log(err)
        }
    })
})

module.exports = router;