
interface IUserProps{
   email :string
   password :string
  
  
}
interface UserResponse{
    statusCode: number
    message: string
}

export async function createUser(data: IUserProps) {
  debugger;
  const url = new URL(`https://localhost:7187/api/v1/User`)
  console.log("para ohhh")

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