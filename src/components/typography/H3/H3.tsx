
interface H3Props {
    children: React.ReactNode;
    color?: string;
    className?: string;
}

const H3 = ({ children, color, className }: H3Props) => {
    return (
        <h3
            className={className}
            style={{ color }}
        >
            {children}
        </h3>
    );
};

export default H3;
