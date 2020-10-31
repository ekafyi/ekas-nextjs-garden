/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";
// import { getLhByFontIndex } from "src/utils/calc-type";
import { CircleText } from "src/components/graphics";

/**
 * TODO
 *
 * - link
 * - legends (spicy & unrelated)
 * - out (belum ada)
 *
 * tentative ideas:
 * https://id.wikipedia.org/wiki/Daftar_masakan_Indonesia
 * https://www.thecocktaildb.com/api.php
 */

const MENU_MAINS = [
  {
    name: "posts",
    href: "/",
    desc: "In officia deserunt deserunt reprehenderit.",
  },
  {
    name: "notes",
    href: "/",
    desc: "Pariatur in ad non sint ad esse in sunt officia ullamco.",
    isSpicy: true,
  },
  {
    name: "talks",
    href: "/",
    desc:
      "Exercitation adipisicing et qui ipsum sunt dolor qui cupidatat deserunt.",
  },
];
const MENU_STARTERS = [
  {
    name: "eka who?",
    href: "/",
    desc: "Sit sint et ex do magna elit enim nostrud.",
  },
  {
    name: "i made these",
    href: "/",
    desc: "Laboris occaecat adipisicing nisi enim excepteur ea incididunt qui.",
  },
];
const MENU_SIDES = [
  { name: "microblog", isSpicy: true },
  { name: "bookshelf" },
  { name: "playlists" },
];
const MENU_DRINKS = [
  { name: "margarita", desc: "", href: "https://blah.com" },
  { name: "cranberry punch", desc: "", href: "https://blah.com" },
];
const MENU_INDO = [
  {
    name: "soto ayam",
    desc: "Dolor reprehenderit enim dolor consectetur reprehenderit irure.",
    href: "https://id.wikipedia.org/wiki/Soto_ayam",
  },
  {
    name: "tahu gejrot",
    desc: "Cillum anim qui commodo minim ut ipsum.",
    href: "https://id.wikipedia.org/wiki/Tahu_gejrot",
  },
];

function MenuGroup({ title = "", data = [], isJoke = false, ...props }) {
  return (
    <div {...props}>
      <h2 sx={{ variant: "components.nav.menuGroup.title" }}>{title}</h2>
      <ul sx={{ variant: "components.nav.menuGroup.body" }}>
        {data.map((item) => (
          <li>
            <Link href="/notes" passHref>
              <a>{item.name}</a>
            </Link>
            {item.desc && <p className="link__desc">{item.desc}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

const SMALLMENU_SX = { a: { fontSize: 2 } };

const FOO_SX = {
  fontSize: [16, 20],
  // lineHeight: [getLhByFontIndex(18)],
  fontWeight: 800,
  color: "transparent",
  WebkitTextStroke: "2px #263238",
  textShadow: "0.05em 0.075em hsla(186, 100%, 55%, 33%)",
  display: "block",
  textAlign: "center",
  mt: -4,
  ".dot": { color: "menuFg" },
};
const BAR_SX = {
  fontSize: 0,
  textAlign: "center",
  backgroundColor: ["menuBg", "transparent"],
  mt: [1, 0],
};

export default function Menu({ ...props }) {
  return (
    <nav
      aria-label="Site navigation"
      aria-live="assertive"
      sx={{ variant: "components.nav.menu" }}
      {...props}
    >
      <div sx={{ height: "2rem", mt: -6 }}>
        <CircleText
          size={120}
          text="menu"
          sx={{
            mx: "auto",
            letterSpacing: "0.25em",
            transform: "rotate(61deg)",
          }}
        />
      </div>
      <strong sx={FOO_SX}>
        eka<span className="dot">.</span>fyi
      </strong>
      <em sx={BAR_SX}>
        Eka’s personal site &amp; digital garden
        <br />
        est. 2020
      </em>
      <div sx={{ variant: "components.nav.menuInner" }}>
        <MenuGroup title="mains" data={MENU_MAINS} />
        <MenuGroup title="starters" data={MENU_STARTERS} />
        <MenuGroup title="sides" data={MENU_SIDES} sx={SMALLMENU_SX} />
        <MenuGroup title="indonesian" data={MENU_INDO} sx={SMALLMENU_SX} />
        <MenuGroup title="drinks" data={MENU_DRINKS} sx={SMALLMENU_SX} />
      </div>
    </nav>
  );
}
