export default async function getCandidates() {
  const response = await fetch(`${process.env.API_URL}`, {
    method: "GET",
    headers: {
      "x-reference-id": `${process.env.REF_ID}`,
    },
  });

  if (response.status === 500) {
    throw new Error("Internal Server Error");
  }
  return await response.json();
}
