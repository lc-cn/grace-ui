# checkbox 文档

<script>
export default{
data(){
    return {

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
这个是一个checkbox组件
