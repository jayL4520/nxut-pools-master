<!-- Please remove this file from your project -->
<template>
  <div class="Page " v-if="isTrue">
    <div class="poolPage_title titls pad t-center flex-box center white bold">
       <i   style="font-size:30px" :class="[nav[$route.name].icon||'el-icon-s-home']"></i>
       
       {{nav[$route.name].name}}-{{state?'矿池收益':'详细流水'}}
    
      <!-- <div class="flex-box center marLeft" v-show="$route.name!=='index'">    <el-button size="mini" type="warning" @click="$router.push('/')">返回</el-button> </div> -->
    </div>
  <div class="poolPage pad">

    
      <div class="row flex-box item-start"  >
        
        <div :span="8" class="coll_20 padLeft" style="min-width: 140px;">
          <div class="xp-box flex-box " >
            <div class="names xp-name">名称：</div>
            <div class="xp-label act">{{info.name}}</div>
          </div>
          <div class="xp-box flex-box" >
            <div class="names xp-name">个人算力：</div>
            <div class="xp-label act" >{{Number(info.plot||0).toFixed(4)||'--'}}</div>
          </div>

          <div class="xp-box flex-box" >
            <div class="names xp-name">总资产：</div>
            <div class="xp-label act">{{Number(info.money||0).toFixed(4)||'--'}}</div>
          </div>


          <div class="xp-box flex-box cusor" @click="getData(null)">
            <div class="names" :class="{'xp-act':state==null}">详细流水</div>
            <div class="xp-label act el-icon-arrow-right" :class="{'xp-act':state==null}"></div>
          </div>

          <div class="xp-box flex-box cusor" @click="getData('0')" >
            <div class="names" :class="{'xp-act':state=='0'}">矿池收益</div>
            <div class="xp-label act el-icon-arrow-right" :class="{'xp-act':state=='0'}"></div>
          </div>
        </div>
        <div :lg="16" class="coll_80" >
          <div class="flex-box center marTop">
              <svg  :class="{
              
            }" class="icon marBtm" style="vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3200"><path d="M1024 240C1024 107.5 794.8 0 512 0S0 107.5 0 240v176h0.1c-0.1 1.8-0.1 3.5-0.1 5.3 0 3.6 0.2 7.1 0.5 10.7H0v170.7c0 1.8 0 3.6 0.1 5.3H0v176c0 132.5 229.2 240 512 240s512-107.5 512-240V608h-0.1c0.1-1.8 0.1-3.5 0.1-5.3V432h-0.5c0.3-3.5 0.5-7.1 0.5-10.7 0-1.8 0-3.6-0.1-5.3h0.1V240z m-64 544c0 16.1-8 33.1-23.8 50.5-19.8 21.9-50.7 43.1-89.4 61.2-42.3 19.8-92.1 35.5-148 46.6C639.8 954.1 577 960 512 960s-127.8-5.9-186.8-17.6c-55.9-11.1-105.7-26.8-148-46.6-38.7-18.2-69.6-39.3-89.4-61.2C72 817.1 64 800.1 64 784v-65.1c6.8 5.7 14.1 11.3 21.8 16.8 91.8 64.5 248.4 107 426.2 107s334.4-42.5 426.2-107c1.1-0.8 2.3-1.6 3.4-2.4 0.1-0.1 0.2-0.2 0.4-0.3 1-0.7 1.9-1.4 2.9-2.1 0.8-0.6 1.7-1.2 2.5-1.9 0.7-0.5 1.3-1 2-1.5 3.7-2.8 7.2-5.7 10.6-8.6V784z m0-181.3c0 15.4-7.3 31.6-21.8 48.3-0.6 0.7-1.3 1.5-2 2.2-12.5 13.9-29.5 27.4-50.1 40.1-11.9 7.4-25.1 14.4-39.3 21.1-42.3 19.8-92.1 35.5-148 46.6-59 11.7-121.9 17.6-186.8 17.6s-127.8-5.9-186.8-17.6c-55.9-11.1-105.7-26.8-148-46.6-14.2-6.7-27.3-13.7-39.3-21.1-20.6-12.7-37.6-26.3-50.1-40.1-0.7-0.7-1.3-1.5-2-2.2C71.3 634.3 64 618.1 64 602.7v-65.1c6.8 5.7 14.1 11.3 21.8 16.8 91.8 64.5 248.4 107 426.2 107s334.4-42.5 426.2-107c7.7-5.4 15-11 21.8-16.8v65.1z m0-181.4c0 15.4-7.3 31.6-21.8 48.3-0.6 0.7-1.3 1.5-2 2.2-12.5 13.9-29.5 27.4-50.1 40.1-11.9 7.4-25.1 14.4-39.3 21.1-42.3 19.8-92.1 35.5-148 46.6-59 11.7-121.9 17.6-186.8 17.6s-127.8-5.9-186.8-17.6c-55.9-11.1-105.7-26.8-148-46.6-14.2-6.7-27.4-13.7-39.3-21.1-20.6-12.7-37.6-26.3-50.1-40.1-0.7-0.7-1.3-1.5-2-2.2C71.3 453 64 436.7 64 421.3v-65.1c6.8 5.7 14.1 11.3 21.8 16.8 91.8 64.5 248.4 107 426.2 107s334.4-42.5 426.2-107c7.7-5.4 15-11 21.8-16.8v65.1z m-21.8-133c-0.6 0.7-1.3 1.5-2 2.2-12.5 13.9-29.5 27.4-50.1 40.1-11.9 7.4-25.1 14.4-39.3 21.1-42.3 19.8-92.1 35.5-148 46.6C639.8 410.1 577 416 512 416s-127.8-5.9-186.8-17.6c-55.9-11.1-105.7-26.8-148-46.6-14.2-6.7-27.3-13.7-39.3-21.1-20.6-12.7-37.6-26.3-50.1-40.1-0.7-0.7-1.3-1.5-2-2.2C71.3 271.6 64 255.4 64 240c0-16.1 8-33.1 23.8-50.5 19.8-21.9 50.7-43.1 89.4-61.2 42.3-19.8 92.1-35.5 148-46.6C384.2 69.9 447 64 512 64s127.8 5.9 186.8 17.6c55.9 11.1 105.7 26.8 148 46.6 38.7 18.2 69.6 39.3 89.4 61.2C952 206.9 960 223.9 960 240c0 15.4-7.3 31.6-21.8 48.3z" p-id="3201"></path></svg>
                          {{state?'矿池收益':'详细流水'}}
              <!-- <div class="marBtm white bold">{{(loading?' 加载中...':'')}}</div> -->
              </div>

          <pool v-if="$route.name=='userWxId'&&state=='0'" />
          <!-- {{state}} -->
          <div class=" center flex-box column  marBtm  padTop coll_100" v-if="state==null" >
         
              <div class="tableBox  marTop ">
            <div class="sqbox  center flex-box coll_100" >
              <div class="titl act padTop padBtm coll_20"   v-show="['id'].indexOf(i)==-1" v-for="(item,i) in keyFor" >{{$utils.opt[i]}}</div>
            </div>
            <div class="tables coll_100" >
              <div class="tabsWrap"  v-if="!loading">

            <div class="sqbox center flex-box coll_100 " v-for="(item,i) in msgData" >
            <!-- router.push('/'+$route.params.wxid+'/'+item.id) -->
            <!-- @click="copy(item.hash)" -->
            <!-- {{msgData[0]}} -->
              <div class="titl act padTop padBtm coll_20 cusor flex-box  center" :class="{'isCli ':['hashid','name'].indexOf(i)>-1}"
                @click="['hashid'].indexOf(i)>-1&&$utils.copy(item.hashid,$message)" 
                v-show="['id'].indexOf(i)==-1"
                v-for="(el,i) in  keyFor"> 
                {{['id','type','time','hashid'].indexOf(i)==-1&&Number(item[i])>=0?Number(item[i]).toFixed(4):
                i=='time'?$utils.parseDatetime(item[i]):
                i=='hash'?$utils.formatAddress(item[i],15)
                :item[i]}}
                <i :class="{'isCli el-icon-document-copy':i=='hashid'}"></i>
              
              </div>
            </div>

            </div>
            <div v-else class="marBtm loadingText" >
              <!-- <svg  :class="{
              transform:loading
            }" class="icon marBtm" style="vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3200"><path d="M1024 240C1024 107.5 794.8 0 512 0S0 107.5 0 240v176h0.1c-0.1 1.8-0.1 3.5-0.1 5.3 0 3.6 0.2 7.1 0.5 10.7H0v170.7c0 1.8 0 3.6 0.1 5.3H0v176c0 132.5 229.2 240 512 240s512-107.5 512-240V608h-0.1c0.1-1.8 0.1-3.5 0.1-5.3V432h-0.5c0.3-3.5 0.5-7.1 0.5-10.7 0-1.8 0-3.6-0.1-5.3h0.1V240z m-64 544c0 16.1-8 33.1-23.8 50.5-19.8 21.9-50.7 43.1-89.4 61.2-42.3 19.8-92.1 35.5-148 46.6C639.8 954.1 577 960 512 960s-127.8-5.9-186.8-17.6c-55.9-11.1-105.7-26.8-148-46.6-38.7-18.2-69.6-39.3-89.4-61.2C72 817.1 64 800.1 64 784v-65.1c6.8 5.7 14.1 11.3 21.8 16.8 91.8 64.5 248.4 107 426.2 107s334.4-42.5 426.2-107c1.1-0.8 2.3-1.6 3.4-2.4 0.1-0.1 0.2-0.2 0.4-0.3 1-0.7 1.9-1.4 2.9-2.1 0.8-0.6 1.7-1.2 2.5-1.9 0.7-0.5 1.3-1 2-1.5 3.7-2.8 7.2-5.7 10.6-8.6V784z m0-181.3c0 15.4-7.3 31.6-21.8 48.3-0.6 0.7-1.3 1.5-2 2.2-12.5 13.9-29.5 27.4-50.1 40.1-11.9 7.4-25.1 14.4-39.3 21.1-42.3 19.8-92.1 35.5-148 46.6-59 11.7-121.9 17.6-186.8 17.6s-127.8-5.9-186.8-17.6c-55.9-11.1-105.7-26.8-148-46.6-14.2-6.7-27.3-13.7-39.3-21.1-20.6-12.7-37.6-26.3-50.1-40.1-0.7-0.7-1.3-1.5-2-2.2C71.3 634.3 64 618.1 64 602.7v-65.1c6.8 5.7 14.1 11.3 21.8 16.8 91.8 64.5 248.4 107 426.2 107s334.4-42.5 426.2-107c7.7-5.4 15-11 21.8-16.8v65.1z m0-181.4c0 15.4-7.3 31.6-21.8 48.3-0.6 0.7-1.3 1.5-2 2.2-12.5 13.9-29.5 27.4-50.1 40.1-11.9 7.4-25.1 14.4-39.3 21.1-42.3 19.8-92.1 35.5-148 46.6-59 11.7-121.9 17.6-186.8 17.6s-127.8-5.9-186.8-17.6c-55.9-11.1-105.7-26.8-148-46.6-14.2-6.7-27.4-13.7-39.3-21.1-20.6-12.7-37.6-26.3-50.1-40.1-0.7-0.7-1.3-1.5-2-2.2C71.3 453 64 436.7 64 421.3v-65.1c6.8 5.7 14.1 11.3 21.8 16.8 91.8 64.5 248.4 107 426.2 107s334.4-42.5 426.2-107c7.7-5.4 15-11 21.8-16.8v65.1z m-21.8-133c-0.6 0.7-1.3 1.5-2 2.2-12.5 13.9-29.5 27.4-50.1 40.1-11.9 7.4-25.1 14.4-39.3 21.1-42.3 19.8-92.1 35.5-148 46.6C639.8 410.1 577 416 512 416s-127.8-5.9-186.8-17.6c-55.9-11.1-105.7-26.8-148-46.6-14.2-6.7-27.3-13.7-39.3-21.1-20.6-12.7-37.6-26.3-50.1-40.1-0.7-0.7-1.3-1.5-2-2.2C71.3 271.6 64 255.4 64 240c0-16.1 8-33.1 23.8-50.5 19.8-21.9 50.7-43.1 89.4-61.2 42.3-19.8 92.1-35.5 148-46.6C384.2 69.9 447 64 512 64s127.8 5.9 186.8 17.6c55.9 11.1 105.7 26.8 148 46.6 38.7 18.2 69.6 39.3 89.4 61.2C952 206.9 960 223.9 960 240c0 15.4-7.3 31.6-21.8 48.3z" p-id="3201"></path></svg> -->
              {{(loading?' 加载中...':'')}}
            
            </div>
             
          </div>
          <div class="pageNo flex-box center mar">
          <el-pagination  style="border-radius:10px;overflow: hidden; padding:0;"
              layout="prev, pager,next" 
              @size-change=""
              :total="total">
            </el-pagination>
          </div>
          </div>
          </div>
          
        </div>
            <!-- <svg class="icon" style="vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3200"><path d="M1024 240C1024 107.5 794.8 0 512 0S0 107.5 0 240v176h0.1c-0.1 1.8-0.1 3.5-0.1 5.3 0 3.6 0.2 7.1 0.5 10.7H0v170.7c0 1.8 0 3.6 0.1 5.3H0v176c0 132.5 229.2 240 512 240s512-107.5 512-240V608h-0.1c0.1-1.8 0.1-3.5 0.1-5.3V432h-0.5c0.3-3.5 0.5-7.1 0.5-10.7 0-1.8 0-3.6-0.1-5.3h0.1V240z m-64 544c0 16.1-8 33.1-23.8 50.5-19.8 21.9-50.7 43.1-89.4 61.2-42.3 19.8-92.1 35.5-148 46.6C639.8 954.1 577 960 512 960s-127.8-5.9-186.8-17.6c-55.9-11.1-105.7-26.8-148-46.6-38.7-18.2-69.6-39.3-89.4-61.2C72 817.1 64 800.1 64 784v-65.1c6.8 5.7 14.1 11.3 21.8 16.8 91.8 64.5 248.4 107 426.2 107s334.4-42.5 426.2-107c1.1-0.8 2.3-1.6 3.4-2.4 0.1-0.1 0.2-0.2 0.4-0.3 1-0.7 1.9-1.4 2.9-2.1 0.8-0.6 1.7-1.2 2.5-1.9 0.7-0.5 1.3-1 2-1.5 3.7-2.8 7.2-5.7 10.6-8.6V784z m0-181.3c0 15.4-7.3 31.6-21.8 48.3-0.6 0.7-1.3 1.5-2 2.2-12.5 13.9-29.5 27.4-50.1 40.1-11.9 7.4-25.1 14.4-39.3 21.1-42.3 19.8-92.1 35.5-148 46.6-59 11.7-121.9 17.6-186.8 17.6s-127.8-5.9-186.8-17.6c-55.9-11.1-105.7-26.8-148-46.6-14.2-6.7-27.3-13.7-39.3-21.1-20.6-12.7-37.6-26.3-50.1-40.1-0.7-0.7-1.3-1.5-2-2.2C71.3 634.3 64 618.1 64 602.7v-65.1c6.8 5.7 14.1 11.3 21.8 16.8 91.8 64.5 248.4 107 426.2 107s334.4-42.5 426.2-107c7.7-5.4 15-11 21.8-16.8v65.1z m0-181.4c0 15.4-7.3 31.6-21.8 48.3-0.6 0.7-1.3 1.5-2 2.2-12.5 13.9-29.5 27.4-50.1 40.1-11.9 7.4-25.1 14.4-39.3 21.1-42.3 19.8-92.1 35.5-148 46.6-59 11.7-121.9 17.6-186.8 17.6s-127.8-5.9-186.8-17.6c-55.9-11.1-105.7-26.8-148-46.6-14.2-6.7-27.4-13.7-39.3-21.1-20.6-12.7-37.6-26.3-50.1-40.1-0.7-0.7-1.3-1.5-2-2.2C71.3 453 64 436.7 64 421.3v-65.1c6.8 5.7 14.1 11.3 21.8 16.8 91.8 64.5 248.4 107 426.2 107s334.4-42.5 426.2-107c7.7-5.4 15-11 21.8-16.8v65.1z m-21.8-133c-0.6 0.7-1.3 1.5-2 2.2-12.5 13.9-29.5 27.4-50.1 40.1-11.9 7.4-25.1 14.4-39.3 21.1-42.3 19.8-92.1 35.5-148 46.6C639.8 410.1 577 416 512 416s-127.8-5.9-186.8-17.6c-55.9-11.1-105.7-26.8-148-46.6-14.2-6.7-27.3-13.7-39.3-21.1-20.6-12.7-37.6-26.3-50.1-40.1-0.7-0.7-1.3-1.5-2-2.2C71.3 271.6 64 255.4 64 240c0-16.1 8-33.1 23.8-50.5 19.8-21.9 50.7-43.1 89.4-61.2 42.3-19.8 92.1-35.5 148-46.6C384.2 69.9 447 64 512 64s127.8 5.9 186.8 17.6c55.9 11.1 105.7 26.8 148 46.6 38.7 18.2 69.6 39.3 89.4 61.2C952 206.9 960 223.9 960 240c0 15.4-7.3 31.6-21.8 48.3z" p-id="3201"></path></svg></div> -->
          <!-- 数据库 -->
      
         
      </div>
    </div>
      
  </div>
