import React, { useRef, useState, useForm, useEffect } from 'react'
import { submitComment } from '../services'

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const commentEl = useRef()
  const nameEl = useRef()
  const emailEl = useRef()
  const storeDataEl = useRef()

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name')
    emailEl.current.value = window.localStorage.getItem('email')
  }, [])

  const handleCommentSubmission = () => {
    setError(false)
    const { value: comment } = commentEl.current
    const { value: name } = nameEl.current
    const { value: email } = emailEl.current
    const { checked: storeData } = storeDataEl.current

    if(!comment || !name || !email) {
      setError(true)
      return
    }
    const commentObj = { name, email, comment, slug }

    if(storeData) {
      window.localStorage.setItem('name', name)
      window.localStorage.setItem('email', email)
    } else {
      window.localStorage.removeItem('name', name)
      window.localStorage.removeItem('email', email)
    }

    submitComment(commentObj).then((res) => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false)
      }, 3000)
    })
  }

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>Yorum Yap</h3>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <textarea ref={commentEl} className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700' placeholder='Yorum Yaz' name='comment'/>

      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
        <input type='text' ref={nameEl} className='p-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700' placeholder='Ad Soyad' name='name'/>
        <input type='text' ref={emailEl} className='p-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700' placeholder='E-mail' name='email'/>
      </div>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <div>
          <input ref={storeDataEl} type='checkbox' id='storeData' name='storeData' />
          <label className='text-gray-500 cursor-pointer ml-2' htmlFor='storeData'>Daha sonraki yorumlar i??in isim ve mail bilgilerimi kaydet.</label>
        </div>
      </div>
      {error && <p className='text-xs text-brand-color'>T??m alanlar?? doldurmal??s??n??z.</p>}
      <div className='mt-8'>
        <button type='button' onClick={handleCommentSubmission} className='transition duration-500 transform hover:-translate-y-1 inline-block bg-primary-color text-white text-lg font-medium rounded-full px-8 py-3 cursor-pointer'>G??nder</button>
        {showSuccessMessage && <span className='text-xl float-right font-semibold mt-3 text-green-500'>Yorum ba??ar??yla g??nderildi.</span>}
      </div>
    </div>
  )
}

export default CommentsForm