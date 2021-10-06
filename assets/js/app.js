



// import fetch from 'node-fetch';
// import express from 'express';
// import path from 'path';
// const app = express();

// app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//   res.send("got it")
// })

// app.get('/cases/:id', (req, res) => {
//   const { id } = req.params;
//   const url = `https://wpd-backend.herokuapp.com/api/v1/cases/${id}`;
//   caseFetch(url);
//   res.render('case');
// })

// function caseFetch(url){
//   fetch(url)
//     .then(function (res){
//       return res.json();
//     })
//     .then(function(res){
//       const caseNum = res.data.caseNumber;
//       const caseTitle = res.data.title;
//       const caseDescript = res.data.description;
//       const caseUrl = res.data.url;
//       const caseUrlPDF= res.data.urlPDF;

//       return caseNum, caseTitle, caseDescript, caseUrl, caseUrlPDF;

//       // document.querySelector("#siteTitle").insertAdjacentHTML('beforeend', caseTitle);
//       // document.querySelector("#caseTitle").insertAdjacentHTML( 'beforeend', caseTitle);
//       // document.querySelector("#caseNum").insertAdjacentHTML( 'beforeend', caseNum);
//       // document.querySelector("#caseDescript").innerHTML = caseDescript;
//       // siteLink = document.querySelector("#siteLink")
//       // siteLink.setAttribute("href", caseUrl);
//       // sitePDF = document.querySelector("#sitePDF")
//       // sitePDF.setAttribute("href", caseUrlPDF);
//       })
//     .catch(function(e){
//       console.log(e);
//     })
// }

// app.get('/user/', (req, res) =>{

// })

// // If any
// app.get('*', (req, res) =>{
//   res.send("Path is unknown. Please check site path.")
// })

// app.listen(5500, () =>{
//   console.log("listening on the port")
// })