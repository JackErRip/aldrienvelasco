'use client';

import React, { useState } from 'react';
// import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './navbar.module.scss';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about-me', label: 'About Me' },
        { href: '/ict-in-gamedev', label: 'ICT in Game Dev' },
        { href: '/advocacy', label: 'Advocacy' },
        { href: '/social-media', label: 'Social Media' },
        { href: '/digital-citizenship', label: 'Digital Citizenship' },
        { href: '/ph-vs-world', label: 'PH vs First-World' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <div className={styles.navContent}>
                    {/* Logo */}
                    <div className={styles.logoSection}>
                        <Link href="/" className={styles.logo}>
                            <div className={styles.logoIcon}>
                                <span className={styles.logoText}>BU</span>
                            </div>
                            <div className={styles.brandInfo}>
                                <span className={styles.brandName}>ByUnitWare</span>
                                <span className={styles.brandTagline}>Game Studio</span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className={styles.desktopNav}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className={styles.mobileMenuButton}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <div className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ''}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`${styles.mobileNavLink} ${pathname === link.href ? styles.active : ''}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}