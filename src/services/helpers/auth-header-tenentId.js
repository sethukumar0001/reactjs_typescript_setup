export function authHeaderTenetId(id) {
    // return authorization header with jwt token
    let access_token = localStorage.getItem('access_token');    
    if (access_token) {
        return { 'Authorization': 'Bearer ' + access_token,'Content-Type':'application/json',powerpayTenantId:id };
    } else {
        return {'Content-Type':'application/json'};
    }
}