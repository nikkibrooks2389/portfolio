// PageContext.js
import { createContext, useContext, useState } from 'react';

const PageContext = createContext();

export function usePageContext() {
    return useContext(PageContext);
}

export function PageContextProvider({ children }) {
    const [currentPage, setCurrentPage] = useState('');

    return (
        <PageContext.Provider value={{ currentPage, setCurrentPage }}>
            {children}
        </PageContext.Provider>
    );
}