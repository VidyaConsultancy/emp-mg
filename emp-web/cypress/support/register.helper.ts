function getRandomIntInclusive(min: number, max: number): number {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

export const getRandomUser = () => {
  const randomNumber = getRandomIntInclusive(1000, 9999);

  return {
    name: `Guest-${randomNumber}`,
    username: `guest.${randomNumber}@gustr.com`,
    password: `guest!1234`,
  };
};
