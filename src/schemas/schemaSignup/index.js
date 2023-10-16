import * as yup from "yup";
import error from "../../messages/error";
import { toast } from "react-toastify";

const schemaSignup = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required(() => toast.error(error.nameDontExists)),
  email: yup
    .string()
    .email(() => toast.error(error.invalidFormatEmail))
    .trim()
    .required(() => toast.error(error.emailDontExists)),
  password: yup
    .string()
    .trim()
    .required(() => toast.error(error.passwordDontExists)),
  confirmacaoSenha: yup
    .string()
    .trim()
    .required(() => toast.error(error.confirmPasswordDontExists))
    .oneOf([yup.ref("password")], () =>
      toast.error(error.passwordsAreNotTheSame)
    ),
});

export default schemaSignup;
