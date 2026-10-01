"use client";

import { useEffect, useId, useRef, useState } from "react";
import MobileMenuIcon from "@/components/Icons/MobileMenuIcon";
import Button from "@/components/UI/Button";

interface NavigationItem {
  label: string;
  href: string;
}

// The matching section IDs will be added in the later section implementations.
const navigationItems: NavigationItem[] = [
  { label: "Experience", href: "/#experience" },
  { label: "Work", href: "/#work" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Practice", href: "/#practice" },
  { label: "Contact", href: "/#contact" },
];

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    // Wait for the opening visibility transition before moving keyboard focus.
    let focusFrame = requestAnimationFrame(() => {
      focusFrame = requestAnimationFrame(() => {
        menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
      });
    });

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      event.preventDefault();
      setIsOpen(false);
      triggerRef.current?.focus();
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  const itemClassName =
    "flex min-h-11 items-center rounded-lg px-3 py-2 text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

  return (
    <>
      <Button
        btnRef={triggerRef}
        ariaLabel={isOpen ? "Close navigation" : "Open navigation"}
        ariaExpanded={isOpen}
        ariaControls={menuId}
        onClick={() => setIsOpen(!isOpen)}
        className="flex size-11 shrink-0 items-center justify-center rounded-lg text-foreground hover:bg-surface-soft"
        extraContent={<MobileMenuIcon isOpen={isOpen} />}
      />
      <nav
        ref={menuRef}
        id={menuId}
        aria-label="Main navigation"
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`absolute inset-x-0 top-full border-b border-border bg-surface px-6 py-3 transition-[opacity,translate,visibility] duration-150 ease-out motion-reduce:translate-y-0 motion-reduce:transition-none md:px-8 lg:px-12 xl:px-0 ${isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"}`}
      >
        <ul className="mx-auto max-w-6xl space-y-1">
          {navigationItems.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={closeMenu}
                className={`${itemClassName} text-foreground hover:bg-surface-soft hover:text-accent`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MobileMenu;
