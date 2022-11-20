import React from "react";

interface HeaderProps {
    todoCount: number
}

export const Header: React.FC<HeaderProps> = ({todoCount}) => {
    return(
        <header className={'header'}>
            <h1>HEADER</h1>
            <h2>{todoCount} task(s)</h2>
        </header>
    )
}