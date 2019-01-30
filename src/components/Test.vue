<template>
	<div class="test">
		<div v-text="title">
		</div>
		<h1></h1>
		<div v-if="showName">
			{{user.firstname}}
		</div>
		<div v-else>
			{{user.lastname}}
		</div>
		<ul>
			<li v-for="(task, index) in tasks" :key="index">
				{{task.title}}
			</li>
		</ul>
		<input type="text" v-model="user.firstname">
		<input type="text" v-on:keyup.enter="typing">
		<button type="button" @click="greet(user.firstname)">Click aquí</button>
	</div> 
</template>

<script>
export default {
	data() {
		return {
			title: 'Bienvenidos',
			user: {
				firstname: 'Virginia',
				lastname: 'Contreras'
			},
			showName: false,
			tasks: [
				{title: 'breakfast'},
				{title: 'eat'},
				{title: 'dinner'}
			],

		}
	},
	methods: {
		greet(name) {
			alert('Hello ' + name);
		},
		typing() {
			console.log('Diste un enter');
		}
	},
	props: {
		msg: String,
		default: 'No han enviado una prop'
	}
    
}
</script>

<style>
	.test {
		background-color: #555;
		color: #fff;
	}
</style>

