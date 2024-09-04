import { refreshURL } from "../Constants/ValuesConstant";
import { httpService } from "../Serviecs/InstanceAxios";



export default async function RefreshToken(refresh) {
  try{
      return await httpService.post(refreshURL,{refresh})
  }catch(e){
    console.log(e.message)
  }
}
