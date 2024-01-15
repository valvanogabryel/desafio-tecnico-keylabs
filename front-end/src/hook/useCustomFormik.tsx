import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

let formik;
let userSchema;

export function useCustomFormik(type: 'signup' | 'login') {
  userSchema = z.object({
    email: z
      .string({
        required_error: 'O campo de e-mail é obrigatório',
      })
      .email('Insira um email válido'),
    password: z
      .string({
        required_error: 'A senha é obrigatória',
      })
      .min(6, 'A senha deve conter no mínimo 6 caractéres'),
  });

  formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: async (values, actions) => {
      if (type === 'login') {
        alert(
          'Requisição sendo feita para http://localhost:4003/login passando os valores' +
            JSON.stringify(values, null, 2)
        );
      } else {
        alert(
          'Requisição sendo feita para http://localhost:4003/signup passando os valores' +
            JSON.stringify(values, null, 2)
        );
      }

      actions.resetForm();
    },
    validationSchema: toFormikValidationSchema(userSchema),
    validateOnChange: false,
    validateOnBlur: false,
  });

  return formik;
}
