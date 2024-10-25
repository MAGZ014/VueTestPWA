<template>
  <div class="login-container">
    <div class="login-box">
      <img
        src="https://www.utsjr.edu.mx/build/img/logos/logoSoyUt.png"
        alt="Logo"
        class="login-logo"
      />
      <h1>LOBOS KIT</h1>
      <form @submit.prevent="login">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Email address</label
          >
          <input
            type="text"
            v-model="username"
            id="username"
            required
            class="form-control"
            aria-describedby="emailHelp"
          />
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input
              type="password"
              v-model="password"
              required
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
        <p v-if="error" class="error-msg"><div class="alert alert-danger" role="alert">
          Incorrect username or password</div></p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      error: null,
    };
  },
  methods: {
    login() {
      // Simulación de autenticación básica
      if (this.username === "admin" && this.password === "password") {
        localStorage.setItem("auth", true);
        this.$router.push("/Home");
      } else {
        this.error = "Invalid username or password";
      }
    },
  },
};
</script>

<style scoped>
/* Centrar el formulario en la pantalla */
.login-container {
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
}

.login-box {
  background-color: #299684;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 500px;
}

.login-logo {
  width: 150px;
  height: 80px;
  margin-bottom: 20px;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #fdfffb;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #555;
}

.login-input {
  width: 100%;
  padding: 10px;
  border-radius: 25px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;
}

.login-input:focus {
  border-color: #007bff;
}

.login-button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  margin-top: 10px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.login-button:hover {
  background-color: #0056b3;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
