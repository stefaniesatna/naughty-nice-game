export async function getPeople() {
  const res = await fetch('/api/people');
  return res.json();
}

export async function updateOptIn(id: string, hasOptedIn: boolean) {
  const res = await fetch('/api/people', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, hasOptedIn }),
  });
  return res.json();
}