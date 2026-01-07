import { mainBundleUtilFunc } from './util';

const separateBundleCode = await import('./separate-bundle');

separateBundleCode.print();

mainBundleUtilFunc();