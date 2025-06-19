import {authorized} from '@/services/axios.ts'

export const REACT_APP_API_URL = import.meta.env.VITE_API_BASE_URL;


export const downloadReport = async ({ format = 'pdf', filters = {}, endpoint }) : Promise<boolean> => {
    let success: boolean = false;
    try {
        const response = await authorized.post(endpoint, filters, {
            responseType: 'blob', // Important for binary files
            headers: {
                Accept: format === 'pdf' ? 'application/pdf' : 'text/csv',
                // Authorization: `Bearer ${yourTokenHere}` if needed
            },
        });

        const blob = new Blob([response.data], {
            type: format === 'pdf' ? 'application/pdf' : 'text/csv',
        });

        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;

        const timestamp = new Date().toISOString().split('T')[0];
        const filename = `report_${timestamp}.${format}`;

        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();

        // Clean up
        link.parentNode.removeChild(link);
        window.URL.revokeObjectURL(url);
        success = true;

    } catch (error) {
        console.error('Error downloading report:', error);
       success = false;
    }
    console.log("success", success);

    return success
};
