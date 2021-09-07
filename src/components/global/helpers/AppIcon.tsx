import React from "react";
import {
    AccessTime, AccessTimeOutlined,
    Brightness7Rounded,
    ChatBubbleOutlineRounded,
    CloseRounded, DoneAllOutlined,
    ExpandLessRounded,
    Facebook, FeedbackOutlined,
    Instagram,
    LinkedIn,
    MailOutlineRounded,
    MenuRounded, MonetizationOnOutlined, Money, MoneyOutlined,
    NightsStayRounded, Timer, Timer3Outlined,
    Twitter, WorkOutline,
    YouTube
} from "@material-ui/icons";

export const AppIcon = ({ type, size }) => {
  switch (type) {
    case "menu":
      return <MenuRounded fontSize={size} className="menu-icon" />;
    case "close":
      return <CloseRounded fontSize={size} className="menu-icon" />;
    case "facebook":
      return <Facebook fontSize={size} className="menu-icon" />;
    case "twitter":
      return <Twitter fontSize={size} className="menu-icon" />;
    case "instagram":
      return <Instagram fontSize={size} className="menu-icon" />;
    case "youtube":
      return <YouTube fontSize={size} className="menu-icon" />;
    case "linkedin":
      return <LinkedIn fontSize={size} className="menu-icon" />;
    case "chat":
      return <ChatBubbleOutlineRounded fontSize={size} className="menu-icon" />;
    case "mail":
      return <MailOutlineRounded fontSize={size} className="menu-icon" />;
    case "up":
      return <ExpandLessRounded fontSize={size} className="menu-icon" />;
    case "brightness":
      return <Brightness7Rounded fontSize={size} className="menu-icon" />;
    case "dark":
      return <NightsStayRounded fontSize={size} className="menu-icon" />;
    case "money":
      return <MonetizationOnOutlined fontSize={size} className="menu-icon" />;
    case "available":
      return <AccessTimeOutlined fontSize={size} className="menu-icon" />;
    case "experienced":
      return <DoneAllOutlined fontSize={size} className="menu-icon" />;
    case "feedback":
      return <FeedbackOutlined fontSize={size} className="menu-icon" />;
    default:
      return <></>;
  }
};
