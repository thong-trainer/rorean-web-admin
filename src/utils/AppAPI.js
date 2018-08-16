
const DOMAIN = "http://128.199.88.174:8080";
const PATH = "/api";
const URL = DOMAIN + PATH;
const SECRET = "?secret=b5ed678f64a4";

export function getContacts(index, limit){
  // return URL + "/contact/" + index + "/" + limit + SECRET;
  return "http://128.199.88.174:8080/api/contact/" + index + "/" + limit+ "?secret=b5ed678f64a4";
}

export function createContact(){
  // return URL + "/contact" + SECRET;
  return "http://128.199.88.174:8080/api/contact?secret=b5ed678f64a4";
}

export function updateContact(id){
  // return URL + "/contact/" + id + SECRET;
  return "http://128.199.88.174:8080/api/contact/" + id + "?secret=b5ed678f64a4";
}

export function deleteContact(id){
  // return URL + "/contact/" + id + SECRET;
  return "http://128.199.88.174:8080/api/contact/" + id + "?secret=b5ed678f64a4";
}
