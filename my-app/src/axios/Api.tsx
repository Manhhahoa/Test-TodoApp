import instance from "./Axios";
function getCookie(cname: string) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function addAuthorization(option: any) {
  const token = getCookie('user')
  option.headers.Authorization = 'Bearer ' + token
  return option
}
export const getApi = async function (url: string, option = { headers: {} }) {

  option = addAuthorization(option);
  return instance.get(url, option)
}
export const postApi = async function (url: string, data: object, option = { headers: {} }) {
  option = addAuthorization(option);
  return instance.post(url, data, option)
}
export const patchApi = async function (url: string, data: object, option = { headers: {} }) {
  option = addAuthorization(option);
  return instance.patch(url, data, option)
}
export const deleteApi = async function (url: string, option = { headers: {} }) {
  option = addAuthorization(option);
  return instance.delete(url, option)
}

