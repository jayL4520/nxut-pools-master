<!-- Please remove this file from your project -->
<template>
    <div class="Page marBtm poolPage" >
      <div class="poolPage_title titls pad t-center flex-box center white bold" >
         <i   style="font-size:30px" :class="[nav[$route.name].icon||'el-icon-s-home']"></i>
    
         {{$route.params.date}} {{nav[$route.name].name}}
      
        <div class="flex-box center marLeft" v-show="$route.name!=='index'">    <el-button size="mini" type="warning" @click="$router.push('/'+$route.params.wxid)">返回</el-button> </div>
      </div>
          <div  class="coll_100 marBtm" >
         
            <div class=" center center column  coll_100" >
              <tables @toClick="toClick" 
            :loading="loading" 
            :total="total"
             configKey="liuMsg" 
             :tableData="msgData" ></tables>
             </div>
           
        </div>
   
  </div>
  </template>
  
  <script nuxt-no-cache>
  export default {
    name: 'NuxtTutorial',
    data(){
      return {
        nav:{
          index:{icon:'el-icon-s-home',name:'首页'},
          userWxId:{icon:'el-icon-s-custom',name:'个人中心'},
          liuMsg:{icon:'el-icon-s-order',name:'明细'}
        },
        total:0,
        page:1,
        limit:25,
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
  
    },
    mounted(opt){
      if(this.$route.name!=='index'){
  
      }
      // this.getCount(1)
      this.getData()
      this.state = 1
    },
    methods:{
      toClick(item,i){
        // if(!this.$route.params.id){
       
        //   if(i=='addr'&&item.addr){
  
        //     return window.open(item.addr)
        //   }
        //   this.$router.push('/'+this.$route.params.wxid+'/'+item.id)
        // }else{
        //   // this.$utils.copy(item.hash,this.$message)
        // }
       
      },
      currentChange(e){
      console.log("currentChange",arguments)
      this.page = e
        this.getData()
    },
    async getData(){
     
      this.loading = true

        // debugger
     let url = `/index/index/get_moneylog_list?page=${this.page}&wxid=${this.$route.params.wxid}`+"&date="+this.$route.params.date
      
      
      console.log("sdfs",url)
       let res =  await this.$axios.get(url)
       this.loading = false
       if(res){
        this.msgData =  res.data
        this.total = res.total
   
       }
  
      },
     
    }
  }
  </script>
  <style>
  </style>
  