 "use client";
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
const links = [["About","about"],["Skills","skills"],["Projects","projects"],["Journey","experience"],["Contact","contact"]];
export function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="nav-wrap"><nav className="navbar"><a href="#home" className="brand"><span className="brand-mark"><Sparkles size={17}/></span> Akash Kumar</a><button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button><div className={`nav-links ${open ? "nav-open" : ""}`}>{links.map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let&apos;s talk ↗</a></div></nav></header>;
}
