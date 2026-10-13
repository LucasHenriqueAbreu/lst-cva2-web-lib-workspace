import { ZardContextMenuDirective } from './context-menu.directive';
import { ZardNavigationMenuContentDirective } from './navigation-menu-content.directive';
import { ZardNavigationMenuIndicatorComponent } from './navigation-menu-indicator.component';
import { ZardNavigationMenuItemDirective } from './navigation-menu-item.directive';
import { ZardNavigationMenuLabelComponent } from './navigation-menu-label.component';
import { ZardNavigationMenuLinkDirective } from './navigation-menu-link.directive';
import { ZardNavigationMenuListDirective } from './navigation-menu-list.directive';
import { ZardNavigationMenuShortcutComponent } from './navigation-menu-shortcut.component';
import { ZardNavigationMenuTriggerDirective } from './navigation-menu-trigger.directive';
import { ZardNavigationMenuViewportComponent } from './navigation-menu-viewport.component';
import { ZardNavigationMenuComponent } from './navigation-menu.component';

export const ZardNavigationMenuImports = [
  ZardNavigationMenuComponent,
  ZardNavigationMenuListDirective,
  ZardNavigationMenuItemDirective,
  ZardNavigationMenuTriggerDirective,
  ZardNavigationMenuContentDirective,
  ZardNavigationMenuLinkDirective,
  ZardNavigationMenuIndicatorComponent,
  ZardNavigationMenuViewportComponent,
  ZardNavigationMenuLabelComponent,
  ZardNavigationMenuShortcutComponent,
  ZardContextMenuDirective,
] as const;
