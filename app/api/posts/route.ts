export const POST = async (request: any) => {
  try {
    const { url } = await request.json();
    console.log(url);
  } catch (error) {
    console.error("Error:", error);
  }
};
