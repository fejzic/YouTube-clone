import Api from './Api';

export const getMe = async () => {
  try {
    const { data } = await Api.get('/users/me');
    return data;
  } catch (e) {
    throw e;
  }
};

export const login = async (loginRequest) => {
  try {
    const { data } = await Api.post('/auth/login', {
      ...loginRequest
    });
    return data;
  } catch (e) {
    throw e;
  }
};
export const signUp = async (signUpRequest) => {
  try {
   
    const { data } = await Api.post('/auth/signup', {
      ...signUpRequest
    });
    return data;
  } catch (e) {
    throw e;
  }
};

