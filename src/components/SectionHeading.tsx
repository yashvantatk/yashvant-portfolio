interface SectionHeadingProps {
    index: string
    title: string
}

export default function SectionHeading({ index, title }: SectionHeadingProps) {
    return (
        <div className="flex items-baseline gap-4 mb-12">
            <span className="font-data text-amber text-sm">{index}</span>
            <div className="flex-1 h-px bg-grid" />
            <h2 className="font-display font-semibold text-2xl md:text-3xl text-text">
                {title}
            </h2>
        </div>
    )
}