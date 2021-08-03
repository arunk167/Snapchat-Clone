import { USERS } from "../../config/urls"
import { apiGet } from "../../utils/utils"

export function users (query="",headers){
    return new Promise(
        (resolve , reject)=>{
            apiGet(USERS+query,{},headers).then(
                (res)=>{
                    resolve(res)
                }
            ).catch(
                error=>reject(error)
            )
        }
    )
}