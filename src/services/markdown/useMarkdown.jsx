import React from 'react'
import { useQuery } from '@tanstack/react-query'
import markdownFetcher from './markdownFetcher'

export default function useMarkdown(path) {
    return useQuery(["fetch-markdown", path], () => markdownFetcher(path))
}