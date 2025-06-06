import type { LayoutLoad } from "./$types";

// add this to root layout
// to prerender all our pages
// during build time
export const prerender = true;

// get url path whenever visiting a new page
export const load: LayoutLoad = ({ url }) => {
  // Define which pages should show the home components
  const showHomeComponents = url.pathname === '/';
  
  // Define which pages should show the main header
  const hideMainHeader = ['/kainos', '/paslaugos', '/portfolio'].some(path => 
    url.pathname.startsWith(path)
  );

  return {
    pathname: url.pathname,
    showHomeComponents,
    hideMainHeader
  };
};
