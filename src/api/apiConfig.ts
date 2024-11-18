import axios from 'axios'
import {
  ADMIN,
  API,
  LOGIN_API,
  REGISTER_API,
  ROLE_KEY,
  TOKEN_KEY,
  USER_KEY,
} from '@/constants/strings/api'

type ApiParamType = {
  type: 'post' | 'get' | 'put' | 'delete'
  url: string
  dataToSend?: object
  params?: object
  setLoading?: (loading: boolean) => void
  onSuccess?: (data: any) => void
  headers?: object
  onError?: (error?: string) => void
}
export const apiSkeleton = ({
  type,
  url,
  dataToSend,
  params,
  setLoading,
  onSuccess,
  headers,
  onError,
}: ApiParamType) => {
  if (setLoading) {
    setLoading(true)
  }
  const token = getToken()

  const noTokenRequired = [LOGIN_API, REGISTER_API].includes(url)

  const Unauthorized = () => {
    if (setLoading) {
      setLoading(false)
    }
    if (onError) {
      onError(
        url === LOGIN_API
          ? 'Wrong Credentials'
          : 'Unauthorized, Please Login Again'
      )
    }
  }

  if (!token) {
    if (!noTokenRequired) {
      Unauthorized()
      return
    }
  }

  axios({
    method: type,
    url: API + url,
    data: type === 'get' ? null : dataToSend,
    params,
    headers: noTokenRequired
      ? { ...headers }
      : {
          Authorization: 'Bearer ' + token,
          ...headers,
        },
  })
    .then((response) => {
      if (setLoading) {
        setLoading(false)
      }
      if (response?.data.status === false) {
        if (onError) {
          onError()
        }
        if (response?.data?.data && onSuccess) {
          onSuccess(response?.data?.data)
        }
        return
      }
      if (onSuccess && response.data) {
        if (url === LOGIN_API) {
          if (!response.data?.accessToken) {
            // toast.error('Unable to login')
            return
          }
        }
        onSuccess(response.data)
      }
      //   if (successMsg && onError) {
      //     toast.success(successMsg)
      //   }
    })
    .catch((err) => {
      console.log('Error At : ', API + url)
      let errMsg = ''
      if (err?.response?.status === 401) {
        Unauthorized()
        return
      }

      if (setLoading) {
        setLoading(false)
      }
      if (err?.response?.status === 400) {
        const msg = err?.response?.data
        console.log('Error msg ', msg)
        if (typeof msg === 'object') {
          Object.values(msg).find((msg) => {
            if (Array.isArray(msg)) {
              errMsg = msg?.[0]
              return true
            }
          })
        } else {
          errMsg = msg
        }
      }
      if (onError) {
        onError(errMsg)
      }
    })
}

export const setToken = (token: string) => {
  if (typeof window !== undefined) {
    localStorage.setItem(TOKEN_KEY, token)
  }
}

export const getToken = () => {
  if (typeof window !== undefined) {
    return localStorage.getItem(TOKEN_KEY)
  }
}

export const isAdmin = () => {
  return getLocalRole() === ADMIN
}

export const getLocalUser = () => {
  if (typeof window !== undefined) {
    const user = localStorage.getItem(USER_KEY)
    if (!user) return null
    return JSON.parse(user)
  }
}

export const setLocalUser = (user: any) => {
  if (typeof window !== undefined) {
    localStorage.setItem(USER_KEY, JSON.stringify(user))
  }
}

export const getLocalRole = () => {
  if (typeof window !== undefined) {
    return localStorage.getItem(ROLE_KEY)
  }
}

export const setLocalRole = (role: string) => {
  if (typeof window !== undefined) {
    localStorage.setItem(ROLE_KEY, role)
  }
}

export const logout = () => {
  if (typeof window !== undefined) {
    localStorage.clear()
  }
}
