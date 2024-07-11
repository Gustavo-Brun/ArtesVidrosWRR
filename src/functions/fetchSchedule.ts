async function getSchedule() {
  const response = await fetch("http://localhost:3333/list", {
    method: "GET",
  });

  if (!response.ok) {
    return null;
  }

  const data = await response.json();
  return data;
}

export default {
  getSchedule,
};
