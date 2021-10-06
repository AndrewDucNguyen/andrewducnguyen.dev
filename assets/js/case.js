// For the case information page
fetch('https://wpd-backend.herokuapp.com/api/v1/cases/5d725a037b292f5f8ceff787')
  .then(function (res){
    return res.json();
  })
  .then(function(caseInfo){
    if(caseInfo.success === true ){
      const caseId = caseInfo.data._id;
      const caseNum = caseInfo.data.caseNumber;
      const caseTitle = caseInfo.data.title;
      const caseDescript = caseInfo.data.description;
      const caseUrl = caseInfo.data.url;
      const caseUrlPDF= caseInfo.data.urlPDF;


      document.querySelector("#siteTitle").insertAdjacentHTML('beforeend', caseTitle);
      document.querySelector("#caseTitle").insertAdjacentHTML( 'beforeend', caseTitle);
      document.querySelector("#caseNum").insertAdjacentHTML( 'beforeend', caseNum);
      document.querySelector("#caseDescript").innerHTML = caseDescript;
      siteLink = document.querySelector("#siteLink")
      siteLink.setAttribute("href", caseUrl);
      sitePDF = document.querySelector("#sitePDF")
      sitePDF.setAttribute("href", caseUrlPDF);
    }
    else{
      alert("No case ID with the ID provided.");
    }
  })
  .catch(function(e){
    console.log(e);
  })