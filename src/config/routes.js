/* eslint-disable no-sequences */
import LayoutAdmin from "../layouts/LayoutAdmin";
import AdminHome from '../pages/Admin';
import AdminSignIn from "../pages/Admin/SignIn";


const routes = [
    {
        path: "/admin",
        component: LayoutAdmin,
        exact: false[
            {
                path: "/admin",
                component: AdminHome,
                exact: true
            },
            {
                path: "/admin/login",
                component: AdminSignIn,
                exact: true

            }
        ]
    }
];

export default routes;