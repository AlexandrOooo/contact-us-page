import React from "react";

interface BurgerIconProps {
    onClickMenu: () => void;
    classBtn: string;
}
const BurgerIcon: React.FC<BurgerIconProps> = ({ onClickMenu, classBtn }) => {
    return (
        <svg
            className={classBtn}
            onClick={onClickMenu}
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M18 12H10C9.44771 12 9 11.5523 9 11C9 10.4477 9.44771 10 10 10H18V12ZM18 7H1C0.447716 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H18V7ZM18 2H1C0.447716 2 0 1.55228 0 1C0 0.447715 0.447715 0 1 0H18V2Z"
                fill="black"
            />
        </svg>
    );
};

export default BurgerIcon;
