"use client";

import { init_classic_menu_resize } from "@/utlis/menuToggle";
import { scrollToElement } from "@/utlis/scrollToElement";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Nav2({ links }) {
    const [menuOpen, setMenuOpen] = useState([-1, -1]);

    const toggleParent1 = (i) => {
        const tempMenuOpen = [...menuOpen];
        tempMenuOpen[0] = tempMenuOpen[0] === i ? -1 : i;
        setMenuOpen(tempMenuOpen);
    };

    const pathname = usePathname();

    useEffect(() => {
        setTimeout(() => scrollToElement(), 1000);
        init_classic_menu_resize();

        window.addEventListener("resize", init_classic_menu_resize);

        return () => {
            window.removeEventListener("resize", init_classic_menu_resize);
        };
    }, []);

    return (
        <>
            {links.map((item, index) => (
                <li className={menuOpen[0] === index ? "js-opened" : ""} key={index}>
                    {/* Menu Item without Submenu */}
                    {!item.subMenu ? (
                        <Link href={item.href} className={pathname === item.href ? "active" : ""}>
                            {item.title}
                        </Link>
                    ) : (
                        <>
                            {/* Menu Item with Submenu */}
                            <a
                                href='#'
                                onClick={() => toggleParent1(index)}
                                className={`mn-has-sub ${
                                    item.subMenu.some((sub) => sub.links.some((link) => link.href.split("/")[1] === pathname.split("/")[1]))
                                        ? "active"
                                        : ""
                                }`}
                            >
                                {item.title} <i className='mi-chevron-down' />
                            </a>
                            <ul className={`mn-sub mn-has-multi ${menuOpen[0] === index ? "mobile-sub-active" : ""}`}>
                                {item.subMenu.map((subItem, subIndex) => (
                                    <li className='mn-sub-multi' key={subIndex}>
                                        <ul>
                                            {subItem.links.map((link, linkIndex) => (
                                                <li key={linkIndex}>
                                                    <Link
                                                        href={link.href}
                                                        className={pathname.split("/")[1] === link.href.split("/")[1] ? "active" : ""}
                                                    >
                                                        {link.text}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                </li>
            ))}
        </>
    );
}
