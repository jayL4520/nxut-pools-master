<!-- Please remove this file from your project -->
<template>
    <div class="tableCom">
        <div class="tableDiv " :class="{
            pools:$route.params.id
        }">
            <div class="tableBox  marTop ">
                <!-- head -->
                <div class="sqbox  evenly flex-box coll_100">
                    <div class="titl act padTop padBtm coll_20" :class="{isSamll:item.isSmall}" :key="i"
                        v-for="(item,i) in keyOpt">{{item.label}}</div>
                </div>
                <div class="tables coll_100">
                    <div class="tabsWrap" v-if="!loading">
                        <div class="sqbox evenly flex-box coll_100 " :key="i" v-for="(item,i) in tableData">

                            <div class="titl flex-box center act padTop padBtm coll_20 cusor" :class="{
                  isSamll:keyOpt[i]?.isSmall,
                  isCli:keyOpt[i]?.isCli
                  }" @click="toClick(item,i)" :key="i" v-for="(el,i) in  keyOpt"> 
                  
                  <span class=" textOv">{{keyOpt[i]?.render?keyOpt[i]?.render(item[i]) : item[i]||'--'}}</span>


                                <i class="" @click.stop="keyOpt[i]?.iconClick?keyOpt[i].iconClick():iconClick(item[i])"
                                    :class="{['isCli '+keyOpt[i]?.icon]:keyOpt[i].icon}"></i>
                            </div>
                        </div>
                    </div>
                    <div v-else class="marBtm flex-box center loadingText">
                        <span v-loading="loading"></span>
                        {{(loading?' 加载中...':'')}}
                    </div>
                </div>
            </div>
        </div>
        <!-- <svg class="icon" style="vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3200"><path d="M1024 240C1024 107.5 794.8 0 512 0S0 107.5 0 240v176h0.1c-0.1 1.8-0.1 3.5-0.1 5.3 0 3.6 0.2 7.1 0.5 10.7H0v170.7c0 1.8 0 3.6 0.1 5.3H0v176c0 132.5 229.2 240 512 240s512-107.5 512-240V608h-0.1c0.1-1.8 0.1-3.5 0.1-5.3V432h-0.5c0.3-3.5 0.5-7.1 0.5-10.7 0-1.8 0-3.6-0.1-5.3h0.1V240z m-64 544c0 16.1-8 33.1-23.8 50.5-19.8 21.9-50.7 43.1-89.4 61.2-42.3 19.8-92.1 35.5-148 46.6C639.8 954.1 577 960 512 960s-127.8-5.9-186.8-17.6c-55.9-11.1-105.7-26.8-148-46.6-38.7-18.2-69.6-39.3-89.4-61.2C72 817.1 64 800.1 64 784v-65.1c6.8 5.7 14.1 11.3 21.8 16.8 91.8 64.5 248.4 107 426.2 107s334.4-42.5 426.2-107c1.1-0.8 2.3-1.6 3.4-2.4 0.1-0.1 0.2-0.2 0.4-0.3 1-0.7 1.9-1.4 2.9-2.1 0.8-0.6 1.7-1.2 2.5-1.9 0.7-0.5 1.3-1 2-1.5 3.7-2.8 7.2-5.7 10.6-8.6V784z m0-181.3c0 15.4-7.3 31.6-21.8 48.3-0.6 0.7-1.3 1.5-2 2.2-12.5 13.9-29.5 27.4-50.1 40.1-11.9 7.4-25.1 14.4-39.3 21.1-42.3 19.8-92.1 35.5-148 46.6-59 11.7-121.9 17.6-186.8 17.6s-127.8-5.9-186.8-17.6c-55.9-11.1-105.7-26.8-148-46.6-14.2-6.7-27.3-13.7-39.3-21.1-20.6-12.7-37.6-26.3-50.1-40.1-0.7-0.7-1.3-1.5-2-2.2C71.3 634.3 64 618.1 64 602.7v-65.1c6.8 5.7 14.1 11.3 21.8 16.8 91.8 64.5 248.4 107 426.2 107s334.4-42.5 426.2-107c7.7-5.4 15-11 21.8-16.8v65.1z m0-181.4c0 15.4-7.3 31.6-21.8 48.3-0.6 0.7-1.3 1.5-2 2.2-12.5 13.9-29.5 27.4-50.1 40.1-11.9 7.4-25.1 14.4-39.3 21.1-42.3 19.8-92.1 35.5-148 46.6-59 11.7-121.9 17.6-186.8 17.6s-127.8-5.9-186.8-17.6c-55.9-11.1-105.7-26.8-148-46.6-14.2-6.7-27.4-13.7-39.3-21.1-20.6-12.7-37.6-26.3-50.1-40.1-0.7-0.7-1.3-1.5-2-2.2C71.3 453 64 436.7 64 421.3v-65.1c6.8 5.7 14.1 11.3 21.8 16.8 91.8 64.5 248.4 107 426.2 107s334.4-42.5 426.2-107c7.7-5.4 15-11 21.8-16.8v65.1z m-21.8-133c-0.6 0.7-1.3 1.5-2 2.2-12.5 13.9-29.5 27.4-50.1 40.1-11.9 7.4-25.1 14.4-39.3 21.1-42.3 19.8-92.1 35.5-148 46.6C639.8 410.1 577 416 512 416s-127.8-5.9-186.8-17.6c-55.9-11.1-105.7-26.8-148-46.6-14.2-6.7-27.3-13.7-39.3-21.1-20.6-12.7-37.6-26.3-50.1-40.1-0.7-0.7-1.3-1.5-2-2.2C71.3 271.6 64 255.4 64 240c0-16.1 8-33.1 23.8-50.5 19.8-21.9 50.7-43.1 89.4-61.2 42.3-19.8 92.1-35.5 148-46.6C384.2 69.9 447 64 512 64s127.8 5.9 186.8 17.6c55.9 11.1 105.7 26.8 148 46.6 38.7 18.2 69.6 39.3 89.4 61.2C952 206.9 960 223.9 960 240c0 15.4-7.3 31.6-21.8 48.3z" p-id="3201"></path></svg></div> -->
        <!-- 分页 -->
        <div class="pageNo marTop flex-box center">
            <el-pagination style="border-radius:10px;overflow: hidden; padding:0;" layout="prev,pager,next"
                @current-change="currentChange" :pager-count="count" :page-size="limit" @size-change="sizeChange"
                :total="total">
            </el-pagination>
        </div>

    </div>

</template>

<script nuxt-no-cache>
    export default {
        name: 'tableList',
        data() {
            return {
                limit: 25,
                count: 5,
                page: 1,
                // {"money":648.115939,"plot":13425.26}   
                isTrue: false,
                titleS: ['']
            }
        },
        props: ['tableData','configKey','total','loading'],
        created() {
            console.log("pagerCount", this.$parent)
        },
        computed: {
            keyOpt() {
                return this.$utils.tableConfig[this.configKey]
            }
        },
        methods: {
            toClick(item, i) {

                this.$emit('toClick', arguments)
            },
            iconClick(text){
                this.$utils.copy(text,this.$message)
            },
            sizeChange() {
                console.log("sizeChange", arguments)
                this.getData()
                this.$emit('sizeChange', arguments)
            },
            currentChange(e) {
                console.log("currentChange", arguments)
                this.page = e
                this.$emit('currentChange', arguments)
                this.$parent.getData()
            },
        }
    }
</script>
<style>
</style>