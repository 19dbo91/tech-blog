
//Buttons
const homeButton = document.getElementById('button-home');
homeButton.addEventListener('click', (event) => {
    event.stopPropagation();
    document.location.replace('/')
})


const dashButton = document.getElementById('button-dash');
dashButton.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log("Clicked Dashboard");
    //if not logged in send to login
    //document.location.replace('/login')
    document.location.replace('/dashboard')
})


const logButton = document.getElementById('button-log');
logButton.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log("Clicked Login/Logout");
    
    const loggedIn = false;//switch out for sesh id
    if (loggedIn){ 
        //destroy key
        document.location.replace('/');
    }else{
        document.location.replace('/login');
    }
    
})
