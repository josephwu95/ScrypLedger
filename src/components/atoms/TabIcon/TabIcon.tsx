import { Icon, Image, Box } from '@gluestack-ui/themed';
import {
  AntDesign,
  Entypo,
  EvilIcons,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
  Feather,
} from '@expo/vector-icons';

const IconLibaries = {
  AntDesign,
  Entypo,
  EvilIcons,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
};

export type TIconLibaries = keyof typeof IconLibaries;

type Icons = {
  AntDesign: typeof AntDesign;
  Entypo: typeof Entypo;
  EvilIcons: typeof EvilIcons;
  FontAwesome: typeof FontAwesome;
  FontAwesome5: typeof FontAwesome5;
  Fontisto: typeof Fontisto;
  Foundation: typeof Foundation;
  Feather: typeof Feather;
  Ionicons: typeof Ionicons;
  MaterialCommunityIcons: typeof MaterialCommunityIcons;
  MaterialIcons: typeof MaterialIcons;
  Octicons: typeof Octicons;
  SimpleLineIcons: typeof SimpleLineIcons;
  Zocial: typeof Zocial;
};

type TabIconProps = {
  color?: string;
  size?: string;
  as: keyof Icons;
  name: string;
};

export const TabIcon = ({
  color = 'grey.600',
  size = 'xl',
  name,
  as,
  ...props
}: TabIconProps) => {
  return (
    <Icon
      name={name}
      color={color}
      size={size}
      as={IconLibaries[as]}
      {...props}
    />
  );
};

export const tabBarIcon = (name, as) => {
  return (props) => <TabIcon name={name} as={as} {...props} />;
};
