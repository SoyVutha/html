import React from 'react'
import AuthForm from '@/components/ui/AuthForm'
const page = () => {
  return (
    <section className='flex flex-center size-full max-sm:px-6'>
      <AuthForm type="sign_up"/>
    </section>
  )
}

export default page