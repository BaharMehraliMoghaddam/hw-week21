import { signupURL } from "../Constants/ValuesConstant";
import { httpService } from "../Serviecs/InstanceAxios";

export default async function postSingup(user) {
  try {
    return await httpService.post(signupURL, user);
  } catch (e) {
    console.log(e.message);
  }
}
