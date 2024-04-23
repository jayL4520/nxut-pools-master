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
    //   testData:{
    // "total": 150,
    // "per_page": 25,
    // "current_page": 1,
    // "last_page": 6,
    // "data": [
    //     {
    //         "uid": 5,
    //         "id": 1,
    //         "money": 0.042463,
    //         "hashid": 2147483647,
    //         "memo": "电费单",
    //         "time": 1713802146,
    //         "timedate": "20240423",
    //         "total": 37.713058
    //     },
    //     {
    //         "uid": 5,
    //         "id": 1,
    //         "money": 0.147677,
    //         "hashid": 904,
    //         "memo": "区块分红",
    //         "time": 1713715548,
    //         "timedate": "20240422",
    //         "total": 37.670597
    //     },
    //     {
    //         "uid": 5,
    //         "id": 1,
    //         "money": 0.160713,
    //         "hashid": 897,
    //         "memo": "区块分红",
    //         "time": 1713629199,
    //         "timedate": "20240421",
    //         "total": 37.522919
    //     },
    //     {
    //         "uid": 5,
    //         "id": 1,
    //         "money": 0.118644,
    //         "hashid": 890,
    //         "memo": "区块分红",
    //         "time": 1713542797,
    //         "timedate": "20240420",
    //         "total": 37.362206
    //     },
    //     {
    //         "uid": 5,
    //         "id": 1,
    //         "money": 0.137999,
    //         "hashid": 883,
    //         "memo": "区块分红",
    //         "time": 1713456389,
    //         "timedate": "20240419",
    //         "total": 37.243561
    //     },
    //     {
    //         "uid": 5,
    //         "id": 1,
    //         "money": 0.146781,
    //         "hashid": 876,
    //         "memo": "区块分红",
    //         "time": 1713370072,
    //         "timedate": "20240418",
    //         "total": 37.105564
    //     },
    //     {
    //         "uid": 5,
    //         "id": 1,
    //         "money": 0.156396,
    //         "hashid": 869,
    //         "memo": "区块分红",
    //         "time": 1713283520,
    //         "timedate": "20240417",
    //         "total": 36.958782
    //     },
    //     {
    //         "uid": 5,
    //         "id": 1,
    //         "money": 0.192144,
    //         "hashid": 862,
    //         "memo": "区块分红",
    //         "time": 1713197251,
    //         "timedate": "20240416",
    //         "total": 36.802387
    //     },
    //     {
    //         "uid": 5,
    //         "id": 1,
    //         "money": 0.166822,
    //         "hashid": 2147483647,
    //         "memo": "电费单",
    //         "time": 1713110897,
    //         "timedate": "20240415",
    //         "total": 36.610241
    //     },
    //     {
    //         "uid": 5,
    //         "id": 1,
    //         "money": 0.153235,
    //         "hashid": 2147483647,
    //         "memo": "电费单",
    //         "time": 1713024494,
    //         "timedate": "20240414",
    //         "total": 36.44342
    //     },
    //     {
    //         "uid": 5,
    //         "id": 1,
    //         "money": 0.20009,
    //         "hashid": 2147483647,
    //         "memo": "电费单",
    //         "time": 1712938091,
    //         "timedate": "20240413",
    //         "total": 36.290184
    //     },
    //     {
    //         "uid": 5,
    //         "id": 1,
    //         "money": 0.181683,
    //         "hashid": 2147483647,
    //         "memo": "电费单",
    //         "time": 1712851687,
    //         "timedate": "20240412",
    //         "total": 36.090096
    //     },
    //     {
    //         "uid": 5,
    //         "id": 1,
    //         "money": 0.174974,
    //         "hashid": 2147483647,
    //         "memo": "电费单",
    //         "time": 1712765284,
    //         "timedate": "20240411",
    //         "total": 35.908413
    //     },
    //     {
    //         "uid": 5,
    //         "id": 1,
    //         "money": 0.181114,
    //         "hashid": 2147483647,
    //         "memo": "电费单",
    //         "time": 1712678881,
    //         "timedate": "20240410",
    //         "total": 35.733437
    //     },
    //     {
    //         "uid": 5,
    //         "id": 1,
    //         "money": 0.197862,
    //         "hashid": 813,
    //         "memo": "区块分红",
    //         "time": 1712592378,
    //         "timedate": "20240409",
    //         "total": 35.552322
    //     },
    //     {
    //         "uid": 5,
    //         "id": 1,
    //         "money": 0.208041,
    //         "hashid": 806,
    //         "memo": "区块分红",
    //         "time": 1712505935,
    //         "timedate": "20240408",
    //         "total": 35.354462
    //     },
    //     {
    //         "uid": 5,
    //         "id": 1,
    //         "money": 0.216762,
    //         "hashid": 2147483647,
    //         "memo": "电费单",
    //         "time": 1712419672,
    //         "timedate": "20240407",
    //         "total": 35.14642
    //     },
    //     {
    //         "uid": 5,
    //         "id": 1,
    //         "money": 0.149552,
    //         "hashid": 2147483647,
    //         "memo": "电费单",
    //         "time": 1712333269,
    //         "timedate": "20240406",
    //         "total": 34.929661
    //     },
    //     {
    //         "uid": 5,
    //         "id": 1,
    //         "money": 0.200266,
    //         "hashid": 785,
    //         "memo": "区块分红",
    //         "time": 1712246833,
    //         "timedate": "20240405",
    //         "total": 34.780106
    //     },
    //     {
    //         "uid": 5,
    //         "id": 1,
    //         "money": 0.190087,
    //         "hashid": 2147483647,
    //         "memo": "电费单",
    //         "time": 1712160463,
    //         "timedate": "20240404",
    //         "total": 34.579842
    //     },
    //     {
    //         "uid": 5,
    //         "id": 1,
    //         "money": 0.192679,
    //         "hashid": 2147483647,
    //         "memo": "电费单",
    //         "time": 1712074059,
    //         "timedate": "20240403",
    //         "total": 34.389755
    //     },
    //     {
    //         "uid": 5,
    //         "id": 1,
    //         "money": 0.216665,
    //         "hashid": 2147483647,
    //         "memo": "电费单",
    //         "time": 1711987656,
    //         "timedate": "20240402",
    //         "total": 34.197075
    //     },
    //     {
    //         "uid": 5,
    //         "id": 1,
    //         "money": 0.226467,
    //         "hashid": 2147483647,
    //         "memo": "电费单",
    //         "time": 1711901253,
    //         "timedate": "20240401",
    //         "total": 33.980412
    //     },
    //     {
    //         "uid": 5,
    //         "id": 1,
    //         "money": 0.231596,
    //         "hashid": 2147483647,
    //         "memo": "电费单",
    //         "time": 1711814850,
    //         "timedate": "20240331",
    //         "total": 33.753944
    //     },
    //     {
    //         "uid": 5,
    //         "id": 1,
    //         "money": 0.218237,
    //         "hashid": 2147483647,
    //         "memo": "电费单",
    //         "time": 1711728447,
    //         "timedate": "20240330",
    //         "total": 33.522346
    //     }
    // ]
    //   },
        
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
    // let res = this.testData
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
