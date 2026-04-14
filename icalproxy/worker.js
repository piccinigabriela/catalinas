export default {
  async fetch(request) {
    const url = new URL(request.url);
    const target = url.searchParams.get('url');
    if (!target) return new Response('Missing url param', { status: 400 });
    const res = await fetch(target);
    const text = await res.text();
    return new Response(text, {
      headers: {
        'Content-Type': 'text/calendar',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}
