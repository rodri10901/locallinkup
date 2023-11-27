'use client';

import Container from "../Container";
import { TbMilkshake } from "react-icons/tb";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaStore } from "react-icons/fa";
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { MdOutlineVilla } from 'react-icons/md';
import { FaIceCream } from "react-icons/fa";
import { GiIsland } from 'react-icons/gi';
import CategoryBox from "../CategoryBox";
import { FaPizzaSlice } from "react-icons/fa";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'This property is close to the beach!'
    },
    {
        label: 'Apartment',
        icon: MdOutlineVilla,
        description: 'This property is for apratment!'
    },
     {
        label: 'Milktea',
        icon: TbMilkshake ,
        description: 'This property is a miltea shop!'
     },
     {
        label: 'Pizza',
        icon: FaPizzaSlice ,
        description: 'This property is a pizza store!'
     },
     {
        label: 'Pools',
        icon: TbPool,
        description: 'This property has a pool!'
     },
     {
        label: 'Resort',
        icon: GiIsland,
        description: 'This property is for resort!'
     },
     {
        label: 'Ice Cream',
        icon: FaIceCream  ,
        description: 'This property has an ice cream!'
     },
     {
        label: 'Store ',
        icon: FaStore ,
        description: 'This property is a store!'
     },
     {
        label: 'Food',
        icon: IoFastFoodOutline ,
        description: 'This property has food!'
     }
     

]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname == '/';

    if (!isMainPage) {
        return null;
    }

    return ( 
        <Container>
            <div
                className="
                    pt-4
                    flex
                    flex-row
                    items-center
                    justify-between
                    overflow-x-auto
                "
            >
                {categories.map((item) =>(
                    <CategoryBox 
                        key={item.label}
                        label={item.label}
                        selected = { category == item.label}
                        icon={item.icon}
                    />
                ))}
            </div>
        </Container>
     );
}
 
export default Categories;