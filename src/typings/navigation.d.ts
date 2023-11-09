import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    // https://reactnavigation.org/docs/typescript/#specifying-default-types-for-usenavigation-link-ref-etc
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends Navigation.RootNavigatorParams {}
  }
}

declare namespace Navigation {
  type RootNavigatorParams = {
    HomeNavigator: NavigatorScreenParams<HomeNavigatorParams>;
  };

  type RootNavigatorScreenProps<T extends keyof RootNavigatorParams> =
    NativeStackScreenProps<RootNavigatorParams, T>;

  /**
   * We will need to declare all the screens that's in the HomeNavigator.
   * And declare the params they should take (if any).
   * Use undefined if the screen takes no params.
   **/
  type HomeNavigatorParams = {
    Home: undefined;
    Settings: {myParam: string};
  };

  type HomeNavigatorScreenProps<T extends keyof HomeNavigatorParams> =
    CompositeScreenProps<
      NativeStackScreenProps<HomeNavigatorParams, T>,
      RootNavigatorScreenProps<keyof RootNavigatorParams>
    >;
}
