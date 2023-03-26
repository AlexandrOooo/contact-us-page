import React from "react";
interface CloseIconProps {
    closeIcon: string;
    onClickMenu: () => void;
}
const CloseIcon: React.FC<CloseIconProps> = ({ onClickMenu, closeIcon }) => {
    return (
        <svg
            className={closeIcon}
            onClick={onClickMenu}
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M17 17L1 1M17 1L1 17"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
            />
        </svg>
    );
};

export default CloseIcon;
