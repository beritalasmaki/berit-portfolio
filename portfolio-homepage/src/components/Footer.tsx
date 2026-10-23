import Logo from "./Logo";
import { site } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    // Compact: a 40px mark (`.site-footer .logo-mark`) and even padding.
    // It used to be ~210px tall, mostly a `pb-24` reserve for the floating
    // BackToTop button (fixed `bottom-6 right-6`, a 48px circle below `sm`,
    // a ~138×52 pill from `sm`). The button's room is reserved where it
    // actually sits:
    // - from `sm`, the row is a single line, so right padding (`sm:pr-48`,
    //   192px) keeps the meta text clear of the pill;
    // - below `sm`, the text wraps under the logo, and `pr-[84px]` keeps it
    //   out of the circle's column (24px offset plus 48px, with 12px spare).
    //   That's tight at 320px: the logo lockup is ~211px of the 212px left.
    // Keep these in step with BackToTop's size and offsets.
    //
    // Frosted like the header (`.glass-footer`), but a warmer, deeper tint,
    // so the page ends on its own band. The meta line is `text-body`, not
    // `footer-meta`, which fell under AA on that tint.
    <footer className="site-footer glass-footer flex items-center justify-between gap-x-6 gap-y-3 flex-wrap px-gutter py-6 pr-[84px] sm:pr-48">
      <Logo />
      <p className="m-0 text-[13px] text-body sm:whitespace-nowrap">
        Designed & built by Berit. Powered by Claude and Vercel. © {year}
      </p>
    </footer>
  );
}
