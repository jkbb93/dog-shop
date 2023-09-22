function PadlockIcon(props) {
    const color = props.color || "rgb(95, 99, 104)";
    const positionAdjustment = {transform: "translateY(2px)"};

    return (
        <span style={positionAdjustment}>
            <svg width="16" height="20" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.15" y="11.15" width="17.7" height="12.7" rx="1.85" stroke={color} strokeWidth="2.2" />
                <path d="M5 10 V7C5 4.23858 7.23858 2 10 2V2C12.7614 2 15 4.23858 15 7 V10" stroke={color} strokeWidth="2.2" />
            </svg>
        </span>
    );
}

export default PadlockIcon;