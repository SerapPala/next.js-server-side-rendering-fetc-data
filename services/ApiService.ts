class ApiService {
async getHomePageData(): Promise<any> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/homePage` , { method: "GET" });
  const data = await res.json();
  return data[0];
}
}

export default new ApiService();
