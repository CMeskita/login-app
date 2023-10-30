
interface IUserProps{
   email :string
   password :string
  
  
}
interface UserResponse{
    statusCode: number
    message: string
}

export async function createUser(data: IUserProps) {
    const url = new URL('/api/v1/User', process.env.NEXT_PUBLIC_API_HOST)

    const headers = new Headers({
        'Content-type': 'application/json',
      })

      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers,
      })

      if (!response.ok) {
        const { message } = (await response.json()) as UserResponse
    }

}