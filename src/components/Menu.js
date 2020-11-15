/** @jsx jsx */
import { jsx } from "theme-ui";
import { forwardRef } from "react";
import Link from "next/link";
import RestaurantMenuHeader from "src/components/RestaurantMenuHeader";
import {
  MENU_MAINS,
  MENU_STARTERS,
  MENU_SIDES,
  MENU_DRINKS,
  MENU_INDO,
  MENU_COFFEE,
  SPICY_LEGEND,
} from "content/meta/menu-copy";

// = = =

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
    </div>
  );
}

function MenuLink({ item }) {
  if (item.href?.startsWith("/"))
    return (
      <Link href={item.href} passHref>
        <MenuLinkContent item={item} />
      </Link>
    );
  if (item.href?.startsWith("http"))
    return <MenuLinkContent item={item} isExternal />;
  return false;
}

const MenuLinkContent = forwardRef(({ item, isExternal }, ref) => {
  return (
    <a
      sx={{
        variant: "components.menu.link",
        // TODO re-enable when done
        // pointerEvents: item.isOut ? "none" : "initial",
      }}
      href={item.href}
      rel={isExternal ? "external" : undefined}
      aria-label={item.isOut ? `${item.name} (not available)` : undefined}
      ref={ref}
    >
      <span>
        {item.name}
        {item.isSpicy && (
          <ChiliIcon sx={{ variant: "components.menu.legendIcon" }} />
        )}
        {/* TODO enable when done */}
        {/* {item.isOut && (
          <span sx={{ variant: "components.menu.out" }}>not available</span>
        )} */}
      </span>
      {item.num && <small aria-hidden="true">{item.num}</small>}
    </a>
  );
});

function NotMenuLink({ item }) {
  return (
    <>
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
      {item.imgSrc && <img src={item.imgSrc} width={96} height={96} alt="" />}
    </>
  );
}

function MenuGroup({ title = "", data, caption, children, ...props }) {
  return (
    <article {...props}>
      <h2 sx={{ variant: "components.menu.group.title" }}>{title}</h2>
      {caption && (
        <p sx={{ variant: "components.menu.group.caption" }}>{caption}</p>
      )}
      {children || ""}
      {data && (
        <ul sx={{ variant: "components.menu.group.body" }}>
          {data.map((item) => (
            <li className="relative" key={item.name}>
              <MenuLink item={item} />
              {item.desc && <p className="desc">{item.desc}</p>}
            </li>
          ))}
        </ul>
      )}
    </article>
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
        <MenuGroup
          title="mains"
          data={MENU_MAINS}
          sx={{
            gridColumn: [null, "1/3", "unset"],
            gridRow: [null, null, "1/3"],
          }}
        />
        {/*  */}
        <MenuGroup
          title="starters"
          data={MENU_STARTERS}
          sx={{ gridRow: [null, null, "3/4"] }}
        />
        {/*  */}
        <MenuGroup title="sides" data={MENU_SIDES} />
        {/*  */}
        <MenuGroup
          title="specials 🇮🇩"
          sx={{ gridRow: [null, null, "2/4"] }}
          // caption="seasonal content etc"
        >
          <ul sx={{ variant: "components.menu.group.bodyWithImage" }}>
            {MENU_INDO.map((item) => (
              <li className="relative" key={item.name}>
                <NotMenuLink item={item} />
              </li>
            ))}
          </ul>
        </MenuGroup>
        {/*  */}
        <MenuGroup title="cocktails" sx={{ gridColumn: [null, null, "1/3"] }}>
          <ul sx={{ variant: "components.menu.group.bodyWithImage" }}>
            {MENU_DRINKS.map((item) => (
              <li className="relative" key={item.name}>
                <NotMenuLink item={item} />
              </li>
            ))}
          </ul>
        </MenuGroup>
        {/*  */}
        <MenuGroup
          title="coffee"
          sx={{
            gridColumn: [null, "1/3", "3/4"],
            gridRow: [null, null, "1/5"],
            li: { flex: "1 0" },
            img: { width: "3rem", height: "3rem" },
          }}
        >
          <ul sx={{ variant: "components.menu.group.bodyWithImage" }}>
            {MENU_COFFEE.map((item) => (
              <li className="relative" key={item.name}>
                <NotMenuLink item={item} />
              </li>
            ))}
          </ul>
        </MenuGroup>
      </div>
      <EmailLabel />
      <Footnotes />
      {/*  */}
      {closeEl || null}
    </nav>
  );
}
