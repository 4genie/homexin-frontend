import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { getUser, updateUser } from '../userDataApi'

export default function useEditMember() {
  // setting editUserData's state,default value is empty object
  const [editUserData, setEditUserData] = useState({})

  // setting errorMessages's state，default value is empty object
  const [errorMessages, setErrorMessages] = useState({})

  // setting isSubmitting's state，default value is false
  const [isSubmitting, setIsSubmitting] = useState(false)

  const navigate = useNavigate()

  // setting datePopup's state and default value
  const [datePopup, setDatePopup] = useState({
    time: new Date(),
    isOpen: false,
  })

  // update editUserData's state  form getUser API when loading page
  useEffect(() => {
    const doGetUser = async (id) => {
      try {
        const result = await getUser(id)
        setEditUserData(result)
      } catch (error) {
        console.log(error)
      }
    }
    doGetUser('1')
  }, [])

  // if input value is not empty
  const handleInput = (e) => {
    const { name, value } = e.target
    // update value to  editUserData's state
    setEditUserData({
      ...editUserData,
      [name]: value,
    })
    // clear errorMessages's state
    setErrorMessages({
      ...errorMessages,
      [e.target.name]: '',
    })
  }

  // when click the date input, open the datepicker popup
  const handlePopupDate = () => {
    setDatePopup({ ...datePopup, isOpen: true })
  }

  // wheen click cancel on datepicker popup, close the popup
  const handleCancelPopup = () => {
    setDatePopup({ ...datePopup, isOpen: false })
  }

  // after confirm the selected date, update the editUserData state and close the popup
  const handleSelect = (time) => {
    setEditUserData({
      ...editUserData,
      birthday: time.toLocaleDateString('zh-TW'),
    })

    setDatePopup({ time, isOpen: false })
  }

  // datepicker 's date config settings
  const dateConfig = {
    year: {
      format: 'YYYY',
      caption: 'Year',
      step: 1,
    },
    month: {
      format: 'MM',
      caption: 'Mon',
      step: 1,
    },
    date: {
      format: 'DD',
      caption: 'Day',
      step: 1,
    },
  }

  // update EditUserData's region state when selected value changed
  const handleChangeRegion = (e) => {
    const selected = e.target.value
    setEditUserData({
      ...editUserData,
      region: selected,
    })
  }

  // form validation
  const validateInfo = (values) => {
    let errors = {}
    let required = '此欄位為必填'

    // name: if value is empty, show required
    if (!values.name) {
      errors.name = required
    }

    // height: if value is empty, show required
    if (!values.height) {
      errors.height = required
      // if value is not empty, validate the value（max < 300 and min > 100）
    } else if (
      /[^0-9]/g.test(values.height) ||
      values.height < 100 ||
      values.height > 300
    ) {
      errors.height = '身高有誤'
    }

    // weight: if value is empty, show required
    if (!values.weight) {
      errors.weight = required
      // if value is not empty, validate the value（max < 200 and min > 20）
    } else if (
      /[^0-9]/g.test(values.weight) ||
      values.weight < 20 ||
      values.weight > 200
    ) {
      errors.weight = '體重有誤'
    }

    // phone: if value is empty, show required
    if (!values.phone) {
      errors.phone = required
      // if value is not empty, validate the value（10 digits)
    } else if (!/^09\d{2}[ -]?\d{3}[ -]?\d{3}$/.test(values.phone)) {
      errors.phone = '電話格式不正確'
    }

    //bankCode: if value is empty, show required
    if (!values.bankCode) {
      errors.bankCode = required
      // if value is not empty, validate the value（3 digits)
    } else if (!/^\d{3}$/.test(values.bankCode)) {
      errors.bankCode = '銀行代碼格式不正確'
    }

    //bankAccount: if value is empty, show required
    if (!values.bankAccount) {
      errors.bankAccount = required
      // if value is not empty, validate the value（9~14 digits)
    } else if (!/^\d{9,14}$/.test(values.bankAccount)) {
      errors.bankAccount = '銀行帳號格式不正確'
    }
    return errors
  }

  // when click submit button, validate the input value
  const handleSubmit = () => {
    setErrorMessages(validateInfo(editUserData))
    setIsSubmitting(true)
  }

  const confirmSubmit = useCallback(() => {
    // if click the submit button and pass the validation
    // update user's data and relocate the home page
    if (Object.keys(errorMessages).length === 0 && isSubmitting) {
      const UpdateUser = async (id, data) => {
        try {
          await updateUser(id, data)
        } catch (error) {
          console.log(error)
        }
      }

      UpdateUser('1', editUserData)
      navigate('/member')
    }
  }, [editUserData, errorMessages, isSubmitting, navigate])

  useEffect(() => {
    confirmSubmit()
  }, [confirmSubmit])

  return {
    editUserData,
    errorMessages,
    datePopup,
    dateConfig,
    handleCancelPopup,
    handleSelect,
    handlePopupDate,
    handleChangeRegion,
    handleInput,
    handleSubmit,
  }
}
