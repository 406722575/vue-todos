<template>
    <div class="page lists-show"><!--最外层容器-->
        <nav><!--容器上半部分-->
            <todo-nav/>
            <todo-nav-right @onAddEvent="onAdd" />
        </nav>
        <div class="content-scrollable list-items">
            <!--容器下半部分-->
            <div v-for="item in items">
                <todo-item :item="item"/>
            </div>
        </div>
    </div>
</template>

<script>
    import TodoNav from 'views/Todo/childComps/TodoNav'
    import TodoNavRight from 'views/Todo/childComps/TodoNavRight'
    import TodoItem from 'views/Todo/childComps/TodoItem'

    export default {
        name: "Todo",
        data() {
            return {
                items: [],//代办单项列表

            }

        },
        components: {
            TodoNav,
            TodoNavRight,
            TodoItem
        },
        methods: {
            onAdd(text) {
                this.items.push({
                    checked: false, text: text, isDelete: false
                }); // 当用户点击回车时候 ，给items的值新增一个对象，this.text 即输入框绑定的值
                console.log(text);
            }
        }
    }
</script>

<style lang="less">
    @import 'common/style/form.less';
    @import 'common/style/todo.less';
</style>