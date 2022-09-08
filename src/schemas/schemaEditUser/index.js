import * as yup from 'yup';
import error from '../../messages/error';
import { toast } from 'react-toastify';

const schemaEditUser = yup.object().shape({
    editUserName: yup.string()
        .trim()
        .required(() => toast.error(error.nameDontExists)),
    editUserEmail: yup.string()
        .email(() => toast.error(error.invalidFormatEmail))
        .trim()
        .required(() => toast.error(error.emailDontExists)),
    editUserPassword: yup.string()
        .trim()
        .required(() => toast.error(error.passwordDontExists)),
    editUserPasswordConfirm: yup.string()
        .trim()
        .required(() => toast.error(error.confirmPasswordDontExists))
});

export default schemaEditUser;