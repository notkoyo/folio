import React from "react";
import { IconCircle, IconCircleFilled } from "@tabler/icons-react";

export default function WorkAvailability() {
  return (
    <div className="hidden sm:flex items-center gap-x-2 absolute top-5 left-8 cursor-default">
      <span>
        <IconCircleFilled size={16} color="green" />
      </span>
      <p>looking for position</p>
    </div>
  );
}
