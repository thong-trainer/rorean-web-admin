// =======================================================================================
// for test only
// =======================================================================================
export function getContacts(index, limit){
  return "http://128.199.88.174:8080/api/contact/" + index + "/" + limit+ "?secret=b5ed678f64a4";
}

export function createContact(){
  return "http://128.199.88.174:8080/api/contact?secret=b5ed678f64a4";
}

export function updateContact(id){
  return "http://128.199.88.174:8080/api/contact/" + id + "?secret=b5ed678f64a4";
}

export function deleteContact(id){
  return "http://128.199.88.174:8080/api/contact/" + id + "?secret=b5ed678f64a4";
}

export function getUsers()
{
  return "http://128.199.88.174:3333/api/v1/user/0/10?access_token=123456789";
}
// =======================================================================================
// end test
// =======================================================================================


const AppConstants = require("../constants/AppConstants");
const DOMAIN = "http://128.199.88.174:3333";
const PATH = "/api/v1";
const URL = DOMAIN + PATH;
const ACCESS_TOKEN = "?access_token=123456789";


export function getDomain(){
  return DOMAIN;
}

export function authLogin(){
  return URL + "/auth/login" + ACCESS_TOKEN;
}

export function getPermission(userId){
  return URL + "/permission/user/" + userId + ACCESS_TOKEN;
}

export function getSchool(){
  const schoolId = localStorage.getItem(AppConstants.SCHOOL_ID_KEY);
  return URL + "/school/" + schoolId + ACCESS_TOKEN;
}

// ROOM MODULE
export function getRooms(){
  const schoolId = localStorage.getItem(AppConstants.SCHOOL_ID_KEY);
  return URL + "/room/" + schoolId + ACCESS_TOKEN;
}

export function createRoom(){
  return URL + "/room" + ACCESS_TOKEN;
}

export function updateRoom(id){
  return URL + "/room/" + id + ACCESS_TOKEN;
}

export function removeRoom(id){
  return URL + "/room/desactive/" + id + ACCESS_TOKEN;
}

// LEVEL MODULE
export function getLevels(){
  const schoolId = localStorage.getItem(AppConstants.SCHOOL_ID_KEY);
  return URL + "/level/" + schoolId + ACCESS_TOKEN;
}

export function createLevel(){
  return URL + "/level" + ACCESS_TOKEN;
}

export function updateLevel(id){
  return URL + "/level/" + id + ACCESS_TOKEN;
}

export function removeLevel(id){
  return URL + "/level/desactive/" + id + ACCESS_TOKEN;
}
// DEPARTMENT MODULE
export function getDepartments(){
  const schoolId = localStorage.getItem(AppConstants.SCHOOL_ID_KEY);
  return URL + "/department/" + schoolId + ACCESS_TOKEN;
}

export function createDepartment(){
  return URL + "/department" + ACCESS_TOKEN;
}

export function updateDeparment(id){
  return URL + "/department/" + id + ACCESS_TOKEN;
}

export function removeDepartment(id){
  return URL + "/department/desactive/" + id + ACCESS_TOKEN;
}
