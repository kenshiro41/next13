export const runtime = 'edge';

export async function GET(request: Request) {
  await new Promise((r) => setTimeout(r, 3000));
  return new Response('Lazy Response!');
}
