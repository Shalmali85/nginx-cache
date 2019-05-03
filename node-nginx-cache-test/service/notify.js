const rp = require('request-promise');
const URI= process.env.URI|| 'https://spring-cloud-test.cfapps.io/notify';

class notification{
    constructor(){

    }
 getNotificationData(){
    const requestOptions = {
        method: 'GET',
        uri: URI+`/all`,
        headers: {
            'Content-Type': 'application/json',

        },
        json: true,
    };
    return rp(requestOptions);
}


 getNotificationDataForUser(user) {
    const requestOptions = {
        method: 'GET',
        uri: URI + `/`+user,
        headers: {
            'Content-Type': 'application/json',

        },
        json: true,
    };
    return rp(requestOptions);
}
}
module.exports=notification;