export default defineNuxtRouteMiddleware((to) => {
  if (to.path.startsWith("/Admin/")) {
    // to.meta.layout = "adminadmin";
  }
  else if(to.path.startsWith("/auth")){
    to.meta.layout = false;
  }
  else if(to.path.startsWith("/special")){
    to.meta.layout = false;
  }
  else{
  to.meta.layout = "client";

  }
});
