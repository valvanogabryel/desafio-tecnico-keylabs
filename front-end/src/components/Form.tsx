import { Link } from 'react-router-dom';
import { EmailIcon } from './Icons/EmailIcon';
import { PasswordIcon } from './Icons/PasswordIcon';
import { Button } from './Button';
import { Input } from './Input';
import { useCustomFormik } from '../hook/useCustomFormik';
import { ErrorMessage } from './ErrorMessage';

export function Form({ type }: Readonly<{ type: 'signup' | 'login' }>) {
  const formik = useCustomFormik(type);

  return (
    <form
      className="flex flex-col gap-5 w-11/12 xl:w-6/12 2xl:w-4/12"
      onSubmit={formik.handleSubmit}
    >
      {formik.errors['email'] && formik.touched['email'] && (
        <ErrorMessage message={formik.errors['email']} />
      )}

      <Input
        type="email"
        placeholder="nome@exemplo.com"
        Icon={EmailIcon}
        onChange={formik.handleChange}
        value={formik.values.email}
        id="email"
      />

      {formik.errors['password'] && formik.touched['password'] && (
        <ErrorMessage message={formik.errors['password']} />
      )}

      <Input
        type="password"
        placeholder="********"
        Icon={PasswordIcon}
        hasTogglePassword
        onChange={formik.handleChange}
        value={formik.values.password}
        id="password"
      />

      {type === 'login' && (
        <div className="self-end -mt-4">
          <Link
            to="/reset-password"
            className="text-sm text-keyslab-light-gray underline transition-all hover:text-light-gray"
          >
            Esqueci minha senha
          </Link>
        </div>
      )}

      <Button>{type === 'login' ? 'Entrar na conta' : 'Registrar'}</Button>

      {type === 'signup' ? (
        <span className="text-sm text-center text-keyslab-light-gray leading-relaxed">
          Já tem uma conta?{' '}
          <Link
            to="/login"
            className="underline transition-all hover:text-light-gray"
          >
            Entre
          </Link>{' '}
        </span>
      ) : (
        <span className="text-sm text-center text-keyslab-light-gray leading-relaxed">
          Ainda não tem uma conta?{' '}
          <Link
            to="/signup"
            className="underline transition-all hover:text-light-gray"
          >
            Registre-se
          </Link>{' '}
        </span>
      )}
    </form>
  );
}
