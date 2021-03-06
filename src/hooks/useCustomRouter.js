import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const useCustomRouter = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const pushQuery = ({ page, sort }) => {
    const query = {};

    if(page) query.page = page;
    if(sort) query.sort = sort;

    const newQuery = new URLSearchParams(query).toString()
    navigate(`${pathname}?${newQuery}`)
  }

  return { pushQuery }
}

export default useCustomRouter