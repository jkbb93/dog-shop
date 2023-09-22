import { Link } from "react-router-dom";

function ToggleableLink(props) {
    const { to: linkTo, disabled } = props;

    const output = disabled
        ? props.children
        : <Link to={linkTo}>{props.children}</Link>;

    return (
        <>{output}</>
    );
}

export default ToggleableLink;