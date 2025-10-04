export function load({ url }) {
  const currentPage = url.pathname.slice(1) || 'home';
  
  return {
    currentPage
  };
}
