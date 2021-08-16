# vue-official-template1

## vue 开发常见问题
### 窗口宽度变化强制子组件重新渲染

子组件绑定 key 值，当发生 `resize` 事件且页面重新渲染后（使用 `$nextTick`），更新 key 值，使组件强制刷新。但这会造成边子组件同样被销毁重新渲染，这会带来额外的性能消耗，并导致组件状态丢失。