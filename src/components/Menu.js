/** @jsx jsx */
import { jsx } from "theme-ui";
import { forwardRef } from "react";
import Link from "next/link";
import RestaurantMenuHeader from "src/components/RestaurantMenuHeader";
import {
  MENU_MAINS,
  MENU_STARTERS,
  MENU_SIDES,
  MENU_INDO,
  MENU_COFFEE,
  SPICY_LEGEND,
  UPDATE_TEXT,
} from "content/meta/menu-copy";

// = = =

const COFFEE_BASE_SX = {
  width: 36,
  height: 36,
  borderRadius: "50%",
  mt: 1,
  mx: "auto",
  boxShadow: "inset 0 0 8px rgba(0,0,0,0.33)",
};

// = = =

function ChiliIcon(props) {
  return (
    <span role="img" aria-label="hot pepper" {...props}>
      🌶
    </span>
  );
}

function EmailLabel() {
  return (
    <p sx={{ variant: "components.menu.contact" }}>
      open 24 hrs
      <br />
      <strong>me@eka.fyi</strong>
    </p>
  );
}

function Footnotes() {
  return (
    <div sx={{ variant: "components.menu.footnotes" }}>
      <dt>
        <ChiliIcon />
      </dt>
      <dd>{SPICY_LEGEND}</dd>
      <p sx={{ mt: 4 }}>{UPDATE_TEXT}</p>
    </div>
  );
}

function CoffeeList() {
  return (
    <ul sx={{ variant: "components.menu.group.coffee" }}>
      <li>
        <FoodLink item={MENU_COFFEE[0]} />
        <div sx={{ ...COFFEE_BASE_SX, background: "#503527" }} />
      </li>
      <li>
        <FoodLink item={MENU_COFFEE[1]} />
        <div sx={{ ...COFFEE_BASE_SX, background: "#cea673" }} />
      </li>
      <li>
        <FoodLink item={MENU_COFFEE[2]} />
        <div sx={{ ...COFFEE_BASE_SX, background: "#795548" }} />
      </li>
      <li>
        <FoodLink item={MENU_COFFEE[3]} />
        <div
          sx={{
            ...COFFEE_BASE_SX,
            backgroundImage:
              "linear-gradient(180deg, hsl(33.06,56.32%,82.94%) 21%, hsla(24.66,83.91%,17.06%,0.69) 43%), radial-gradient(circle at 24% 110%, hsl(35.79,78.08%,14.31%) 19%, hsla(25.86,70.73%,16.08%,0.4) 52%)",
          }}
        />
      </li>
      <li>
        <FoodLink item={MENU_COFFEE[4]} />
        <div sx={{ ...COFFEE_BASE_SX, background: "#d09221" }} />
      </li>
    </ul>
  );
}

const SiteLinkContent = forwardRef(({ item, isExternal }, ref) => {
  return (
    <a
      sx={{
        variant: "components.menu.link",
        pointerEvents: item.isNa ? "none" : "initial",
      }}
      href={item.href}
      rel={isExternal ? "external" : undefined}
      aria-label={item.isNa ? `${item.name} (not available)` : undefined}
      ref={ref}
    >
      <span>
        {item.name}
        {item.isSpicy && (
          <ChiliIcon sx={{ variant: "components.menu.legendIcon" }} />
        )}
        {item.isNa && (
          <span sx={{ variant: "components.menu.out" }} className="na">
            not available
          </span>
        )}
      </span>
      {item.num && (
        <small className="num" aria-hidden="true">
          {item.num}
        </small>
      )}
    </a>
  );
});

function MenuGroup({ title = "", caption, children, ...props }) {
  return (
    <article {...props}>
      <h2 sx={{ variant: "components.menu.group.title" }}>{title}</h2>
      {children || ""}
      {caption && <p sx={{ variant: "components.menu.caption" }}>{caption}</p>}
    </article>
  );
}

function SiteMenuList({ data, ...props }) {
  if (data)
    return (
      <ul sx={{ variant: "components.menu.group.mainNav" }} {...props}>
        {data.map((item) => (
          <li key={item.name}>
            <SiteLink item={item} />
            {item.desc && <p className="desc">{item.desc}</p>}
          </li>
        ))}
      </ul>
    );
  return false;
}

function SiteLink({ item }) {
  if (item.href?.startsWith("/"))
    return (
      <Link href={item.href} passHref>
        <SiteLinkContent item={item} />
      </Link>
    );
  if (item.href?.startsWith("http"))
    return <SiteLinkContent item={item} isExternal />;
  return false;
}

function FoodMenuList({ data, ...props }) {
  if (data)
    return (
      <ul sx={{ variant: "components.menu.group.food" }} {...props}>
        {data.map((item) => (
          <li key={item.name}>
            <FoodLink item={item} />
            {item.imgSrc && (
              <img src={item.imgSrc} width={96} height={96} alt="" />
            )}
            {item.desc && <p className="desc">{item.desc}</p>}
          </li>
        ))}
      </ul>
    );
  return false;
}

function FoodLink({ item }) {
  return (
    <a
      sx={{ variant: "components.menu.link" }}
      href={item.href}
      rel="external nofollow noreferrer noopener"
      target="_blank"
    >
      {item.name}
      {item.isSpicy && (
        <ChiliIcon sx={{ variant: "components.menu.legendIcon" }} />
      )}
    </a>
  );
}

export default function Menu({ closeEl, ...props }) {
  return (
    <nav
      aria-label="Site navigation"
      aria-live="assertive"
      sx={{ variant: "components.menu.outerWrapper" }}
      {...props}
    >
      <RestaurantMenuHeader />

      <div sx={{ variant: "components.menu.innerWrapper" }}>
        <MenuGroup title="mains" sx={{ gridRow: [null, "1/3"] }}>
          <SiteMenuList data={MENU_MAINS} />
        </MenuGroup>

        <MenuGroup title="starters" sx={{ gridRow: [null, null, null, "3/4"] }}>
          <SiteMenuList data={MENU_STARTERS} />
        </MenuGroup>

        <MenuGroup title="sides">
          <SiteMenuList data={MENU_SIDES} />
        </MenuGroup>

        <MenuGroup
          title="indonesian delights 🇮🇩"
          sx={{ gridColumn: [null, "1/-1", null, "unset"], gridRow: [null, null, null, "2/4"] }} // prettier-ignore
        >
          <FoodMenuList data={MENU_INDO} />
        </MenuGroup>

        <MenuGroup
          title="coffee"
          sx={{ gridColumn: [null, "1/-1", null, "3/4"], gridRow: [null, null, null, "1/4"] }} // prettier-ignore
        >
          <CoffeeList />
        </MenuGroup>
      </div>

      <EmailLabel />
      <Footnotes />
      {closeEl || null}
    </nav>
  );
}
