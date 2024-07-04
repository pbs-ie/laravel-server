interface ListItemProps {
    Icon?: Icon["props"];
    children: React.ReactNode;
}

export default function ListItem({ Icon, children }: ListItemProps) {
    return (
        <li className={`lg:w-full w-fit flex`}>
            {Icon &&
                <Icon />
            }
            {children}
        </li>
    )
}