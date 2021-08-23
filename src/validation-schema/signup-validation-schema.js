import * as Yup from "yup";
export const validationSchema = Yup.object().shape({
  username: Yup.string().required("username is requiered"),
  name: Yup.string().required("name is requiered"),
  password: Yup.string().required("password is requiered").min(8,'Please enter min 8 '),
  surname: Yup.string().required("suername is requiered"),
});