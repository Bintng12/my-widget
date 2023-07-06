<template>
  <div class="photo-component">
    <h1>Photo</h1>
    <input type="file" @change="handleFileChange">
    <img :src="photoData" v-if="photoData" alt="Selected Photo">
  </div>
</template>

<script>
export default {
  name: "Photo",
  data() {
    return {
      photoData: null,
    };
  },
  methods: {
    handleFileChange(event) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.photoData = reader.result;
      };

      reader.readAsDataURL(file);
    },
  },
};
</script>

<style scoped>
.photo-component {
  text-align: center;
  padding: 125px;
}

h1 {
  color: #333;
  margin-bottom: 20px;
}

input[type="file"] {
  display: block;
  margin: 20px auto;
}

img {
  max-width: 100%;
  height: auto;
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
