import { IconName } from "@fortawesome/pro-light-svg-icons";

function mapPrefixNameToIconName (iconName: string): IconName {
  return iconName.split("fa-").pop() as IconName;
}

export {
  mapPrefixNameToIconName
};
