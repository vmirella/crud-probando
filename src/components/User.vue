<template>
  <div id= "user" class="user">
    <h1>User Component</h1>
    <ul>
      <li v-for="(user, index) in users" :key="index">
        {{user.name}} - {{user.email}}
        <button v-on:click="deleteUser(index)">X</button>
      </li>
    </ul>
    <form v-on:submit.prevent="addUser">
      <input v-model="newUser.name" placeholder="Nombre">
      <input v-model="newUser.email" placeholder="Correo">
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          name: 'Amelia',
          email: 'amelia@gmail.com',
          contacted: false
        },
        {
          name: 'Jessy',
          email: 'Jessy@gmail.com',
          contacted: false
        },
        {
          name: 'Diana',
          email: 'Diana@gmail.com',
          contacted: false
        },
        {
          name: 'Sandra',
          email: 'Sandra@gmail.com',
          contacted: false
        }
      ],
      newUser: {}
    }
  },
  methods: {
    addUser() {
      this.users.push(this.newUser);
      this.newUser = {};
    },

    deleteUser(index) {
     this.users.splice(index, 1);
    }
  },
  created() {
    console.log('Componente creado');
    this.$http.get('https://jsonplaceholder.typicode.com/users')
    .then(res => this.users = res.body);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.user {
  background-color: #333;
  color: #42b983;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
