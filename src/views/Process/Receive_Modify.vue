<template>
   <div>
       <el-form v-model="addReceiveForm" ref="addReceiveForm" :rules="rules" class="demo-ruleForm">
          <el-form-item label="外发单号">
              <el-input v-model="addReceiveForm.outsourceCode" :disabled="true">
              </el-input>
          </el-form-item>
          <el-form-item label="加工方编号">
              <el-input v-model="addReceiveForm.processorCode" :disabled="true">
              </el-input>
          </el-form-item>
          <el-form-item label="日期">
              <el-date-picker v-model="addReceiveForm.receiveDate">
              </el-date-picker>
          </el-form-item>
          <el-form-item label="收货人">
              <el-input v-model="addReceiveForm.userName" >
              </el-input>
          </el-form-item>
       <el-form>



      <table class="table table-striped" id="tab-detail">
            <tr>
                <th>颜色</th>
                <th>XS</th>
                <th>S</th>
                <th>M</th>
                <th>L</th>
                <th>XL</th>
                <th>XXL</th>
                <th>合计</th>
                <th>操作</th>
           </tr>
           <template  v-for="k in addReceiveForm.ReceiveDetail">
           <tr>
                <td>{{k.receiveColor}}</td>
                <td>{{k.receiveXS}}</td>
                <td>{{k.receiveS}}</td>
                <td>{{k.receiveM}}</td>
                <td>{{k.receiveL}}</td>
                <td>{{k.receiveXL}}</td>
                <td>{{k.receiveXXL}}</td>
                <td>{{k.receiveTotal}}</td>
                <td>
                 <template>
                   <el-button type="primary" icon="delete" @click="deleteDetail(k.$index)">                 
                 </el-button>
               </template>
                </td>
           </tr>
           </template>
           <tr>
                <td><el-input     v-model="addReceiveDetailForm.receiveColor" ></el-input></td>
                <td><el-input     v-model.number="addReceiveDetailForm.receiveXS"></el-input></td>
                <td><el-input     v-model.number="addReceiveDetailForm.receiveS"></el-input></td>
                <td><el-input     v-model.number="addReceiveDetailForm.receiveM"></el-input></td>
                <td><el-input     v-model.number="addReceiveDetailForm.receiveL"></el-input></td>
                <td><el-input     v-model.number="addReceiveDetailForm.receiveXL"></el-input></td>
                <td><el-input     v-model.number="addReceiveDetailForm.receiveXXL"></el-input></td>
                <td><el-input     v-model.number="addReceiveDetailForm.receiveTotal" :disabled="true"></el-input></td>
                <td>
                   <template>
                     <el-button type="primary" icon="plus" @click="addDetail"></el-button>
                   </template>
                </td>
            </tr>
        </table>
        
       <el-table :data="addReceiveForm.ReceiveDetail">
           <el-table-column prop="addReceiveForm.ReceiveDetail.receiveColor" label="颜色">
           </el-table-column>
           <el-table-column prop="addReceiveForm.ReceiveDetail.receiveXS" label="X">
           </el-table-column>
           <el-table-column prop="addReceiveForm.ReceiveDetail.receiveS" label="S">
           </el-table-column>
           <el-table-column prop="addReceiveForm.ReceiveDetail.receiveM" label="M">
           </el-table-column>
           <el-table-column prop="addReceiveForm.ReceiveDetail.receiveL" label="L">
           </el-table-column>
           <el-table-column prop="addReceiveForm.ReceiveDetail.receiveXL" label="XL">
           </el-table-column>
           <el-table-column prop="addReceiveForm.ReceiveDetail.receiveXXL" label="XXL">
           </el-table-column>
           <el-table-column prop="addReceiveForm.ReceiveDetail.receiveTotal" label="合计">
           </el-table-column>
           <el-table-column  label="操作">
               <template scope="scope">
               <el-button type="primary" icon="delete" @click="deleteDetail(scope.$index)">                 
               </el-button>
               </template>
           </el-table-column>
           </el-table>
          <el-form v-model="addReceiveDetailForm" ref="addReceiveDetailForm" :rules="rules" class="demo-dynamic demo-ruleForm">
                <el-form-item style="width:12%">
                    <el-input v-model.number="addReceiveDetailForm.receiveColor"></el-input>
                </el-form-item>        
                <el-form-item style="width:12%">
                    <el-input v-model.number="addReceiveDetailForm.receiveXS"></el-input>
                </el-form-item> 
                <el-form-item style="width:12%">
                    <el-input v-model.number="addReceiveDetailForm.receiveS"></el-input>
                </el-form-item> 
                <el-form-item style="width:12%">
                    <el-input v-model.number="addReceiveDetailForm.receiveM"></el-input>
                </el-form-item> 
                <el-form-item style="width:12%">
                    <el-input v-model.number="addReceiveDetailForm.receiveL"></el-input>
                </el-form-item> 
                 <el-form-item style="width:12%">
                    <el-input v-model.number="addReceiveDetailForm.receiveXL"></el-input>
                </el-form-item>                 
                <el-form-item style="width:12%">
                    <el-input v-model.number="addReceiveDetailForm.receiveXXL"></el-input>
                </el-form-item> 
                <el-form-item style="width:12%">
                    <el-input v-model.number="addReceiveDetailForm.Total" :disabled="true">
                </el-form-item> 
                <el-form-item style="width:4%" >
                    <el-button type="primary" icon="plus" @click="addDetail('addReceiveDetailForm')">
                    </el-button>
                </el-form-item>
          </el-form>
          <el-button type="primary" @click="addNewReceiveDetail('addReceiveForm')">保存
          </el-button>
          <el-button type="primary" @click="exitAdd">退出
          </el-button>

   </div>
