import { createContext, useContext } from 'react'
interface Ctx { openEnroll: (courseId?: string) => void; openCurriculum: (courseId: string) => void }
export const AppCtx = createContext<Ctx>({ openEnroll: () => {}, openCurriculum: () => {} })
export const useApp = () => useContext(AppCtx)