</div>
</template>

<script>
export default {
  name: 'NuxtTutorial',
  data(){
    return {
      nav:{
        index:{icon:'el-icon-s-home',name:'首页'},
        userWxId:{icon:'el-icon-s-custom',name:'个人中心'},
        pool:{icon:'el-icon-s-order',name:'矿池列表'}
      },
      total:0,
      page:1,
      state:null,
      msgData:[],
      loading:false,
      // {"money":648.115939,"plot":13425.26}   
      info:{
        id:'',
        poolMsg:'',
        money:0,
        poolsIn:"1231",
        income:0,
        plot:0,
        name:'--'
      },
      keyFor:{ "time": 1701074848 ,  "memo": "区块分红","money": 0.0006,money:'1', "hashid": 108 },
      isTrue:false,
      titleS:['']
    }
  },
  created(){
   
		this.isTrue  = !!this.$route.params.wxid
    
  },
  mounted(opt){
    if(this.$route.name!=='index'){

    }
    this.getCount()
    this.getData()
  },
  methods:{
    toClick(item){
      if(!this.$route.params.id){
        this.$router.push('/'+this.$route.params.wxid+'/'+item.id)
      }else{
        this.$utils.copy(item.wxid,$message)
      }
     
    },
    // copy(content) {
    //     // 创建输入框元素
    //     const input = document.createElement('input');//不会保留文本格式
    //     //如果要保留文本格式，比如保留换行符，或者多行文本，可以使用  textarea 标签，再配和模板字符串 ` `
    //     //const input = document.createElement('textarea')
    //     // 将想要复制的值
    //     input.value = content;
    //     // 页面底部追加输入框
    //     document.body.appendChild(input);
    //     // 选中输入框
    //     input.select();
    //     // 执行浏览器复制命令
    //     document.execCommand('Copy');
    //     // 弹出复制成功信息
    //     this.$message.success('复制成功'+content);
    //     // 复制后移除输入框
    //     input.remove();
    // },
   async getData(i){
    this.page = 1
    this.state = i
    this.loading = true
    let url = `/index/index/get_moneylog_list?page=${this.page}&wxid=${this.$route.params.wxid}`

    if(i!=null){
      url = url+`&state=${i}`
    }else{
      console.log("sdfs",url)
     let res =  await this.$axios.get(url)
    //  this.loading = false
     if(res){
         this.isTrue = true
        //  this.info =  res.data[0]
        //  this.msgData =  res.data
        // if(!i){
        //   this.gethashlog_list()
        // }  
     }
    }
    },
  async gethashlog_list(){
   let url = `/index/index/hashlog_list?page=${this.page}&kid=${this.info.id}`
   console.log("sdfs",url)
   this.loading = true
    let res =  await this.$axios.get(url)
    if(res){
      this.msgData =  res.data
    console.log("sdfssdfs",res.data)
    this.loading = false
    this.isTrue = true
    this.page = res.last_page
    this.total = res.total
    }
 },
    async getCount(i){
   
     
      let url = `/index/index/get_count?page=${this.page}&wxid=${this.$route.params.wxid}`

      url = url+`&state=${1}`
     
      console.log("sdfs",url)
      this.loading = true
     let res =  await this.$axios.get(url)
     if(res){
      console.log("res",res)
      this.isTrue = true
      this.info =  res
     }
   
    }
  }
}
</script>
<style>

</style>
