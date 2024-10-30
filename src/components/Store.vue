<template>
  <h2>🐺 LOBOS KIT 🐺</h2>
  <p class="alert alert-success">Equipos de computo</p>
  <div class="container mt-4">
    <div class="row">
      <div
        v-for="equipo in equipos"
        :key="equipo.id"
        class="col-lg-6 col-md-12 mb-4"
      >
        <!-- Ajusta el tamaño de la columna -->
        <div class="card h-100 d-flex flex-row align-items-center flex-wrap">
          <div class="image-container">
            <img
              :src="equipo.img_url"
              class="card-img"
              alt="Imagen de equipo"
            />
          </div>
          <div class="card-body">
            <h5 class="card-title">🐺 -- {{ equipo.datos }}</h5>
            <p class="card-text">Precio: ${{ equipo.price.toFixed(2) }}</p>
            <p class="card-text">Reseñas: {{ equipo.reviews }}</p>
            <a :href="equipo.url" target="_blank" class="btn">Pagina Ofical</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      equipos: [], // Aquí irán los equipos
    };
  },
  async mounted() {
    await this.fetchEquipos(); // Llama a la función para obtener los equipos
  },
  methods: {
    async fetchEquipos() {
      try {
        const response = await fetch("http://localhost:3000/equipo", {
          method: "GET",
          credentials: "include", // Permite el envío de cookies
        });
        if (!response.ok) {
          throw new Error("Error al obtener equipos");
        }
        this.equipos = await response.json();
      } catch (error) {
        console.error("Error al obtener equipos:", error);
      }
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;
}

.image-container {
  width: 150px;
  margin-right: 15px;
}

.card-img {
  width: 100%;
  height: auto;
  object-fit: cover; /* Ajusta la imagen sin distorsionarla */
  border-radius: 8px;
}

.card-body {
  flex: 1;
  padding-left: 15px;
}

.card-title {
  font-size: 1.1rem;
  font-weight: bold;
}

.card-text {
  margin-bottom: 0.5rem;
}

.btn {
  width: 50%;
  margin-top: 10px;
  color: #eeeeee;
  background-color: #00a788;
  transition: background-color 0.5s;
}

.btn:hover {
  margin-top: 10px;
  color: #fafafa;
  background-color: #006452;
}

/* Media Queries para diseño responsivo */
@media (max-width: 768px) {
  .card {
    flex-direction: column; /* Cambia a una columna en pantallas pequeñas */
    text-align: center; /* Centrar el contenido en pantallas pequeñas */
  }

  .image-container {
    width: 100%; /* Imagen toma todo el ancho en pantallas pequeñas */
    margin: 0 0 15px 0; /* Margen solo en la parte inferior */
  }

  .card-body {
    padding-left: 0; /* Elimina el padding en pantallas pequeñas */
  }
}
</style>
