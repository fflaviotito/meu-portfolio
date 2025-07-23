import type { IPageSections } from "../../types/iPageSections"

interface HomePageProps {
    pageSections: IPageSections[]
}

const HomePage = ({ pageSections }: HomePageProps) => {
    return (
        <>
            {pageSections.map(section => <section id={section.id} key={section.id}>{section.label}</section>)}
        </>
    )
}

export default HomePage