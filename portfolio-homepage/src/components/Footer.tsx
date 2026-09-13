import Logo from "./Logo";
import { site } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    // `pb-24` (96px), not the visually-sufficient `pb-10`: the floating
    // BackToTop button sits 24px off the bottom of the viewport and is up
    // to 52px tall, so it occupies the bottom ~76px of the screen. At the
    // very end of the page that band lands on the footer, and with the old
    // 40px padding the button covered the copyright line outright
    // (measured at 360/390/414px). 96px clears the button with ~20px to
    // spare. Keep the two in step if either the button's size or its
    // `bottom-6` offset changes.
    <footer className="flex items-center justify-between gap-6 flex-wrap px-gutter pt-8 pb-24">
      <Logo />
      <p className="m-0 text-[13px] text-footer-meta whitespace-nowrap">
        © {year} {site.name}. All rights reserved.
      </p>
    </footer>
  );
}
