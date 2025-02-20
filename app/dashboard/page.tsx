import LogoutButton from "@/components/LogoutButton";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <p className="text-gray-700">Welcome to your dashboard!</p>
        </div>
        <LogoutButton />
      </div>
    </ProtectedRoute>
  );
}
