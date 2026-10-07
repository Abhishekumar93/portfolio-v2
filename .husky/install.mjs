// Deployment and CI installs do not need local Git hooks or dev dependencies.
if (
  process.env.CI ||
  process.env.NODE_ENV === 'production' ||
  process.env.HUSKY === '0'
) {
  process.exit(0);
}

const { default: husky } = await import('husky');
const error = husky();

if (error) {
  throw new Error(error);
}
