import { Link } from 'react-router-dom';
import { EmailIcon } from './Icons/EmailIcon';
import { PasswordIcon } from './Icons/PasswordIcon';
import { EyeIcon } from './Icons/EyeIcon';
import { Button } from './Button';
import { Input } from './Input';

export function Form({ type }: Readonly<{ type: 'signup' | 'login' }>) {
  return (
    <form className="flex flex-col gap-5 w-11/12 xl:w-6/12 2xl:w-4/12">
      <div className="flex items-center relative text-light-gray">
        <EmailIcon className="absolute p-4 left-0 pointer-events-none" />
        <Input type="email" placeholder="nome@exemplo.com" />
      </div>

      <div className="flex items-center rounded-xl relative group text-light-gray">
        <PasswordIcon className="absolute p-4 pointer-events-none" />
        <Input type="password" placeholder="********" />

        <button type="button" className="absolute right-0 pr-4">
          <EyeIcon className="transition-all hover:scale-105" />
        </button>
      </div>
      {type === 'login' && (
        <div className="self-end -mt-4">
          <Link
            to="/login"
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
