<template>
    <div>
        <h2>{{msg}}</h2><hr>
        <h3>{{$store.state.a.count}}-{{count}}</h3>
        <p>
            <button @click="add(10)">+</button>
            <button @click="reduce">-</button>
        </p>
        <p>
            <button @click="addAction">+</button>
            <button @click="reduceAction">-</button>
        </p>
    </div>
</template>

<script>
    import store from '@/vuex/store';
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
    export default {
        data() {
            return {
                msg: 'Hello Vuex',
            }
        },
        computed:{
            // 使用数组
            ...mapState(['count']),
            // 使用computed方法
            // count() {
            //     return this.$store.state.count;
            // },
            // 使用箭头 要使用mapState
            // count:state=>state.count
            // count(){
            //     return this.$store.getters.count;
            // }
            // ...mapGetters(['count'])
        },
        methods: {
            ...mapMutations(['add', 'reduce']),
            ...mapActions(['addAction', 'reduceAction']),
        },
        //     add() {
        //         this.$store.commit('add', 10);
        //     },
        //     reduce() {
        //         this.$store.commit('reduce');
        //     }
        // },
        store
    }
</script>

<style scoped>

</style>