'use client'
import React from 'react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import MDEditor from '@uiw/react-md-editor';
const ProjectForm = () => {
  return (
    <form action='/' className='project-form'>
        <div>
            <label htmlFor='title' className='project-form__label'>Title</label>
            <Input type='text' name='title' id='title' className='project-form__input' required placeholder='Project Title'/>
        </div>
        <div>
            <label htmlFor='description' className='project-form__label'>Description</label>
            <Textarea name='description' id='description' className='project-form__input' required placeholder='Project Description'/>
        </div>
        <div>
            <label htmlFor='category' className='project-form__label'>Category
                <Input type='text' name='category' id='category' className='project-form__input' required placeholder='Project Category(DIY, Electronics, NextJS...)'/>
            </label>
        </div>
        <div>
            <label htmlFor='image_url' className='project-form__label'>Image</label>
            <Input type='text' name='image_url' id='image_url' className='project-form__input' required placeholder='Project Image URL'/>
        </div>
        <div data-color-mode='light'>
            <label htmlFor='details'>Details</label>
            <MDEditor 
            onChange={(value) => console.log(value)}
            id='details' preview='edit' height={300} style={{borderRadius: 20, overflow: 'hidden'}} 
            data-color-mode='light' textareaProps={{placeholder:"Describe your project in detail"}} 
            previewOptions={{disallowedElements : ['style']}}/>
        </div>
    </form>
  )
}

export default ProjectForm