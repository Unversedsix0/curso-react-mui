import { createContext, useState, useCallback, useContext, Key } from 'react'
import { To } from 'react-router-dom';



interface IDrawerOptions {
    label: String;
    icon: String;
    path: To;
    key:Key;

}
interface IDrawerContextData {
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
    drawerOptions:IDrawerOptions[];
    setDrawerOptions:(newDrawerOptions:IDrawerOptions[]) => void;
}

interface IAppThemeProviderProps {
    children: React.ReactNode;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
    return useContext(DrawerContext);
}

export const DrawerProvider: React.FC<IAppThemeProviderProps> = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [drawerOptions, setDrawerOptions] = useState<IDrawerOptions[]>([]);
    
    
    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen)
    }, [])
    const handleSetDrawerOpen = useCallback((newDrawerOptions:IDrawerOptions[]) => {
      setDrawerOptions(newDrawerOptions);
    }, [])

    return (
        <>
            <DrawerContext.Provider value={{ isDrawerOpen, drawerOptions ,toggleDrawerOpen, setDrawerOptions: handleSetDrawerOpen}}>
                {children}
            </DrawerContext.Provider>
        </>

    )


}