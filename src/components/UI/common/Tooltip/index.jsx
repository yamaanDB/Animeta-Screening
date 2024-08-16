import React from "react";
import { OverlayTrigger } from 'react-bootstrap';
import Tooltip from 'react-bootstrap/Tooltip';
import classes from "./Tooltip.module.scss"
import { ReactComponent as InfoIcon } from "assets/images/infoIcon.svg";

function TriggerExample({ children, label = "Test Message", renderToolipUI, placement = "auto" }) {
  const renderTooltip = (props) => (
    <Tooltip className={classes.tooltip} id="button-tooltip" {...props}>
      {renderToolipUI ? (
        renderToolipUI()
      ) : (
        <div className="row d-flex align-items-center gap-1">
          <div className="col-2">
            <InfoIcon fontSize={6} className="p-1" />
          </div>
          <div className="col px-0">{label}</div>
        </div>
      )}
    </Tooltip>
  );
  return (
    <OverlayTrigger
      placement={placement}
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      {children}
    </OverlayTrigger>
  );
}

export default TriggerExample;