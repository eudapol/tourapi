import express from 'express';

const app = express();

app.get('/' , (req, res, next)=> {
    res.send("Tour Booking API");
});

app.get('/tours' , (req, res, next)=>{
    res.send("Get List of tours");
});

app.post('/tours' , (req, res, next)=>{
    res.send("Add a new tour...");
});


app.listen(process.env.PORT || 8091, ()=>{ console.log('Server has Started')});