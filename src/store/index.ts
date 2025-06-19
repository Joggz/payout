import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { createAuthSlice, AuthSlice } from './authStore.ts';
import { createDashboardSlice, DashboardSlice } from './dashboardStore.ts';
import { createTransactionSlice, TransactionSlice } from './transactionsStore.ts';
import {AccountStatementSlice, CreateAccountStatementSlice} from './accountStatementStore.ts'
type StoreState = AuthSlice & DashboardSlice & TransactionSlice & AccountStatementSlice;

export const useAppStore = create<StoreState>()(
    devtools(
        persist(
            (...args) => ({
                ...createAuthSlice(...args),
                ...createDashboardSlice(...args),
                ...createTransactionSlice(...args),
                ...CreateAccountStatementSlice(...args),
            }),
            {
                name: 'app-storage', // LocalStorage key
                partialize: (state) => ({
                    // Only persist auth state (optional, you can remove this to persist everything)
                    user: state.user,
                    token: state.token,
                    isAuthenticated: state.isAuthenticated,
                }),
            }
        )
    )
);
