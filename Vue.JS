1. Vue的主要特点
   (1) 简洁 (2) 轻量 (3) 快速 (4) 数据驱动 (5) 模块友好 (6) 组件化
2. Vue的基本语法结构 
   <div id="app">
			hello:{{ name }}
			<input v-model="name" />
   </div>
   ......
   <script>
      var a = new Vue({
             el:"#app", //(选择器:id(#),class(.),标签名)
             data:{
                 //(对应操作)
                 name:'vue.js'
             }
         })
		</script>
   如果要修改div里面name的值有以下方法:
   (1) a.name = 'hello'
   (2) a.$data.name = 'hello'
   (3) a._data.name = 'hello'//写在实例外面script标签里面
3. Vue双向数据绑定
   使用v-model方法,根据input里面输入的,实时改变name值
   eg:<div id="app">
			hello:{{ name }}
			<br />
			<br />
			<input v-model="name" />
		</div>
		<script>
			let vm = new Vue({el: "#app",data: {name: "vue.js"}})
			vm.name = "Hello Blog"
		</script>
4. 对象语法
   属性绑定:v-bind:,缩写:
   实例的相关字段进行绑定外，还能将其他的属性字段进行绑定，最常见的是对于样式的绑定，即class和style属性
   绑定之后可以从script里面对body主体里面的东西的属性进行定义操作
   
   数组语法
   我们可以把一个数组传给v-bind:class,以应用一个class列表。
   
   三目运算
   可以运用三目运算，根据条件列表中的class。
   <div class="box" :class="[isA ? classA:''，classB]">三目运算</div>

   内联样式
   可以在style里面连接上一个写的样式
   eg:  <div id="demo" v-bind:style="styleObject">
        <p :style="{color:rcolor,fontSize:fsize + 'px'}>哈哈哈</p>"
        <p :style="[styleObject,A]">嘻嘻嘻</p>
        </div>
	<script>
		var demo = new Vue({
			el:'#demo',
			data:{
			   styleObject:{
			   	color:red,
			   fontsize:'24px'
			   },
			   A:{
			   	display:'block',
			   },
			rcolor:red,
			fsize:24,
			},
			})#哈哈哈的字样课通过rcolor,fsize自己调整
5. 文本渲染方式:
		v-text: 更新元素的innerText
		v-html: 更新元素的innerHTML(可以识别html标签)
		v-once: 静态插入(只执行一次,后面改变也不会更新)
		v-pre:  原格式输出(插入的是啥就返回啥,要通过{{}}渲染)
		v-cloak:指令保持在元素上直到关联实例结束编译(要通过{{}}渲染)

6. 修饰符:
		
		
