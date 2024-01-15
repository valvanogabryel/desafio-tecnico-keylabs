import keySlabLogo from '../assets/sidebar/Logo.svg';
import character from '../assets/sidebar/character.png';
import wolfIcon from '../assets/main/wolf-icon.svg';
import emailIcon from '../assets/main/form-icons/tabler_mail.svg';
import passwordIcon from '../assets/main/form-icons/tabler_lock.svg';
import eyeIcon from '../assets/main/form-icons/tabler_eye.svg';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="flex justify-center bg-keyslab-black h-screen w-screen">
      {/* sidebar */}
      <section className="hidden flex-col justify-between bg-gradient-to-b from-[#051F40] to-[#06425C] select-none h-screen w-fit md:flex">
        <header className="p-10 pb-2">
          <img src={keySlabLogo} alt="Logo da KeySlab" />
        </header>
        <div className="mt-4">
          <img src={character} alt="Personagem de máscara com duas espadas" />
        </div>
      </section>

      {/* main */}
      <main className="flex items-center justify-center text-lg font-inter flex-1 md:pt-10 md:px-15">
        {/* content */}
        <section className="flex flex-col items-center gap-8 w-full">
          <img
            src={keySlabLogo}
            alt="Logo da KeySlab"
            className="md:hidden absolute top-8"
          />

          <h1 className="text-light-gray text-2.5xl font-semibold">
            Entrar na conta
          </h1>
          <div className="rounded-full bg-keyslab-gray-darker w-fit">
            <img
              src={wolfIcon}
              alt="Ícone de lobo"
              className="brightness-[0.2]"
            />
          </div>

          <form className="flex flex-col gap-5 w-11/12 xl:w-6/12 2xl:w-4/12">
            <div className="flex items-center relative text-light-gray">
              <img
                src={emailIcon}
                alt=""
                aria-hidden
                className="absolute p-4 left-0 pointer-events-none"
              />
              <input
                type="email"
                className="bg-transparent border-2 border-keyslab-gray rounded-xl p-4 pl-14 w-full transition-all focus:border-keyslab-blue focus:border-opacity-40 outline-none ring-opacity-10 focus:ring-4 ring-keyslab-blue placeholder:text-keyslab-light-gray placeholder:text-base"
                placeholder="nome@exemplo.com"
                required
              />
            </div>

            <div className="flex items-center rounded-xl relative group text-light-gray">
              <img
                src={passwordIcon}
                alt=""
                aria-hidden
                className="absolute p-4 pointer-events-none"
              />
              <input
                type="password"
                className="bg-transparent border-2 border-keyslab-gray rounded-xl w-full p-4 pl-14 transition-all focus:border-keyslab-blue focus:border-opacity-40 outline-none ring-opacity-10 focus:ring-4 ring-keyslab-blue placeholder:text-keyslab-light-gray placeholder:text-base"
                placeholder="********"
                required
              />
              <button type="button" className="absolute right-0 pr-4">
                <img
                  src={eyeIcon}
                  alt=""
                  aria-hidden
                  className="transition-all hover:scale-105"
                />
              </button>
            </div>
            <div className="self-end -mt-4">
              <Link
                to="/login"
                className="text-sm text-keyslab-light-gray underline transition-all hover:text-light-gray"
              >
                Esqueci minha senha
              </Link>
            </div>

            <button className="bg-keyslab-blue rounded-full transition-all p-4 text-keyslab-black text-sm font-semibold hover:bg-keyslab-blue-hover">
              Entrar na conta
            </button>

            <span className="text-sm text-center text-keyslab-light-gray">
              Ainda não tem conta?{' '}
              <Link
                to="/signup"
                className="underline transition-all hover:text-light-gray"
              >
                Registre-se
              </Link>
              .
            </span>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Login;
