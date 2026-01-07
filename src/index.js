import { getDisplayLanguage } from './util';

const separateBundleCode = await import('./separate-bundle');

console.log(separateBundleCode.makeAccountPage());

console.log(getDisplayLanguage(null));