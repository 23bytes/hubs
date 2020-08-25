import React from "react";
import { Popover } from "../popover/Popover";
import { ToolbarButton } from "../input/ToolbarButton";
import { RoomLayout } from "../layout/RoomLayout";
import { ReactComponent as ShareIcon } from "../icons/Share.svg";
import { SharePopover } from "./SharePopover";

export default {
  title: "SharePopover"
};

export const Base = () => (
  <RoomLayout
    toolbarCenter={
      <Popover
        title="Share"
        content={SharePopover}
        placement="top"
        offsetDistance={28}
        initiallyVisible
        disableFullscreen
      >
        {({ togglePopover, popoverVisible, triggerRef }) => (
          <ToolbarButton
            ref={triggerRef}
            icon={<ShareIcon />}
            selected={popoverVisible}
            onClick={togglePopover}
            label="Share"
            preset="purple"
          />
        )}
      </Popover>
    }
  />
);

Base.parameters = {
  layout: "fullscreen"
};
