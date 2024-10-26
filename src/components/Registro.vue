<template>
  <br />
  <br />
  <div class="login-container">
    <div class="login-box">
      <img
        src="../assets/img/Lobos-Lit Logo.png"
        alt="Logo"
        class="login-logo"
      />
      <h1>REGISTRO</h1>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input
            type="text"
            required
            class="form-control"
            aria-describedby="emailHelp"
          />
          <label for="exampleInputEmail1" class="form-label">Nombre</label>
          <input
            type="text"
            required
            class="form-control"
            aria-describedby="emailHelp"
          />
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input type="password" required class="form-control" />
          </div>

          <button type="submit" class="btn">Registrar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script></script>

<style scoped>
h1 {
  font-weight: bold;
}
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

.form-control {
  background-color: #aff6ea;
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

.btn:hover {
  background-color: #0050a4;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.btn {
  color: white;
  width: 70%;
  background-color: #174371;
}
</style>
