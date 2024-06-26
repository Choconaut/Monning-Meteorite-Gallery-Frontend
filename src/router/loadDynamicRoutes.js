import dynamicRoutes from "./dynamicRoutes";
import useUserStore from "../store/userStore";
// this function is used to filter out views defined in dynamicRoutes that a user does not have access to
function autoloadDynamicRoutes(router) {
  const userStore = useUserStore();
  const userPermissions = userStore.userInfo?.permissions;
  // filter dynamicRoutes based on user's permissions and add to router
  dynamicRoutes.forEach((route) => {
    if (route.meta.permissions?.every((p) => userPermissions.includes(p))) {
      router.addRoute("mainLayout", route); // add view as a child of main layout
    }
  });
}
export default autoloadDynamicRoutes;
