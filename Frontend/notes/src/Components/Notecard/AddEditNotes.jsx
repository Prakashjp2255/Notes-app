import React from 'react'
const AddEditNotes = () => {
  return (
    <div>
        <div className='flex flex-col gap-2'>
            <label className='input-label'>Title</label>
            <input type="text"
            className='text-2xl text-orange-100 outline-none bg-none'
            placeholder='Ex: Wake at 4pm' />
        </div>

        <div className='flex flex-col gap-2 mt-4'>
            <label className='input-label'> Content </label>
            <textarea type="text"
            className='text-sm text-brightorange outline-none p-2 rounded-lg'
            placeholder='Add your content.....'
            rows={10}/>
        </div>

        <div>
            <label className='input-label'>Tags</label>
        </div>

        <button className='font-medium mt-5 p-3 bg-brightorange'>
            Add
            </button>
    </div>
  )
}

export default AddEditNotes;