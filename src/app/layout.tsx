import type { ReactNode } from 'react';

import type { Metadata } from 'next';

import '@/app/globals.css';

export const metadata: Metadata = {
    title: 'NewPay',
    description: 'NewPay'
};

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return children
};

export default Layout;
