import { GrassType } from "../../../pages/Record/type";

const getNonSmokedDates = (grass: GrassType): string[] => {
  const userCreatedAt = new Date(grass.userCreatedAt);
  const today = new Date();

  const daysBetween = [];

  for (let currentDate = new Date(userCreatedAt); currentDate <= today; currentDate.setDate(currentDate.getDate() + 1)) {
    daysBetween.push(new Date(currentDate));
  }

  const userSmokedDates = grass.userSmokedAtResponses.map(response => new Date(response));

  const formattedSmokedDates = userSmokedDates.map(date => date.toISOString().split('T')[0]);

  const nonSmokedDates = daysBetween.filter(date => !formattedSmokedDates.includes(date.toISOString().split('T')[0]));

  return nonSmokedDates.map(date => date.toISOString().split('T')[0]);
}

export default getNonSmokedDates;