import { X } from 'lucide-react'
import React from 'react'
import Button from './Button'

const NewCategory = ({ newCategory, setNewCategory }) => {
  return (
    <div
      className={`absolute top-0 right-0  left-0 bottom-0 bg-background/80 backdrop:blur-2xl h-full w-full flex items-center justify-center ${
        !newCategory && "hidden"
      }`}
    >
      <div className="w-full relative h-fit bg-bg-2 border border-strok p-4 pt-10 lg:p-8 rounded-lg max-w-screen-sm">
        <h1 className='text-2xl md:text-3xl'>افزودن دسته جدید</h1>
        <input type="text" className='block w-full  border border-strok rounded-md p-4 mt-4 outline-none' placeholder='نام دسته' />
        <Button text='افزودن' style='mt-4 w-full' fill />
        <span
          onClick={() => setNewCategory(false)}
          className="absolute left-4 top-4 cursor-pointer"
        >
          <X />
        </span>
      </div>
    </div>
  )
}

export default NewCategory