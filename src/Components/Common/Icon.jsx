import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { findIconDefinition } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

const Icon = ({
  name,
  style,
  size,
  color,
  spin,
  pulse,
  border,
  fixedWidth,
  flip,
  listItem,
  pull,
  rotation,
}) => {
  const iconDef =
    findIconDefinition({ prefix: "fas", iconName: name }) ||
    findIconDefinition({ prefix: "fab", iconName: name }) ||
    findIconDefinition({ prefix: "far", iconName: name });

  if (!iconDef) {
    console.warn(`Icon "${name}" not found.`);
    return null;
  }

  return (
    <FontAwesomeIcon
      icon={iconDef}
      style={style}
      size={size}
      color={color}
      spin={spin}
      pulse={pulse}
      border={border}
      fixedWidth={fixedWidth}
      flip={flip}
      listItem={listItem}
      pull={pull}
      rotation={rotation}
    />
  );
};

export default Icon;
