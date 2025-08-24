/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/avatar`; params?: Router.UnknownInputParams; } | { pathname: `/hub`; params?: Router.UnknownInputParams; } | { pathname: `/info`; params?: Router.UnknownInputParams; } | { pathname: `/quiz`; params?: Router.UnknownInputParams; } | { pathname: `/resultado`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/avatar`; params?: Router.UnknownOutputParams; } | { pathname: `/hub`; params?: Router.UnknownOutputParams; } | { pathname: `/info`; params?: Router.UnknownOutputParams; } | { pathname: `/quiz`; params?: Router.UnknownOutputParams; } | { pathname: `/resultado`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/avatar${`?${string}` | `#${string}` | ''}` | `/hub${`?${string}` | `#${string}` | ''}` | `/info${`?${string}` | `#${string}` | ''}` | `/quiz${`?${string}` | `#${string}` | ''}` | `/resultado${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/avatar`; params?: Router.UnknownInputParams; } | { pathname: `/hub`; params?: Router.UnknownInputParams; } | { pathname: `/info`; params?: Router.UnknownInputParams; } | { pathname: `/quiz`; params?: Router.UnknownInputParams; } | { pathname: `/resultado`; params?: Router.UnknownInputParams; };
    }
  }
}
