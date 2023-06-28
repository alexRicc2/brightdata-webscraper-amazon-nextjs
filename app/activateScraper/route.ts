export async function POST(req: Request) {

 const data = await req.json()
 console.log(data)
}
export async function GET(req: Request){
  return new Response('Hello Alex', {status: 200})
}