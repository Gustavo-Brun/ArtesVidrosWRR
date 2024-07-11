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

async function deleteSchedule(id: number) {
  await fetch(`http://localhost:3333/delete/${id}`, {
    method: "DELETE",
  });
}

export default {
  getSchedule,
  createSchedule,
  deleteSchedule,
};
