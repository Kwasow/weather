import { createSlice } from '@reduxjs/toolkit'

const CACHE_ACTION = 'cache'
const ACTION_ADD = 'cacheAdd'

export const CACHE_ACTION_ADD = `${CACHE_ACTION}/${ACTION_ADD}`

export const cacheSlice = createSlice({
  name: CACHE_ACTION,
  initialState: {
    cache: new Map()
  },
  reducers: {
    [ACTION_ADD]: (state, action) => {
      state.cache.set(
        action.payload.key,
        {
          timestamp: Date.now(),
          value: action.payload.value
        }
      )
    }
  }
})

export const { cacheAdd } = cacheSlice.actions

export default cacheSlice.reducer
