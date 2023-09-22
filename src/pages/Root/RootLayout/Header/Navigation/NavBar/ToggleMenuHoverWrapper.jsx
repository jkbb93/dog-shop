function ToggleMenuHoverWrapper(props) {
    const { disableHover, onMouseEnter, onMouseLeave } = props;

    const mouseEnterHandler = (!disableHover && onMouseEnter)
        ? onMouseEnter
        : null;

    const mouseLeaveHandler = (!disableHover && onMouseLeave)
        ? onMouseLeave
        : null;

    return (
        <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
        >
            {props.children}
        </div>
    );
}

export default ToggleMenuHoverWrapper;