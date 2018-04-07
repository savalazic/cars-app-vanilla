// @flow
export default function getBaseUrl(): string {
  const inDevelopment = window.location.hostname === 'localhost';
  return inDevelopment ? 'http://localhost:3000/' : '/';
}
