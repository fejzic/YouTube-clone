import { makeAutoObservable } from 'mobx';
import { getAccessToken, setAccessToken, removeAccessToken } from '../utils/token';
import { getMe, login, signUp } from '../api/UserApi';

class UserStore {
  rootStore = null;
  user = null;
  token = getAccessToken();
  

  constructor(rootStore) {
    makeAutoObservable(this, { rootStore: false }, { autoBind: true });
    this.rootStore = rootStore;
  }

  setUser(user, token) {
    this.user = user;
    this.token = token ? token : null;

  }

  get isLoggedIn() {
    return !!this.token;
  }

  async loadMe() {
    try {
      const user = await getMe();
      this.setUser(user);
    } catch (e) {
      console.log(e);
    }
  }

  async login(values) {
    try {
      const data = await login(values);
      setAccessToken(data.token);
      const user = await getMe();
      this.setUser(user, data.token);
      this.error = false;
      return {success: true};
    } catch (e) {
      this.error = e?.error ? e?.error : e?.errors[0]?.password;
      return {success: false, error: this.error};
    }
  }

 async signup (signUpRequest){
    try{
      
      const data = await signUp({username: signUpRequest.username, name: signUpRequest.name, surname: signUpRequest.surname, password: signUpRequest.password});
      this.setUser(data);
      return { success : true};

    }catch(e){
      return{ success: false, error : e?.error?.errors[0]?.message }
    }
  }

 

  logout() {
    this.setUser(null);
    removeAccessToken();  
  }
}

export default UserStore;
