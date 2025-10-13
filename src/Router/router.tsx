import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "../Layout";
import Home from "../compo/Home/Home";
import Active from "../compo/Active/Active";
import Completed from "../compo/Completed/Completed";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/active",
                element: <Active></Active>
            },
            {
                path: "/completed",
                element: <Completed></Completed>
            }

        ]

    },
]);

export default router;