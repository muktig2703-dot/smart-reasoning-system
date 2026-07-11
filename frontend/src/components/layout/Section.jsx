function Section({
    children,
    className = ""
}) {
    return (
        <section
            className={`
                relative
                py-24
                lg:py-32
                ${className}
            `}
        >
            {children}
        </section>
    );
}

export default Section;