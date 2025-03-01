"use client";

import { User } from "@/types";
import { createBrowserClient } from "@supabase/ssr";
import React, { createContext, use, useContext, useEffect, useState } from "react";
// import { createClient } from '@supabase/supabase-js'


interface IAppContext {
    user: User | undefined;
    supabase: any;
}

const AppContext = createContext<IAppContext | undefined>(undefined);

export function AppWrapper({ children }: {
    children: React.ReactNode
}) {
    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
    const [user, setUser] = useState<User | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(false);
    
    useEffect(() => {
        const fetchCurrentUser = () => {
            try {
                setLoading(true);

                // supabase fetch current user
            } catch (e) {
                // Handle error
                console.log(e);
                // if Sentry is available, send error
            } finally {
                setLoading(false);
            }
                
        }
        
        fetchCurrentUser();
    }, []);

    if (loading) return <div>Loading...</div>;
    
    return <AppContext.Provider value={{
        user,
        supabase
    }}>
        {children}
    </AppContext.Provider>
}

export function useAppContext() {
    return useContext(AppContext);
};