const date = new Date();

export const currentDate = date.toISOString().slice(0, 10);
export const currentTime = date.toTimeString().slice(0, 5);
