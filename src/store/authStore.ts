import {userlogin, onboardBusiness} from '../services/Authentication/authentication.ts'
import {registerBusinessAccount, userLogin} from '../services/utilites/serviceType.ts'

export interface User {
    id: string;
    email: string;
    name: string;
}

export interface AuthSlice {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    login: (payload: userLogin) => Promise<boolean>;
    registerBusiness: (payload: registerBusinessAccount) =>  Promise<boolean>;
    logout: () => void;
    setUser: (user: User, token: string) => void;
    loading: boolean;
    error: Error | null;
}
export type UserRole = 'super_admin' | 'business';
// Mock database for demo purposes
const mockUsers = [
    {
        id: '1',
        email: 'admin@example.com',
        password: 'password',
        name: 'Super Admin',
        role: 'super_admin' as UserRole
    }
];

export const createAuthSlice = (set: any, get: any, store: any): AuthSlice => ({
    user: null,
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    login: async (payload: userLogin) => {
        set({ loading: true, error: null });
        try {
            console.log("payload", payload)
            const   { email, password } = payload;
            // const data = await userlogin(payload);
            // Assuming `data` looks like { user: { id, email, name }, token: '...' }
            if (email === 'admin@example.com' && password === 'password') {
                const user = { id: '1', email, name: 'Admin User' };
                const token = 'mock-jwt-token';
                set({ user, token, isAuthenticated: true, loading: false, error: null });
                return true;
            }
            return false;
            // set({
            //     user: data.user,
            //     token: data.token,
            //     isAuthenticated: true,
            // });

            // return true;
        } catch (error) {
            console.error('Login failed:', error);
            set({ loading: false, error: error });
            return false;
        }

    },
    registerBusiness: async (payload: registerBusinessAccount) => {
        // Check if user already exists
        // const data = await onboardBusiness(payload);
        // console.log("data ====>", data)
        const existingUser = mockUsers.find(u => u.email === payload.email);
        if (existingUser) {
            return false; // User already exists
        }

        // Create new business user
        const newUser = {
            id: Date.now().toString(),
            ...payload,
            role: 'business' as UserRole,

        };

        mockUsers.push(newUser);

        const { password: _, ...userWithoutPassword } = newUser;
        const token = 'mock-jwt-token';
        set({ user: userWithoutPassword, token, isAuthenticated: true });
        return true;
    },
    logout: () => set({ user: null, token: null, isAuthenticated: false }),
    setUser: (user, token) => set({ user, token, isAuthenticated: true }),
});
