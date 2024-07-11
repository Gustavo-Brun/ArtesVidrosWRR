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

async function createSchedule(schedule: object) {
  await fetch("http://localhost:3333/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(schedule),
  });
}

export default {
  getSchedule,
  createSchedule,
};
