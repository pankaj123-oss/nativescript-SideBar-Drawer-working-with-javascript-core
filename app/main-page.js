import { GettingStartedViewModel } from './main-view-model';
var abc = new GettingStartedViewModel();
export function pageloaded(args) {
  const page = args.object;
  page.bindingContext = abc;
}
