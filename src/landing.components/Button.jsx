import { Link } from "react-router-dom";

export default function Button({ children, style = 1, text = "", className = "", ...props }) {
    let styleButton =
        "p-3 rounded-sm bg-[var(--c1-bg)] text-[var(--c1-txt)] text-center text-nowrap hover:opacity-80 transition-all duration-200 " +
        className;
    if (style == 2)
        styleButton =
            "p-3 rounded-sm bg-[var(--c6-bg)] text-[var(--c6-txt)] text-center text-nowrap hover:opacity-80 transition-all duration-200 " +
            className;
    if (style == 3)
        styleButton =
            "p-3 rounded-sm text-white hover:bg-black/30 text-center text-nowrap transition-all duration-200 " +
            className;
    return (
        <Link to="/register" className={styleButton} {...props}>
            {children ? children : text}
        </Link>
    );
}
