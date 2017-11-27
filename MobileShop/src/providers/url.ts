export class Urls  {

    
    public authApiUrl = {
            login : "http://media-consultancy.com:3000/api/auth/login",
            register: "http://media-consultancy.com:3000/api/auth/register"
        }
    public userApiUrl = {
            getUsers : "http://media-consultancy.com:3000/api/auth/getUsers",
            viewProfile : "http://media-consultancy.com:3000/api/user/",
            updateProfile : "http://media-consultancy.com:3000/api/updateProfile/",
            uploadPhoto : "http://media-consultancy.com:3000/api/user/upload/image/",
            updateGeolocation : "http://media-consultancy.com:3000/api/user/updateGeo/"
        }
    public locationApiUrl = {
            sendLocation : "http://media-consultancy.com:3000/api/location/sendlocation",
            nearBy : "http://media-consultancy.com:3000/api/location/nearby"
        }
    public chatApiUrl = {
            newConversation : "http://media-consultancy.com:3000/api/chat/new/",
            sendReply : "http://media-consultancy.com:3000/api/chat/",
            getConversation : "http://media-consultancy.com:3000/api/chat/:conversationId",
            getMessages : "http://media-consultancy.com:3000/api/chat/getmessages/"
        }
}

/*
no screenshot available for  getConversation : "http://media-consultancy.com:3000/api/chat/:conversationId"
*/