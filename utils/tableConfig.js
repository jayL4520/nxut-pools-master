import {parseTime,toFixed,formatAddress} from '@/utils'
console.log("render",{parseTime,formatAddress})

export default {
    liuMsg:{
       time:{
        label:"时间",
        icon:'el-icon-arrow-right',
        type:'time',
        isCli:true,
        render(e){
           return  parseTime(e,'{y}-{m}-{d}')
        },
        // isCli:true
       },
       memo:{
        label:"备注",
        // icon:'el-icon-arrow-right',
       
       },
       money:{
        label:"收益",
        // icon:'el-icon-arrow-right',
        type:'number',
        render(e){
            return  toFixed(e)
         },
      
       },
       hashid:{
        label:"哈希",
        render(e){
            return  formatAddress(e,25)
         },
       },
 
     },
     dayMsg:{
       
        time:{
            label:"日期",
            icon:'el-icon-arrow-right',
            isCli:true,
            render(e){
                return  parseTime(e,'{y}-{m}-{d}')
             },
            type:'day'
           },
         money:{
            label:"收益",
            type:'number',
            render(e){
            return  toFixed(e)
         },
            // icon:'el-icon-arrow-right',
           
        },
        total:{
            label:"总额",
    
            type:'number',
            render(e){
                return  toFixed(e)
             },
        },
       // id:'id',
     },
     msg:{
       
        id:{
            label:"id",
            isSmall:true,
           
           },
        time:{
            label:"日期",
            icon:'el-icon-arrow-right',
            render(e){
                return  parseTime(e,'{y}-{m}-{d}')
             },
            isCli:true,
            type:'time'
           },
        higt:{
            label:"收益",
            type:'number',
            render(e){
                return  toFixed(e)
             },
            // icon:'el-icon-arrow-right',
        },
        num:{
            label:"数量",
            type:'number'
            ,
            render(e){
                return  toFixed(e)
             },
     
        },
        hash:{
            label:"hash",
            icon:'el-icon-document-copy',
        render(e){
            return  formatAddress(e,25)
         },
        }
     },
     
     pool:{   
     id:{
        label:"id",
        isSmall:true,
       },
       name:{
        label:"测试矿池",
        icon:'el-icon-arrow-right',
        isCli:true,
       },
       type:{
        label:"收益",
        // icon:'el-icon-arrow-right',
    },
    user:{
        label:"用户",
 
    },
    addr:{
        label:"地址",
        isCli:true,
        icon:'el-icon-document-copy',
    }
    }
    
 }