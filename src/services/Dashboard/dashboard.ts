import {authorized} from "@/services/axios.ts";
import {dashboardDetails} from "@/services/Dashboard/dashboard-routes.ts";


export const getDashboardData = async () => {
    try {
        const response = await authorized.get(dashboardDetails);
        console.log('success', response);
        return response.data;

    } catch (error: any) {
        console.error(' error:', error);
        throw error;
    }
};
