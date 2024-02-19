<template >
    <div>
        <button
            class="btn text-white mt-4  px-10 bg-[#3195ff] py-5 relative rounded  uppercase font-semibold tracking-wider leading-none overflow-hidden hover:text-black"
            type="button">
            <span class="absolute inset-0 bg-cyan-400"></span>
            <span class="absolute inset-0 flex justify-center items-center font-bold">
                Start Learning
            </span>
            Start Learning
        </button>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.btn span:first-child {
    transform: translateX(-101%);
    transition: transform .3s ease-in
}

.btn:hover span {
    transform: translateX(0)
}
</style>