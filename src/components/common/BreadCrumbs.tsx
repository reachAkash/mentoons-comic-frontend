import { Link, useLocation } from "react-router-dom";
const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);
  
    return (
      <nav>
        <ul className="flex space-x-2 items-center justify-center text-xl font-bold">
          <li>
            <Link to="/">
            <figure className="w-6 h-6">
             <img src="/assets/home/Home icon .png" alt="home icon" className="h-full w-full object-contain"/> 
            </figure>
            </Link>
          </li>
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;
  
            return (
              <li key={to}>
                <span> / </span>
                <Link to={to}>
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  };
  
  export default Breadcrumbs;
  