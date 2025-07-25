import type { IPageSections } from '../types/IPageSections'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ProjectPage from '../pages/Project'

interface AppRoutesProps {
    pageSections: IPageSections[]
}

const AppRoutes = ({ pageSections }: AppRoutesProps) => {
    return (
        <Routes>
            <Route path='/' element={<HomePage pageSections={pageSections}/>} />
            <Route path='/projeto/:id' element={<ProjectPage />} />
        </Routes>
    )
}

export default AppRoutes