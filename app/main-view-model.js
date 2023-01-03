import { Observable } from 'tns-core-modules/data/observable';
import { Frame } from 'tns-core-modules/ui/frame';

export function GettingStartedViewModel() {
  var vm = new Observable();
  vm.set(
    'mainContentText',
    'SideDrawer for NativeScript can be easily setup in the XML definition of your page by defining main- and drawer-content. The component' +
      ' has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.'
  );

  vm.onOpenDrawerTap = () => {
    let sideDrawer = Frame.topmost().getViewById('sideDrawer');
    sideDrawer.showDrawer();
  };
  vm.onCloseDrawerTap = () => {
    let sideDrawer = Frame.topmost().getViewById('sideDrawer');
    sideDrawer.closeDrawer();
  };
  return vm;
}
