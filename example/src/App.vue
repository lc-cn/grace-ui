<template>
	<div>
		组件实例：
    <h2>button</h2>
    type
    <div>
      <gr-button>default</gr-button>
      <gr-button type="info">info</gr-button>
      <gr-button type="primary">primary</gr-button>
      <gr-button type="warn">warn</gr-button>
      <gr-button type="error">error</gr-button>
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
    <h2>checkbox</h2>
    单独使用
    <div>
      <gr-checkbox v-model="checkboxValue1">是否成年</gr-checkbox>选中值：{{checkboxValue1}}
      <br>
      指定true/false值
      <gr-checkbox v-model="checkboxValue2" true-value="成年" false-value="未成年">是否成年</gr-checkbox>选中值：{{checkboxValue2}}
      <br>
      size
      <gr-checkbox v-model="checkboxValue1" size="small" label="是否成年"/>
      <gr-checkbox v-model="checkboxValue1" label="是否成年"/>
      <gr-checkbox v-model="checkboxValue1" size="large" label="是否成年"/>
    </div>
    成组使用
    <div>
      <gr-checkbox disabled v-model="checkboxValue3" :options="options"/>选中值：{{checkboxValue3}}
    </div>
    垂直排列
    <div>
      <gr-checkbox v-model="checkboxValue3" vertical :options="options"/>选中值：{{checkboxValue3}}
    </div>
    约束选项数量(最多3项，最少2项)
    <div>
      <gr-checkbox v-model="checkboxValue3" :min="2" :max="3" :options="options"/>选中值：{{checkboxValue3}}
    </div>
    <h2>radio</h2>
    size
    <div>
      <gr-radio v-model="checked" :options="options"/>
    </div>
    <gr-input v-model.money="inputValue"/>
    {{checked}}
    input:{{inputValue}}
	</div>
</template>

<script lang="ts">
export default {
  data(){
    return {
      checked:'',
      inputValue:'',
      checkboxValue1:true,
      checkboxValue2:'未成年',
      checkboxValue3:['banana'],
      options:[
        {
          label:'香蕉',
          value:'banana'
        },
        {
          label:'苹果',
          disabled:true,
          value:'apple'
        },
        {
          label:'橙子',
          value:'orange'
        },
        {
          label:'芒果',
          value:'mango'
        },
        {
          label:'葡萄',
          value:'grape'
        }
      ]
    }
  }
}
</script>

<style>

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	color: #2c3e50;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
