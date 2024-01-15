import { Content } from '../components/Content';
import { Sidebar } from '../components/Sidebar';

export default function SignUp() {
  return (
    <div className="flex justify-center bg-keyslab-black h-screen w-screen">
      <Sidebar />

      <main className="flex items-center justify-center text-lg font-inter flex-1 md:pt-10 md:px-15">
        <Content heading={'Cadastrar uma conta'} formType={'signup'} />
      </main>
    </div>
  );
}
