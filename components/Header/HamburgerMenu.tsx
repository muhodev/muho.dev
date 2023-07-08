"use client";
import "./style.css";

export default function HamburgerMenu({
  isOpen,
  onToggle,
}: {
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      className={
        "grid lg:hidden place-content-center w-22 h-10" +
        (!!isOpen ? " hamburger-toggle" : "")
      }
      onClick={() => onToggle()}
    >
      <span className="hamburger-menu-item"></span>
    </button>
  );
}
