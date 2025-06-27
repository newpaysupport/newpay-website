import { StaticImageData } from "next/image";

export type CardProps = {
    title: string;
    tag: string;
    image: string | StaticImageData;
    slug: string;
    desc: string;
    id: number;
    tagShow: string;
};
