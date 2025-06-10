import {getDashboardData} from "@/services/Dashboard/dashboard.ts";


export interface DashboardSlice {
    stats: {
        totalUsers: number;
        totalTransactions: number;
        loading: boolean;
        error: Error | null;
    };
    // setStats: (stats: DashboardSlice['stats']) => void;
    setDashboardData: (data: any) => void;
    fetchDashboard: (token: string) => Promise<void>;
}

export const createDashboardSlice = (set: any, get: any, store: any): DashboardSlice => ({
    stats: {
        totalUsers: 0,
        totalTransactions: 0,
        loading: false,
        error: null,
    },
    setDashboardData: (data) => set({ dashboardData: data }),

    fetchDashboard: async (token) => {
        set({loading: true, error: null});
        try {
            const data = await getDashboardData(); // Use token in auth header if needed
            set({ dashboardData: data, loading: false });
        } catch (error) {
            console.error('Failed to fetch dashboard:', error);
            set({loading: false, error})
        }
    },
    // setStats: (stats) => set({ stats }),
});
