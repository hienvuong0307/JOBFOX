export default defineNuxtPlugin((nuxtApp) => {
    const apiUrl = "https://dummyjson.com/auth";
  
    return {
      provide: {
        auth: {
          async login(username, password) {
            try {
              const { data } = await useFetch(`${apiUrl}/login`, {
                method: "POST",
                body: { username, password },
              });
              localStorage.setItem("token", data.value.token);
              return data.value;
            } catch (error) {
              throw error.data || "Login failed";
            }
          },
  
          async signup(userData) {
            try {
              const { data } = await useFetch(`${apiUrl}/signup`, {
                method: "POST",
                body: userData,
              });
              return data.value;
            } catch (error) {
              throw error.data || "Signup failed";
            }
          },
  
          async getProfile() {
            try {
              const token = localStorage.getItem("token");
              if (!token) throw "No token found!";
              const { data } = await useFetch(`${apiUrl}/me`, {
                headers: { Authorization: `Bearer ${token}` },
              });
              return data.value;
            } catch (error) {
              throw error.data || "Failed to fetch profile";
            }
          },
        },
      },
    };
  });
  