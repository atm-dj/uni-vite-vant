<template>
	<view>
		<van-button type="primary">{{ props.text }}</van-button>
	</view>
</template>

<script setup>
	import { ref, toRefs, watch } from 'vue'
	
	const emit = defineEmits();
	
	const props = defineProps({
		text: String
	})
	
	// watch(props, (newValue, oldValue) => {
	    
	// });
</script>

<style>

</style>