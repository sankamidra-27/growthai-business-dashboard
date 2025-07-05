const BASE_URL = 'https://growthai-business-backend.onrender.com';

export const submitBusinessData = async (name, location) => {
  const res = await fetch(`${BASE_URL}/business-data`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, location }),
  });
  return res.json();
};

export const regenerateHeadline = async (name, location, currentHeadline) => {
  const res = await fetch(
    `${BASE_URL}/regenerate-headline?name=${name}&location=${location}&current=${encodeURIComponent(currentHeadline)}`
  );
  return res.json();
};

