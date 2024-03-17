<!-- Please remove this file from your project -->
<template>
  <div class="Page marBtm poolPage" >
    <div class="poolPage_title titls pad t-center flex-box center white bold" v-if="$route.name=='pool'">
       <i   style="font-size:30px" :class="[nav[$route.name].icon||'el-icon-s-home']"></i>
       {{nav[$route.name].name}}
      <div class="flex-box center marLeft" v-show="$route.name!=='index'">    <el-button size="mini" type="warning" @click="$router.push('/'+$route.params.wxid)">返回</el-button> </div>
    </div>
        <div  class="coll_100 marBtm" >
          
          <div class=" center center column  coll_100" >
            <tables @toClick="toClick" 
            :loading="loading" 
            :total="total"
             configKey="dayMsg" 
             :tableData="msgData" ></tables>
        
          </div>

      </div>
 
</div>
</template>

<script nuxt-no-cache>
export default {
  name: 'dayMsg',
  data(){
    return {
      nav:{
        index:{icon:'el-icon-s-home',name:'首页'},
        userWxId:{icon:'el-icon-s-custom',name:'个人中心'},
        pool:{icon:'el-icon-s-order',name:'明细'}
      },
      limit:25,
      total:0,
      count:5,
      page:1,
      state:'',
      msgData:[],
      loading:false,
      // {"money":648.115939,"plot":13425.26}   
      info:{
        poolMsg:'',
        money:0,
        poolsIn:"1231",
        income:0,
        plot:0,
        name:0
      },
      isTrue:false,
      titleS:['']
    }
  },

  created(){
console.log("pagerCount",this.$parent)
  },
  mounted(opt){
    if(this.$route.name!=='index'){

    }
    // this.getCount(1)
    this.page = 1
    this.getData()
    this.state = 1
  },
  methods:{
    toClick([item,i]){
  
      this.$router.push({
        name:'liuMsg',
        params:{
          wxid:this.$route.params.wxid,
          id:item.id,
          date:item.timedate
        }
      })  
    },
    sizeChange(){
      console.log("sizeChange",arguments)
        this.getData()
    },
    currentChange(e){
      console.log("currentChange",arguments)
      this.page = e
        this.getData()
    },
    async getData(i){
    
    this.state = i
    this.loading = true
    let url = `/index/index/get_moneylog_list?page=${this.page}&wxid=${this.$route.params.wxid}`+"&isday=1"
     let res =  await this.$axios.get(url)
     this.loading = false
     if(res){
         this.isTrue = true
        //  this.info =  res.data[0]
        // res.data[0].total =1
  
         this.msgData =  res.data
         this.total = res.total
        //  this.page +=1
        // if(!i){
        //   this.gethashlog_list()
        // }  
     }
    
    },
   
  }
}
</script>
<style>
</style>
