export default defineNuxtRouteMiddleware((to) => {
    if (to.path.startsWith('/jobs') || to.path.startsWith('/home') || to.path.startsWith('/admin') || to.path.startsWith('/contactus') || to.path.startsWith('/employers')) {
      to.meta.layout = 'client'; 
    }
  });