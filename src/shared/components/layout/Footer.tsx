export default function Footer({ dict }: { dict: any }) {
    return (
        <footer className="w-full py-16 px-8 md:px-24 grid grid-cols-1 md:grid-cols-4 gap-12 bg-surface-container-low border-t-2 border-tertiary/20">
            <div className="md:col-span-1 space-y-6">
                <div className="text-2xl font-black text-on-surface tracking-tighter uppercase">{dict.title}</div>
                <p className="font-manrope text-sm tracking-normal text-on-surface-variant">{dict.desc}</p>
                <div className="flex gap-4">
                    <a className="w-8 h-8 flex items-center justify-center border border-outline-variant hover:border-tertiary text-on-surface-variant hover:text-tertiary transition-all" href="#">
                        <span className="material-symbols-outlined text-sm">public</span>
                    </a>
                    <a className="w-8 h-8 flex items-center justify-center border border-outline-variant hover:border-tertiary text-on-surface-variant hover:text-tertiary transition-all" href="#">
                        <span className="material-symbols-outlined text-sm">link</span>
                    </a>
                </div>
            </div>
            <div>
                <h5 className="text-tertiary font-bold uppercase tracking-widest text-xs mb-8">{dict.navTitle}</h5>
                <ul className="space-y-4 font-manrope text-sm tracking-normal">
                    {dict.navLinks.map((link: string, idx: number) => {
                        const hrefs = ["/about", "/services", "/projects", "/#clients", "/contact"];
                        return (
                            <li key={idx}>
                                <a className="text-on-surface-variant hover:text-tertiary transition-colors" href={hrefs[idx]}>
                                    {link}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div>
                <h5 className="text-tertiary font-bold uppercase tracking-widest text-xs mb-8">{dict.resourcesTitle}</h5>
                <ul className="space-y-4 font-manrope text-sm tracking-normal">
                    {dict.resourcesLinks.map((link: string, idx: number) => (
                        <li key={idx}><a className="text-on-surface-variant hover:text-tertiary transition-colors" href="#">{link}</a></li>
                    ))}
                </ul>
            </div>
            <div>
                <h5 className="text-tertiary font-bold uppercase tracking-widest text-xs mb-8">{dict.newsletterTitle}</h5>
                <p className="text-xs text-on-surface-variant mb-4">{dict.newsletterDesc}</p>
                <div className="flex">
                    <input className="bg-surface-container-highest border-0 focus:ring-0 text-xs w-full py-3 px-3 outline-none transition-colors text-on-surface placeholder:text-on-surface-variant/40" placeholder={dict.newsletterPlaceholder} type="email" />
                    <button className="bg-tertiary text-on-tertiary px-4 flex items-center justify-center">
                        <span className="material-symbols-outlined text-sm">send</span>
                    </button>
                </div>
                <p className="mt-8 text-[10px] text-on-surface-variant/60 font-manrope">{dict.copyright}</p>
            </div>
        </footer>
    );
}
