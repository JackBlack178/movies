import { combineSlices, createSelector } from '@reduxjs/toolkit'
import { store } from './store'
import { useDispatch, useSelector } from 'react-redux'

export const rootReducer = combineSlices()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppCreateSelecotr = createSelector.withTypes<RootState>()
