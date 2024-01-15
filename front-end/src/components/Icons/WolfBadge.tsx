import wolfIcon from '../../assets/main/wolf-icon.svg';

export function WolfBadge() {
  return (
    <div className="rounded-full bg-keyslab-gray-darker w-fit">
      <img src={wolfIcon} alt="Ícone de lobo" className="brightness-[0.2]" />
    </div>
  );
}
