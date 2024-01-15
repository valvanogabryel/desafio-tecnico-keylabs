import { Form } from './Form';
import { Logo } from './Icons/Logo';
import { WolfBadge } from './Icons/WolfBadge';

interface ContentProps {
  heading: string;
  formType: 'login' | 'signup';
}

export function Content({ heading, formType }: Readonly<ContentProps>) {
  return (
    <section className="flex flex-col items-center gap-8 w-full animate-fade-up select-none">
      <Logo className="md:hidden" />

      <h1 className="text-light-gray text-2.5xl font-semibold">{heading}</h1>
      <WolfBadge />

      <Form type={formType} />
    </section>
  );
}
