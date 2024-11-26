export const outbound = async () => {
    try {
        const users = await getUsers();



    } catch (error) {
        
    }
};

export const getUsers = async () => {
  try {
    const response = await fetch("/api/outbound/phone");

    return response.json();
  } catch (error) {
    console.error(error);
  }
};
