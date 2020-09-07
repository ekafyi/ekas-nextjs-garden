/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@reach/disclosure";

const DUMMY_LIST = `<ol>
    <li>
      <a href="#backgroundproblem">Background/Problem</a>
    </li>
    <li>
      <a href="#solution">Solution</a>
    </li>
    <li>
      <ol>
        <li>
          <a href="#something">Nested subheading</a>
        </li>
        <li>
          <ol>
            <li>
              <a href="#something">Further nested subheading</a>
            </li>
          </ol>
        </li>
      </ol>
    </li>
    <li>
      <a href="#references">Long title that wraps here</a>
    </li>
    <li>
      <a href="#references">References</a>
    </li>
  </ol>`;

export default function TOC(props) {
  const [isTocOpen, setTocOpen] = useState(true);
  return (
    <Disclosure open={isTocOpen} onChange={() => setTocOpen(!isTocOpen)}>
      <div sx={{ variant: "components.toc" }} {...props}>
        <DisclosureButton
          className={isTocOpen ? "is-open" : ""}
          aria-label={`${isTocOpen ? "close" : "open"} table of contents`}
        >
          <span className="hide-on-hover">table of contents</span>
          <span className="show-on-hover ascii">
            {isTocOpen ? "┳━┳ノ( º _ ºノ)" : "(╯°□°）╯︵ ┻━┻"}
          </span>
        </DisclosureButton>
        <DisclosurePanel
          className="toc-panel"
          dangerouslySetInnerHTML={{ __html: props.innerHTML || DUMMY_LIST }}
        ></DisclosurePanel>
      </div>
    </Disclosure>
  );
}
