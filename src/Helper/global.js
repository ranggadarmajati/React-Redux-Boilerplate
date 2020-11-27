// get user token from local storage browser
function userToken(){
    const user = getItem('user');
    if(user && user.token){
        return user.type+' '+user.token;
    }else{
        return null;
    }
}

// get user refresh token from local storage browser
function userRefreshToken(){
    const user = JSON.parse(localStorage.getItem('user'));
    if(user && user.token){
        return user.refresh_token;
    }else{
        return null;
    }
}

// set item on local storage web browser
async function setItem(title, data){
   await localStorage.setItem(title, JSON.stringify(data))
}

// get item on local storage web browser
async function getItem(title){
    const data = await localStorage.getItem(title)
    return JSON.parse(data);
}

export {
    userToken,
    userRefreshToken,
    setItem,
    getItem
}