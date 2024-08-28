<template>
  <div class="container">
    <h1 class="header">Welcome to the Hospital System</h1>
    <div class="section">
      <h2 class="title">Doctors List</h2>
      <ul class="list">
        <li v-for="doctor in doctors" :key="doctor.id" class="list-item">
          {{ doctor.name }} - {{ doctor.specialty }}
        </li>
      </ul>
    </div>
    <button @click="toggleAddDoctorForm" class="btn">
      {{ showAddDoctorForm ? 'Cancel' : 'Add Doctor' }}
    </button>
    <div v-if="showAddDoctorForm" class="form-container">
      <h2>Add New Doctor</h2>
      <form @submit.prevent="addDoctor" class="form">
        <label for="name">Name:</label>
        <input v-model="newDoctor.name" id="name" type="text" required />
        <label for="specialty">Specialty:</label>
        <input v-model="newDoctor.specialty" id="specialty" type="text" required />
        <button type="submit" class="btn">Add Doctor</button>
      </form>
    </div>
    <p v-if="successMessage" class="success">{{ successMessage }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';

interface Doctor {
  id?: number;
  name: string;
  specialty: string;
}

export default defineComponent({
  name: 'DoctorsComponent',
  setup() {
    const doctors = ref<Doctor[]>([]);
    const showAddDoctorForm = ref(false);
    const newDoctor = ref<Doctor>({ name: '', specialty: '' });
    const successMessage = ref('');
    const addedDoctors = ref<Doctor[]>([]);

    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://localhost:3000/doctors');
        doctors.value = response.data;
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    const addDoctor = async () => {
      try {
        const response = await axios.post('http://localhost:3000/doctors', newDoctor.value);
        successMessage.value = 'You add successful';
        addedDoctors.value.push(response.data);
        newDoctor.value = { name: '', specialty: '' };
        showAddDoctorForm.value = false;
        setTimeout(() => { successMessage.value = ''; }, 3000);
      } catch (error) {
        console.error('Error adding doctor:', error);
      }
    };

    const toggleAddDoctorForm = () => {
      showAddDoctorForm.value = !showAddDoctorForm.value;
    };

    fetchDoctors();

    return {
      doctors,
      showAddDoctorForm,
      newDoctor,
      successMessage,
      addedDoctors,
      addDoctor,
      toggleAddDoctorForm,
    };
  },
});
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.header {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.section {
  margin-bottom: 20px;
}

.title {
  font-size: 1.5em;
  color: #007bff;
  margin-bottom: 10px;
}

.list {
  list-style: none;
  padding: 0;
}

.list-item {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
}

.btn {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1em;
  margin-bottom: 20px;
}

.btn:hover {
  background-color: #0056b3;
}

.form-container {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 20px;
}

.form {
  display: flex;
  flex-direction: column;
}

.form label {
  margin-bottom: 5px;
}

.form input {
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.success {
  color: #28a745;
  font-size: 1em;
  text-align: center;
}
</style>