</template>

<script>
import Vue from 'vue'
import Api from '@/config/api'
import router from '@/router'

export default{
    data(){
        return{
            addReceiveForm:{
                outsourceCode: '',
                processorCode: '',
                receiveDate: '',
                userName: '',
                ReceiveDetail:[]
            },
                  addReceiveDetailForm:{
                  receiveColor: '' ,
                  receiveXS: 0 ,
                  receiveS: 0 ,
                  receiveM: 0 ,
                  receiveL: 0 ,
                  receiveXL: 0 ,
                  receiveXXL: 0 ,
                  receiveTotal: 0
                },
                addReceiveDetailForm2:{
                  receiveColor: '' ,
                  receiveXS: 0 ,
                  receiveS: 0 ,
                  receiveM: 0 ,
                  receiveL: 0 ,
                  receiveXL: 0 ,
                  receiveXXL: 0 ,
                  receiveTotal: 0
                },
            rules:{
                receiveDate:[
                    {required:true , message: '请输入收货日期'},
                    {type:'date',message: '输入必须为日期类型' }

                ],
                userName:[
                    {required:true, message: '请输入收货人'}
                ]
            }
        };


    },
     created: function()  
              this.addReceiveForm = router.params.receiveInfo;
               
      },
    methods:{
        deleteDetail(index){
            this.addReceiveForm.ReceiveDetail.splice(index,1);
        },
        addDetail(formName){
              this.addReceiveDetailForm.receiveTotal=this.addReceiveDetailForm.receiveL+
                                                     this.addReceiveDetailForm.receiveM+
                                                     this.addReceiveDetailForm.receiveS+
                                                     this.addReceiveDetailForm.receiveXL+
                                                     this.addReceiveDetailForm.receiveXXL+
                                                     this.addReceiveDetailForm.receiveXS;
             this.addReceiveForm.ReceiveDetail.push(this.addReceiveDetailForm);
             this.addReceiveDetailForm=this.addReceiveDetailForm2;
             
        },
        addNewReceiveDetail(formName){
         this.$refs[formName].validate((valid) => {
          if (valid) {
            Vue.http.options.emulateJSON = true;
            Vue.http.post(Api.backend_url + '/Process/addReceive', this.addReceiveForm).then(response => {
              this.$message('修改收货单信息成功!');
              console.log(response);
            }, response => {
              console.log(response);
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
        },
        exitAdd(){
           router.push('/ProcessorManagment');
        }

    }
}
</script>