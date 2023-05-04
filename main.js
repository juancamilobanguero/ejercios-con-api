const API_URL ="https://jsonplaceholder.typicode.com/users"

const jcmb = new XMLHttpRequest();

function onRequestHandier(){
    if(this.readyState === 4 && this.status === 200){
        console.log(response);
    }
}
jcmb.addEventListener("load", onRequestHandier);
jcmb.open(`GET`, `${API_URL}/users`);
jcmb.send();    