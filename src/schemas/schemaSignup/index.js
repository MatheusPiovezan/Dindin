import * as yup from 'yup';
import error from '../../messages/error';
import { toast } from 'react-toastify';

const schemaSignup = yup.object().shape({
    nome: yup.string()
        .trim()
        .required(() => toast.error(error.nameDontExists)),
    email: yup.string()
        .email(() => toast.error(error.invalidFormatEmail))
        .trim()
        .required(() => toast.error(error.emailDontExists)),
    senha: yup.string()
        .trim()
        .required(() => toast.error(error.passwordDontExists)),
    confirmacaoSenha: yup.string()
        .trim()
        .required(() => toast.error(error.confirmPasswordDontExists))
});

export default schemaSignup;