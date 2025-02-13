import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState } from "react";

export const useNavigation = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [active, setActive] = useState<string>(''); // Tab 1, Tab 2, or Tab 3
    const router = useRouter();
    const params = useParams();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    return {
        open,
        setOpen,
        active,
        setActive,
        pathname,
        params,
        router,
        searchParams,
    }
}