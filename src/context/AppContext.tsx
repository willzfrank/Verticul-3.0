'use client'
import React, { createContext, useContext, useState } from 'react'

export interface AppContextType {
  isExpanded: boolean
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <AppContext.Provider value={{ isExpanded, setIsExpanded }}>
      {children}
    </AppContext.Provider>
  )
}
