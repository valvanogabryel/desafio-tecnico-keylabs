import character from '../assets/sidebar/character.png';
import { Logo } from './Icons/Logo';

export function Sidebar() {
  return (
    <section className="hidden flex-col overflow-hidden justify-between bg-gradient-to-b from-gradient-dark-blue to-gradient-blue select-none h-screen w-fit md:flex">
      <header className="p-10 pb-2">
        <Logo />
      </header>
      <div>
        <img src={character} alt="Personagem de máscara com duas espadas" />
      </div>
    </section>
  );
}
