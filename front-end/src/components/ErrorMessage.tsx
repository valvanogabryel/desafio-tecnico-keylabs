export function ErrorMessage({ message }: Readonly<{ message: string }>) {
  return (
    <span className="text-xs -mb-2 text-red-400 font-light">{message}</span>
  );
}
