<template>
  <div class="container">
    <h1 class="header">Welcome to the Hospital System</h1>
    <div class="section">
      <h2 class="title">Patients List</h2>
      <ul class="list">
        <li v-for="patient in patients" :key="patient.id" class="list-item">
          {{ patient.name }} - {{ patient.age }}
        </li>
      </ul>
    </div>
    <button @click="toggleAddPatientForm" class="btn">
      {{ showAddPatientForm ? 'Cancel' : 'Add Patient' }}
    </button>
    <div v-if="showAddPatientForm" class="form-container">
      <h2>Add New Patient</h2>
      <form @submit.prevent="addPatient" class="form">
        <label for="name">Name:</label>
        <input v-model="newPatient.name" id="name" type="text" required />
        <label for="age">Age:</label>
        <input v-model="newPatient.age" id="age" type="number" required />
        <button type="submit" class="btn">Add Patient</button>
      </form>
    </div>
    <p v-if="successMessage" class="success">{{ successMessage }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';

interface Patient {
  id?: number;
  name: string;
  age: number;
}

export default defineComponent({
  name: 'PatientsComponent',
  setup() {
    const patients = ref<Patient[]>([]);
    const showAddPatientForm = ref(false);
    const newPatient = ref<Patient>({ name: '', age: 0 });
    const successMessage = ref('');
    const addedPatients = ref<Patient[]>([]);

    const fetchPatients = async () => {
      try {
        const response = await axios.get('http://localhost:3000/patients');
        patients.value = response.data;
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    const addPatient = async () => {
      try {
        const response = await axios.post('http://localhost:3000/patients', newPatient.value);
        successMessage.value = 'You add successful';
        addedPatients.value.push(response.data);
        newPatient.value = { name: '', age: 0 };
        showAddPatientForm.value = false;
        setTimeout(() => { successMessage.value = ''; }, 3000);
      } catch (error) {
        console.error('Error adding patient:', error);
      }
    };

    const toggleAddPatientForm = () => {
      showAddPatientForm.value = !showAddPatientForm.value;
    };

    fetchPatients();

    return {
      patients,
      showAddPatientForm,
      newPatient,
      successMessage,
      addedPatients,
      addPatient,
      toggleAddPatientForm,
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
