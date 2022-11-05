<template>
	<div>
		组件实例：
    <h2>icon</h2>
    <gr-icon name="eye" size="small"></gr-icon>
    <gr-icon name="eye"></gr-icon>
    <gr-icon name="eye" size="large"></gr-icon>
    <gr-icon name="eye" size="64"></gr-icon>
    <h2>button</h2>
    type
    <div>
      <gr-button>default</gr-button>
      <gr-button type="info">info</gr-button>
      <gr-button type="info" icon="eye">info</gr-button>
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
    {{checked}}
    <h2>input</h2>
    <div>
      不同情况下的图标<br/>
      <gr-input v-model="inputValue"/>input:{{inputValue}}<br/>
      <gr-input v-model="inputValue" type="password"/>input:{{inputValue}}<br/>
      <gr-input v-model="inputValue" prefix="search"/>input:{{inputValue}}<br/>
      <gr-input v-model="inputValue" suffix="home"/>input:{{inputValue}}<br/>
      <gr-input v-model="inputValue" prefix="search" suffix="home"/>input:{{inputValue}}<br/>
      <gr-input v-model="inputValue" prefix="search" suffix="home"/>input:{{inputValue}}<br/>
      <gr-input v-model="inputValue" type="password" prefix="search" suffix="home" clearable/>input:{{inputValue}}<br/>
    </div>
    <div>
      不同尺寸<br/>
      <gr-input v-model="inputValue" size="small"/>input:{{inputValue}}<br/>
      <gr-input v-model="inputValue"/>input:{{inputValue}}<br/>
      <gr-input v-model="inputValue" size="large"/>input:{{inputValue}}<br/>
      <gr-input v-model="inputValue" type="textarea" size="small"/><br/>
      <gr-input v-model="inputValue" type="textarea"/><br/>
      <gr-input v-model="inputValue" type="textarea" size="large"/><br/>
    </div>
    <div>
      不同状态<br/>
      <gr-input v-model="inputValue"/>input:{{inputValue}}<br/>
      <gr-input v-model="inputValue" readonly/><br/>
      <gr-input v-model="inputValue" disabled/><br/>
    </div>
    <div>
      不同类型<br/>
      <gr-input v-model="inputValue"/><br/>
      <gr-input v-model="inputValue" type="password"/><br/>
      <gr-input v-model="inputValue" type="textarea" :max="10" show-count/><br/>
    </div>
    <h2>popper</h2>
    <gr-popper hover placement="top">
      <template #reference>
        <gr-button>test</gr-button>
      </template>
      <div>
        asdflsjdfla
      </div>
    </gr-popper>
    <h2>下拉选择</h2>
    <gr-select v-model="selectValue1" :options="options"></gr-select>
	</div>
</template>

<script lang="ts">
export default {
  data(){
    return {
      checked: '',
      inputValue: '',
      checkboxValue1: true,
      checkboxValue2: '未成年',
      checkboxValue3: ['banana'],
      options: [
        {
          label: '香蕉',
          value: 'banana'
        },
        {
          label: '苹果',
          disabled: true,
          value: 'apple'
        },
        {
          label: '橙子',
          value: 'orange'
        },
        {
          label: '芒果',
          value: 'mango'
        },
        {
          label: '葡萄',
          value: 'grape'
        }
      ],
      selectValue1: '',
    }
  },
  watch:{
    selectValue1(value){
      console.log(value)
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
