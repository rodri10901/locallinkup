import { Listing, User } from '@prisma/client';


export type SafeListing = Omit<
    Listing,
    "createdAt"
> & {
    createdAt: string;
}

export type SafeUser = Omit<
    User,
    "createdAt" | "updatedAt" | "emailVerfied"
> & {
    createdAt: string;
    updateAt: string;
    emailVerified: string | null;
};