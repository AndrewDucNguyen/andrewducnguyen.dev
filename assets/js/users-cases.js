// For users and cases information
fetch('https://wpd-backend.herokuapp.com/api/v1/cases/5d713995b721c3bb38c1f5d0/5d7a514b5d2c12c7449be044')
  .then(function (res){
    return res.json();
  })
  .then(function(userCaseInfo){
    if(userCaseInfo.success === true ){
        console.log(userCaseInfo.data.user);
        console.log(userCaseInfo.data.case);
        const department = userCaseInfo.data.user.department;
        const firstName = userCaseInfo.data.user.firstName;
        const lastName = userCaseInfo.data.user.lastName;
        const email = userCaseInfo.data.user.email;
        const phoneNum = userCaseInfo.data.user.phoneNumber;
        const rank = userCaseInfo.data.user.rank;
        const stationNum = userCaseInfo.data.user.stationPhoneNumber;

        const caseId = userCaseInfo.data.case._id;
        const caseNum = userCaseInfo.data.case.caseNumber;
        const caseTitle = userCaseInfo.data.case.title;
        const caseDescript = userCaseInfo.data.case.description;
        const caseUrl = userCaseInfo.data.case.url;
        const caseUrlPDF= userCaseInfo.data.case.urlPDF;

        
        // User information
        document.querySelector("#department").insertAdjacentHTML( 'beforeend', department);
        document.querySelector("#firstName").insertAdjacentHTML('beforeend', firstName);
        document.querySelector("#lastName").insertAdjacentHTML( 'beforeend', lastName);
        document.querySelector("#rank").insertAdjacentHTML( 'beforeend', rank);
        document.querySelector("#email").insertAdjacentHTML( 'beforeend', email);
        document.querySelector("#phoneNum").insertAdjacentHTML( 'beforeend', phoneNum);
        document.querySelector("#stationNum").insertAdjacentHTML( 'beforeend', stationNum);

        // Case information
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
      alert("No user case found with the ID provided.");
    }
  })
  .catch(function(e){
    console.log(e);
  })