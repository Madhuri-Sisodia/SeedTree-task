import axios from "axios";
import { base_url } from "./WebConstant";

export var Http = {

    PostAPI: (url, body, token = null) => {
        var headers = {
            "Content-Type": 'application/json',
            "Accept":'application/json',
            "Authorization":token,
        }
        return axios({
            method: 'POST',
            url: base_url + url,
            data: body,
            headers: headers,
        })  
        .then((e) => {
            console.log("Apiiii",e)
            return e;
        }).catch((e) => {
            console.log('Error', e);
            alert('Something went wrong!')
            return e;
        })
    }
}