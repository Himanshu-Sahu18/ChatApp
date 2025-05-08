import { useAuth } from '../contexts/AuthContext';
import UserList from './UserList';
import ChatWindow from './ChatWindow';

export default function Chat() {
  const { user, logout } = useAuth();

  return (
    <div className="h-screen flex flex-col">
      {/* Main Header */}
      <header className="bg-primary text-white px-6 py-4 flex justify-between items-center shadow-md">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-xl font-semibold">
              {user?.username[0]?.toUpperCase()}
            </span>
          </div>
          <h1 className="text-2xl font-bold">Chat App</h1>
        </div>
        <button
          onClick={logout}
          className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white/50"
        >
          Sign out
        </button>
      </header>

      {/* Main content */}
      <div className="flex-1 flex overflow-hidden bg-gray-50">
        {/* Sidebar */}
        <div className="w-80 flex-shrink-0 border-r border-gray-200">
          <UserList />
        </div>

        {/* Chat window */}
        <div className="flex-1">
          <ChatWindow />
        </div>
      </div>
    </div>
  );
} 