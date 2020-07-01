<template>
    <div>
        <h1 class="title-page">
            <span class="title-wrapper">{{todo.title}}</span> <!-- 标题-->
            <span class="count-list">{{todo.count}}</span><!-- 数目-->
        </h1>
        <div class="nav-group right"><!-- 右边的删除，锁定图标容器-->
            <div class="options-web">
                <a class=" nav-item"> <!-- 锁定图标-->
                    <span class="icon-lock" v-if="todo.locked"></span>
                    <span class="icon-unlock" v-else></span>
                </a>
                <a class=" nav-item"><!-- 删除图标-->
                    <span class="icon-trash"></span>
                </a>
            </div>
        </div>

        <div class=" form todo-new input-symbol">
            <!-- 新增单个代办单项输入框,监听了回车事件，双向绑定text值,
            监听了disabled属性，在todo.locked为true的情况下无法编辑-->
            <input type="text" v-model="text"
                   placeholder='请输入'
                   @keyup.enter="onAdd"
                   :disabled="todo.locked"/>
            <span class="icon-add"></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TodoNavRight",
        data() {
            return {
                todo: { //详情内容
                    title: '星期一',
                    count: 12,
                    locked: false
                },
                text: '',  //新增代办单项绑定的值
            }
        },
        methods: {
            onAdd() {
                this.$emit('onAddEvent',this.text);
                this.text = '';//初始化输入框的值。
            }
        }
    }
</script>

<style lang="less" scoped>
    @import 'common/style/nav.less';
    @import 'common/style/form.less';
    @import 'common/style/todo.less';
</style>