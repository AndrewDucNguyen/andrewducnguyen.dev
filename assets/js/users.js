  // For the User information page
  fetch('https://wpd-backend.herokuapp.com/api/v1/users/5d7a514b5d2c12c7449be042')
  .then(function (res){
    return res.json();
  })
  .then(function(userInfo){
    if(userInfo.success === true ){
        const department = userInfo.data.department;
        const firstName = userInfo.data.firstName;
        const lastName = userInfo.data.lastName;
        const email = userInfo.data.email;
        const phoneNum = userInfo.data.phoneNumber;
        const rank = userInfo.data.rank;
        const stationNum = userInfo.data.stationPhoneNumber;

        document.querySelector("#department").insertAdjacentHTML( 'beforeend', department);
        document.querySelector("#firstName").insertAdjacentHTML('beforeend', firstName);
        document.querySelector("#lastName").insertAdjacentHTML( 'beforeend', lastName);
        document.querySelector("#rank").insertAdjacentHTML( 'beforeend', rank);
        document.querySelector("#email").insertAdjacentHTML( 'beforeend', email);
        document.querySelector("#phoneNum").insertAdjacentHTML( 'beforeend', phoneNum);
        document.querySelector("#stationNum").insertAdjacentHTML( 'beforeend', stationNum);

        }
    else{
        alert("No user with the ID provided.");
    }
  })
  .catch(function(e){
      console.log(e);
  })