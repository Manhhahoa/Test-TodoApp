import * as yup from "yup";
export type UserForm = {
    username: string,
    password: string,

}
export const SchemaUser = yup.object().shape({
    username: yup.string()
        .required('userName is required'),
    password: yup.string()
        .required('password is required')
        .min(4, 'password must be at least 4 characters')
        .max(8, 'password must be at least 8 characters'),
});