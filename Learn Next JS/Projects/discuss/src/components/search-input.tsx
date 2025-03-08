'use client'
import React from 'react'
import { Input } from './ui/input'
import { useSearchParams } from 'next/navigation'
import { search } from '@/actions/search'

const SearchInput = () => {
    const searchParams = useSearchParams();
  return (
        <form action={search}>
            <Input
            type="text"
            placeholder="Search Posts..."
            className="w-full max-w-md"
            name='term'
            />
        </form>
  )
}

export default SearchInput