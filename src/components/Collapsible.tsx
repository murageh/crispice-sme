import {useEffect, useRef, useState} from "react";
import styles from "../styles/Home.module.css";

function Collapsible({ open, Title, children, leftAligned=false }) {
  const [isOpen, setIsOpen] = useState(open);
  const [height, setHeight] = useState<number | undefined>(
    open ? undefined : 0
  );
  const ref = useRef<HTMLDivElement>(null);

  const togglePanel = (e) => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!height || !isOpen || !ref.current) return undefined;
    // @ts-ignore
    const resizeObserver = new ResizeObserver((el) => {
      setHeight(el[0].contentRect.height);
    });
    resizeObserver.observe(ref.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, [height, isOpen]);

  useEffect(() => {
    if (isOpen) setHeight(ref.current?.getBoundingClientRect().height);
    else setHeight(0);
  }, [isOpen]);

  return (
    <div className={"collapsible__element"}>
      <div onClick={togglePanel} className={"collapsible__header"}
           style={leftAligned ? {width: "100%",textAlign: "left", justifyContent: "space-between"} : {}}
      >
        {
          typeof Title === "string" ?
            <code className={styles.code} id={"collapsible_header_text"}>
              <span>{Title}</span>
              <span id={"collapsible_header_icon"}>
                 {isOpen ? "( Hide ▲ )" : "( Show ▼ )"}
              </span>
            </code>
            :
            <>
              {Title}
              <span id={"collapsible_header_icon"}>
                {isOpen ? " Hide ▲ " : " Show ▼ "}
              </span>
            </>

        }
      </div>
      <div className={"collapsible__content"}
           style={{ height, transition: "height 0.5s cubic-bezier(0.4, 0, 1, 1) 0s" }}
      >
        <div ref={ref}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Collapsible;