'use client';

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import Heading from "../Heading";

interface ListindHeadProps {
    title: string;
    locationValue: string;
    imageSrc: string;
    id: string;
    currentUser?: SafeUser | null;
}

const ListingHead: React.FC<ListindHeadProps> = ({
    title,
    locationValue,
    imageSrc,
    id,
    currentUser,
}) => {

    const { getByValue } = useCountries();

    const location = getByValue(locationValue);

    return ( 
        <>
            <Heading 
                title={title}
                subtitle={`${location?.region}, ${location?.label}`}
            />
        </>
     );
}
 
export default ListingHead;