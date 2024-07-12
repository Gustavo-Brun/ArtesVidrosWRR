async function getSchedule() {
  const response = await fetch("https://artesvidroswrr-api.onrender.com/list", {
    method: "GET",
  });

  if (!response.ok) {
    return null;
  }

  const data = await response.json();

  return data;
}

async function createSchedule(schedule: object) {
  await fetch("https://artesvidroswrr-api.onrender.com/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(schedule),
  });
}

async function deleteSchedule(id: number) {
  await fetch(`https://artesvidroswrr-api.onrender.com/delete/${id}`, {
    method: "DELETE",
  });
}

export default {
  getSchedule,
  createSchedule,
  deleteSchedule,
};
