<template>
	<div>
		<form @submit="addTodo">
			<input type="text" v-model="title" name="title">
			<button type="submit">Add</button>			
		</form> 
	</div>
</template>

<script>
	import { v4 as uuidv4 } from 'uuid';

	export default{
		name:'AddTodo',
		data(){
			return {
				title:''
			}
		},
		// mounted () {
		//   debugger;
		// },
		methods:{
			addTodo(e){
				e.preventDefault();

				const newTodoObj = {
					id: uuidv4(),
					title: this.title,
					completed: false
				}

				this.$emit('addTodo', newTodoObj);
				this.title = '';
			}	
		}
	}

</script>

<style scoped></style>