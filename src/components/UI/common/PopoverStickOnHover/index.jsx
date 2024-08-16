import React, { useState, useRef } from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";
import classes from "./PopoverStickOnHover.module.scss"

const PopoverStickOnHover = ({ renderTooltipContent, children, value }) => {
  const [show, setShow] = useState(false);
  const handleOnMouseEnter = () => {
    setShow(true);
  };
  const handleOnMouseLeave = () => {
    setShow(false);
  };
  const ref = useRef(null);
  return (
    <>
      <OverlayTrigger
        show={show} // Control trigger behavior with show instead of trigger.
        key="bottom"
        placement="top-end"
        container={ref}
        overlay={
          !value ? 
          <></> : 
          <Popover
            id={`popover-positioned-bottom`}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
            className={classes.tooltip}
          >
            {renderTooltipContent()}
          </Popover>
        }
      >
        <div
          className="cart-wrapper"
          ref={ref}
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
        >
          {children}
        </div>
      </OverlayTrigger>
    </>
  );
};

export default PopoverStickOnHover;
