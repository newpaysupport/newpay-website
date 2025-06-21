import { MDXProps } from "mdx/types";

export interface Blogs {
    title: string;
    desc: string;
    slug: string;
    content: (props: MDXProps) => Element;
    tag: string;
    id: number;
}


// interface Blogs {
//     title: string;
//     desc: string;
//     slug: string;
//     content: (props: MDXProps) => JSX.Element;
//     tag: string
// }
