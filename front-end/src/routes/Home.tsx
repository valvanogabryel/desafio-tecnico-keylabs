import { useEffect, useState } from 'react';
import getUsers from '../api/getUsers';
import IUser from '../interface/IUser';

export default function Home() {
  const isAuthenticated = localStorage.getItem('auth');

  // prevent unauthenticated user to see the protected page
  if (!isAuthenticated) window.location.href = '/login';

  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getUsers();

      setUsers(response);
    };

    fetchUsers();
  }, []);

  return (
    <div className="flex justify-center items-center bg-keyslab-black h-screen w-screen text-light-gray">
      <main className="flex flex-col items-center justify-center text-lg font-inter flex-1 md:pt-10 md:px-15">
        <h1 className="my-4">Lista de emails cadastrados:</h1>
        <ul className="flex flex-col space-y-2 text-base text-center leading-relaxed bg-keyslab-gray p-4 rounded-xl shadow-lg border border-keyslab-light-gray animate-fade-up">
          {users.map((user) => (
            <li key={user.id}>{user.email}</li>
          ))}
          <button
            onClick={() => {
              localStorage.removeItem('auth');
              window.location.href = '/login';
            }}
            className="bg-keyslab-blue px-4 py-1 rounded transition-all shadow self-end hover:bg-keyslab-blue-hover"
          >
            Sair
          </button>
        </ul>
      </main>
    </div>
  );
}
