import React, { useRef } from "react";
import "./style.scss";
import bellIcon from "assets/images/bellIcon.svg"
import closeIcon from "assets/images/CloseIcon.svg"
import {
  Container,
  Tooltip,
  OverlayTrigger,
  Button,
  Row,
  Col,
} from "react-bootstrap";

const NotificationBar = ({ showTooltip, setShowTooltip, onHide }) => {
  const notifications = [
    {
      id: 1,
      title: "Message",
      content: "20 Dec 2022 at 2:54 PM",
    },
    
  ];

  const handleToggleTooltip = () => {
    setShowTooltip(!showTooltip);
  };

  const tooltipContent = (
    <Tooltip id="notification-tooltip">
      <div className="d-flex align-items-center justify-content-between">
        <h6>Notifications (1)</h6>
        <img
          onClick={onHide}
          src={closeIcon}
          alt="Close"
          className="noti-close-img"
        />
      </div>
      <hr />
      {notifications.map((notification) => (
        <div key={notification.id} className="tooltip-content mt-3">
          <p>{notification.title}</p>
          <h2>{notification.content}</h2>
          
        </div>
      ))}
    </Tooltip>
  );

  return (
    <div>
      <OverlayTrigger
        placement="bottom"
        overlay={tooltipContent}
        show={showTooltip}
        onHide={onHide}
        trigger={["click"]}
      >
        <img
          src={bellIcon}
          width={40}
          className="mx-3 cursor-pointer"
          onClick={handleToggleTooltip}
        />
      </OverlayTrigger>
    </div>
  );
};

export default NotificationBar;
