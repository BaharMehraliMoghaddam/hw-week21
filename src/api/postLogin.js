import { loginURL } from "../Constants/ValuesConstant";
import { httpService } from "../Serviecs/InstanceAxios";

export default async function postLogin(user) {
  try {
    return await httpService.post(loginURL, user);
  } catch (e) {
    console.log(e.message);
  }
}
