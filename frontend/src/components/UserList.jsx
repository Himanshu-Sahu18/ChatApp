import { useChat } from '../contexts/ChatContext';

export default function UserList() {
  const { users, selectedUser, setSelectedUser, onlineUsers } = useChat();

  return (
    <div className="h-full flex flex-col bg-white">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Conversations</h2>
        <p className="text-sm text-gray-500 mt-1">{users.length} users available</p>
      </div>
      <div className="flex-1 overflow-y-auto">
        {users.map((user) => (
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`w-full px-4 py-3 flex items-center space-x-3 hover:bg-gray-50 transition-colors ${
              selectedUser?._id === user._id ? 'bg-gray-50' : ''
            }`}
          >
            <div className="relative flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary text-lg font-semibold">
                  {user.username[0].toUpperCase()}
                </span>
              </div>
              <div
                className={`absolute bottom-0 right-0 w-3.5 h-3.5 border-2 border-white rounded-full ${
                  onlineUsers.has(user._id) ? 'bg-green-500' : 'bg-gray-400'
                }`}
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {user.username}
                </p>
                <span className="text-xs text-gray-500">
                  {onlineUsers.has(user._id) ? 'Online' : 'Offline'}
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
} 