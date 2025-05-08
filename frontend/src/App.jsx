import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ChatProvider } from './contexts/ChatContext';
import Login from './components/Login';
import Chat from './components/Chat';

function AppContent() {
  const { user } = useAuth();

  return (
    <div className="h-screen">
      {user ? (
        <ChatProvider>
          <Chat />
        </ChatProvider>
      ) : (
        <Login />
      )}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App; 