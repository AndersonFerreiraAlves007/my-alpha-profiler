import React, { createContext, useState } from 'react'

export const DropdownContext = createContext({
  isDropdownOpen: false,
  setIsDropdownOpen: () => {}
})

export const DropdownProvider = ({ children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const value = { isDropdownOpen, setIsDropdownOpen }
  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  )
}
