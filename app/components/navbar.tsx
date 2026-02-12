import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './navbar.module.scss';

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles['max-w-7xl']}>
                <div className={styles.flex}>
                    <div className={styles['items-center']}>
                        <Link href="/" className={styles.logo}>
                            <Image src="/aldrienLogo.svg" alt="Logo" width={32} height={32} />
                            Johnny Velasco
                        </Link>
                    </div>
                    <div className={styles['flex'] + ' ' + styles['space-x-4']}>
                        <Link href="/">
                            Home
                        </Link>
                        <Link href="/about-me">
                            About Me
                        </Link>
                        <Link href="/services">
                            Services
                        </Link>
                        <Link href="/contact">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}