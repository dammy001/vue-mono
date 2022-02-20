import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
 entries: [
  'index',
  // bundleless, or just copy assets
  { input: 'components/', outDir: 'dist/components' },
 ],
 declaration: true,
 dependencies: ['vue'],
});
