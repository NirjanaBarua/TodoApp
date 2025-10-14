import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar bg-black shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl text-white">Todo App</a>
            </div>
            <div className="flex-none mr-4">
                <ul className="menu menu-horizontal px-2 gap-2 text-white">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "underline underline-offset-4 decoration-white decoration-2" : ""
                        
                        }
                    >
                    <span className="font-semibold">All Tasks</span></NavLink>
                <NavLink
                    to="/active"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline underline-offset-4 decoration-white decoration-2" : ""
                    }
                > <span className="font-semibold">Active</span>
                </NavLink>
                <NavLink
                    to="/completed"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline underline-offset-4 decoration-white decoration-2" : ""
                    }
                >
                  <span className="font-semibold" >Completed</span>  
                    </NavLink>
            </ul>
        </div>
        </div >
    );
};

export default Navbar;