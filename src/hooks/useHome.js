import { useState } from 'react'

export default function useHome() {
  // setting popup state
  const [popUp, setPopUp] = useState(false)

  // setting closedPage state
  const [closedPage, setClosedPage] = useState('')

  // show / hide popup and showing dynamic content by props
  const handleTogglePopUp = (page) => {
    setPopUp(!popUp)
    if (page === 'salary') setClosedPage('薪水查詢')
    if (page === 'tasks') setClosedPage('平台任務')
  }

  // copy user's recommended code when button clicked
  const handleCopy = async () => {
    await navigator.clipboard.writeText('Homexin1314520')
    alert('推薦碼複製成功！')
  }

  return {
    popUp,
    closedPage,
    handleTogglePopUp,
    handleCopy,
  }
}
