# button 文档

:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

```vue
<template>
  type
  <div>
    <gr-button>default</gr-button>
    <gr-button type="info">info</gr-button>
    <gr-button type="primary">primary</gr-button>
    <gr-button type="warn">warn</gr-button>
    <gr-button type="error">error</gr-button>
  </div>
  按钮组
  <div>
    <gr-button-group>
      <gr-button type="primary" plain>primary</gr-button>
      <gr-button type="warn" plain>primary</gr-button>
      <gr-button type="error" plain>primary</gr-button>
    </gr-button-group>
  </div>
  plain
  <div>
    <gr-button plain>default</gr-button>
    <gr-button plain type="info">info</gr-button>
    <gr-button plain type="primary">primary</gr-button>
    <gr-button plain type="warn">warn</gr-button>
    <gr-button plain type="error">error</gr-button>
  </div>
  circle
  <div>
    <gr-button circle>default</gr-button>
    <gr-button circle type="info">info</gr-button>
    <gr-button circle type="primary">primary</gr-button>
    <gr-button circle type="warn">warn</gr-button>
    <gr-button circle type="error">error</gr-button>
  </div>
  <div>
    <gr-button circle plain>default</gr-button>
    <gr-button circle plain type="info">info</gr-button>
    <gr-button circle plain type="primary">primary</gr-button>
    <gr-button circle plain type="warn">warn</gr-button>
    <gr-button circle plain type="error">error</gr-button>
  </div>
  size
  <div>
    <gr-button type="primary" size="small">primary</gr-button>
    <gr-button type="primary">primary</gr-button>
    <gr-button type="primary" size="large">primary</gr-button>
  </div>
  <div>
    <gr-button circle type="primary" size="small">primary</gr-button>
    <gr-button circle type="primary">primary</gr-button>
    <gr-button circle type="primary" size="large">primary</gr-button>
  </div>
</template>
```
