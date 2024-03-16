import React from 'react'
import ResumeBtn from './resume-btn'
import TitleSection from './title-section'

export default function TitleResumeSection() {
  return (
    <div className='flex flex-col gap-y-6 md:flex-row items-center gap-x-10'>
      <ResumeBtn classNames='hidden md:flex' />
      <TitleSection />
      <ResumeBtn classNames='flex md:hidden' />
    </div>
  )
}
