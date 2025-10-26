"use client";
import { useEffect, useRef } from "react";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function RegisterUserClient() {
    const { user, isSignedIn, isLoaded } = useUser();
    const syncUser = useMutation(api.users.syncUser);
    const hasSynced = useRef(false);

    useEffect(() => {
        if (!isLoaded || !isSignedIn || !user) return;
        if (hasSynced.current) return;

        hasSynced.current = true;
        syncUser({
        userId: user.id,
        email: user.primaryEmailAddress?.emailAddress || "",
        name: user.fullName || "Anonymous",
        }).catch((err) => console.error("❌ syncUser failed:", err));
    }, [isLoaded, isSignedIn, user, syncUser]);

    return null;
}
