import {Link, NavLink} from "react-router";

const ExamplesSection = () => {
    return (
        <>
            <div className="bg-gray-200">
                <ul className="container mx-auto flex justify-center space-x-4">
                    <li>
                        <NavLink to="/examples/name-changer"
                        className={({isActive}) => isActive ? "text-cf-dark-red underline underline-offset-4" : "text-cf-gray"}>
                        Name Changer</NavLink>
                    </li>
                    <li>
                        {/* <Link to="/examples/online-status">Online Status</Link> */}
                        <NavLink to="/examples/online-status"
                        className={({isActive}) => isActive ? "text-cf-dark-red underline underline-offset-4" : "text-cf-gray"}>
                        Online Status</NavLink>
                    </li>
                    <li>
                        <Link to="/examples/name-changer">Name Changer</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default ExamplesSection;