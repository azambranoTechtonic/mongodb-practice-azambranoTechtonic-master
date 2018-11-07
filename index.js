$(".answerKey").attr("style","display: none;") //DO NOT REMOVE this is just to hide the empty solution and feedback div that we will add after grading
//Please enter your name for the assignment below
document.getElementById('user').innerHTML =
'Alexis Zambrano'

//problem-1

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign inside the `` marks.



document.getElementById("problem-1").innerHTML = `db.getCollection('cars').find({car_make: 'BMW'})`


//problem-2

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign inside the `` marks.


document.getElementById("problem-2").innerHTML = `db.getCollection('cars').insertOne(
{
  car_make: "Alexis",
  car_model: "Zambrano",
  color: "MellowYellow",
  mileage: 97000,
  year: 2020,
  price: "$35000" ,
  dealership: ObjectId('5be08de136317c7f3cd52865')
})`

//problem-3

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign inside the `` marks.

document.getElementById("problem-3").innerHTML = `db.getCollection('cars').find({}).limit( 10 ).sort({mileage: 1})`


//problem-4

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign inside the `` marks.
document.getElementById("problem-4").innerHTML = `db.getCollection('cars').aggregate( [ { $sample: { size: 1 } } ] )`


//problem-5

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign inside the `` marks.
document.getElementById("problem-5").innerHTML = `db.getCollection('cars').update(
   { car_model: "Zambrano" },
   { $set:
      {year: "2018" }
    })`


//challenge-1

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign inside the `` marks.
document.getElementById("challenge-1").innerHTML = `db.getCollection('cars').find( {
     car_make: "BMW",
     $or: [ { year: { $gt: 2000 } }, { mileage: { $lt: 30000 } } ]
} )`


//challenge-2

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign inside the `` marks

var page = 2;
var numResultsPerPage = 5;


document.getElementById("challenge-2").innerHTML = `db.getCollection('cars').find().skip( numResultsPerPage * (page - 1) ).limit( numResultsPerPage )`






// document.getElementById("challenge-2").innerHTML = ``
