<template>
  <div>
    <el-table
      ref="material"
      class="material"
      row-key="index"
      size="mini"
      :data="thisForm.datas"
      border
      style="width: 100%"
      highlight-current-row
    >
      <el-table-column label="序号" align="center" width="55" fixed="left">
        <template slot-scope="{row, $index}">
          <div class="my-handle">{{$index + 1}}</div>
        </template>
      </el-table-column>
      <el-table-column prop="type" label="类别" width="110" align="center">
        <template slot-scope="{row,$index}">
          <el-select size="mini" v-model="row.type" placeholder="请选择">
            <el-option label="证件" value="证件"></el-option>
            <el-option label="证明" value="证明"></el-option>
            <el-option label="申请表" value="申请表"></el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column prop="number" label="材料编号" width="120" align="center">
        <template slot-scope="{row,$index}">
          <el-input size="mini" placeholder="请输入内容" v-model="row.number"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="io" label="输入/输出" width="115" align="center">
        <template slot-scope="{row, $index}">
          <el-radio-group size="mini" v-model="row.io">
            <el-radio label="I">I</el-radio>
            <el-radio label="O">O</el-radio>
          </el-radio-group>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="材料名称" width="150" align="center">
        <template slot-scope="{row,$index}">
          <el-input size="mini" placeholder="请输入内容" v-model="row.name"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="窗口提交材料要求" align="center">
        <el-table-column prop="originalScriptProvide" label="原件提供" width="55">
          <template slot-scope="{row,$index}">
            <el-switch
              size="mini"
              v-model="row.originalScriptProvide"
              active-color="#13ce66"
              inactive-color="#c0ccda"
            ></el-switch>
          </template>
        </el-table-column>
        <el-table-column prop="copyProvide" label="复印件提供" align="center" width="60">
          <template slot-scope="{row,$index}">
            <el-switch
              size="mini"
              v-model="row.copyProvide"
              active-color="#13ce66"
              inactive-color="#c0ccda"
            ></el-switch>
          </template>
        </el-table-column>
        <el-table-column prop="electronicProvide" label="电子件提供" align="center" width="60">
          <template slot-scope="{row,$index}">
            <el-switch
              size="mini"
              v-model="row.electronicProvide"
              active-color="#13ce66"
              inactive-color="#c0ccda"
            ></el-switch>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="审批输出物">
        <el-table-column prop="originalScriptOutput" label="原件" align="center" width="55">
          <template slot-scope="{row,$index}">
            <el-switch
              size="mini"
              v-model="row.originalScriptOutput"
              active-color="#13ce66"
              inactive-color="#c0ccda"
            ></el-switch>
          </template>
        </el-table-column>
        <el-table-column prop="electronicOutput" label="电子件" align="center" width="55">
          <template slot-scope="{row,$index}">
            <el-switch
              size="mini"
              v-model="row.electronicOutput"
              active-color="#13ce66"
              inactive-color="#c0ccda"
            ></el-switch>
          </template>
        </el-table-column>
      </el-table-column>
      <!-- <el-table-column label="材料要求"> -->
      <el-table-column prop="count" label="份数" align="center">
        <template slot-scope="{row,$index}">
          <el-input-number
            :controls="false"
            size="mini"
            v-model="row.count"
            controls-position="right"
            :min="1"
          ></el-input-number>
        </template>
      </el-table-column>
      <el-table-column prop="canBeShortOf" label="是否可缺少" width="115" align="center">
        <template slot-scope="{row,$index}">
          <el-switch
            size="mini"
            v-model="row.canBeShortOf"
            active-color="#13ce66"
            inactive-color="#c0ccda"
          ></el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="preAcceptance" label="预受理" width="100" align="center">
        <template slot-scope="{row,$index}">
          <el-select size="mini" v-model="row.preAcceptance" placeholder="请选择">
            <el-option label="人工" value="人工"></el-option>
            <el-option label="自动" value="自动"></el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column prop="sampleTable" label="样表（电子版本/图片）" width="180" ref="sampleTable">
        <template slot-scope="{row}">
          <ImgUpload
            :isMini="true"
            :files="row.sampleTable.imgs"
            :imageNum="40"
            :multiple="true"
            @upload="uploadImgs(row, $event)"
            @heigthChange="heigthChange"
          ></ImgUpload>
        </template>
      </el-table-column>
      <el-table-column label="序号" align="center" width="55" fixed="right">
        <template slot-scope="{row, $index}">
          <div class="my-handle">{{$index + 1}}</div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import ImgUpload from "../components/uploadPicture";
export default {
  components: { ImgUpload },
  data() {
    return {
      thisForm: {
        datas: [
          {
            canBeShortOf: false,
            copyProvide: false,
            count: 1,
            departmrntName: "",
            departmrntSystemName: "",
            departmrntSystemUrl: null,
            electronicOutput: false,
            electronicProvide: false,
            emptyTable: "",
            eventId: "a93c3c004bcd445db14680fe0c6334de",
            id: "45c0ffe21b5c428c899b300679a52fa2",
            io: "I",
            name: "",
            number: "",
            orderNum: "1",
            originalScriptOutput: false,
            originalScriptProvide: false,
            preAcceptance: null,
            primary: null,
            provideWay: "",
            remarks: "",
            sampleTable: {
              imgs: [
                {
                  name: "1",
                  url: "http://www.17qq.com/img_qqtouxiang/69182556.jpeg"
                },
                {
                  name: "1",
                  url: "http://www.17qq.com/img_qqtouxiang/69182556.jpeg"
                },
                {
                  name: "1",
                  url: "http://www.17qq.com/img_qqtouxiang/69182556.jpeg"
                },
                {
                  name: "1",
                  url: "http://www.17qq.com/img_qqtouxiang/69182556.jpeg"
                }
              ]
            },
            source: "",
            type: "申请表",
            acceptance: [
              {
                content: "",
                id: "978593df62654eef9fcece5498d60995",
                materialId: "45c0ffe21b5c428c899b300679a52fa2",
                number: 1,
                type: 1
              }
            ],
            approval: [
              {
                content: "",
                id: "0a479d6c2b894eb980fcc6ec93bda0e4",
                materialId: "45c0ffe21b5c428c899b300679a52fa2",
                number: 1,
                type: 2
              }
            ]
          }
        ]
      }
    };
  },
  mounted() {},
  methods: {
    /* eslint-disable */
    // 上传图片
    uploadImgs(row, imgs) {
      row.sampleTable = imgs;
    },
    heigthChange() {
      this.thisForm.datas[0].sampleTable.imgs.splice(0, 1)
      // this.$refs.material.doLayout()
    },
    uploadImg(row, imgs) {
      row.emptyTable = imgs;
    }
  }
};
</script>

<style lang="scss" scoped>
.material {
  .el-input-number--mini {
    width: 60px;
  }
  .imgs {
    img {
      width: 48px;
      height: 48px;
      margin-left: 5px;
      margin-bottom: 5px;
      border-radius: 6px;
      border: 1px solid #c0ccda;
      cursor: pointer;
    }
  }
}
</style>
