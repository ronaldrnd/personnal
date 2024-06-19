import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { ReactNode } from 'react';

const ProtectedRoute = ({ redirectPath = '/', children }: { redirectPath?: string, children: ReactNode }) => {
    const { isAuthenticated } = useAuthStore();

    if (isAuthenticated) {
        return <Navigate to={redirectPath} replace />;
    }

    return children
};

export default ProtectedRoute;
