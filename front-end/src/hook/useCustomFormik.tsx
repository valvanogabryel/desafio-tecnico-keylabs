import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import registerUser from '../api/registerUser';
import login from '../api/login';
import { enqueueSnackbar } from 'notistack';
import { MoonLoader } from 'react-spinners';

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
    onSubmit: async (values) => {
      if (type === 'login') {
        enqueueSnackbar(
          <div className="flex items-center gap-4">
            <MoonLoader size={16} className="text-white" />
            <span>Carregando</span>
          </div>
        );
        const data = await login(values);

        if (data?.auth) {
          localStorage.setItem('auth', data.auth);
          window.location.href = '/';
        }
      } else {
        await registerUser(values);
        window.location.href = '/login';
      }
    },
    validationSchema: toFormikValidationSchema(userSchema),
    validateOnChange: false,
    validateOnBlur: false,
  });

  return formik;
}
