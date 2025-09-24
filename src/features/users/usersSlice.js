import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import api from "../../services/apiClient"

export const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const res = await api.get('/users')
    return res.data
})

export const addUser = createAsyncThunk('users/add', async (newUser) => {
    const res = await api.post('/users', newUser)
    return res.data
})

export const updateUser = createAsyncThunk('users/update', async (user) => {
    const res = await api.put(`/users/${user.id}`, user)
    return res.data
})

export const deleteUser = createAsyncThunk('users/delete', async (id) => {
    await api.delete(`/users/${id}`)
    return id
})

const slice = createSlice({
    name: 'users',
    initialState: { list: [], status: 'idle', error: null },
    reducers: {},
    extraReducers: (b) => {
        b.addCase(fetchUsers.pending, s => { s.status = 'loading' })
        b.addCase(fetchUsers.fulfilled, (s, a) => {
            s.status = 'succeeded';
            s.list = a.payload
        })
        b.addCase(fetchUsers.rejected, (s, a) => { s.status = 'failed'; s.error = a.error.message })

        b.addCase(addUser.fulfilled, (s, a) => { s.list.push(a.payload) })
        b.addCase(updateUser.fulfilled, (s, a) => {
            const idx = s.list.findIndex(u => u.id === a.payload.id)
            if (idx !== -1) s.list[idx] = a.payload
        })
        b.addCase(deleteUser.fulfilled, (s, a) => {
            s.list = s.list.filter(u => u.id !== a.payload)
        })
    }
})

export default slice.reducer