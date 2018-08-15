
const IP_ADDRESS = "http://128.199.88.174";
const PORT = ":8080";
const PATH = "/api";
const URL = IP_ADDRESS + PORT + PATH;
const SECRET = "?secret=b5ed678f64a4";

export function getContacts(index, limit){
  return URL + "/contact/" + index + "/" + limit + SECRET;
}

export function createContact(){
  return URL + "/contact" + SECRET;
}

export function deleteContact(id){
  return URL + "/contact/" + id + SECRET;
}
