<template>
  <div class="img-handle" :class="isMini?'mini':''">
    <el-upload
      list-type="picture-card"
      :file-list="imgs"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="picturePreview"
      :on-remove="handleRemove"
      :on-error="handleError"
      :multiple="multiple"
      :class="hideAdd"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="visible" width="550px" :close-on-press-escape="false">
      <span slot="title" class="dialog-title">
        <el-button type="primary" @click.stop="dialogVisible = true" :dealPic="true">脱敏</el-button>
      </span>
      <img :src="imgUrl" alt width="100%" height="550px">
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: {
    files: {
      type: Array,
      default: []
    },
    imageNum: {
      type: Number,
      default: 1
    },
    isMini: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dealPic: false,
      hideAdd: "",
      fileList: [],
      imgs: [],
      otherFiles: [],
      // 显示图片
      visible: false,
      imgUrl: "",
      imgName: "",
      // 图片脱敏
      dialogVisible: false
    };
  },
  watch: {
    fileList(val) {
      let arr = [...this.otherFiles, ...this.imgs].map(item => item.name)
      this.$emit("upload", JSON.stringify({ imgs: arr }))
    }
  },
  mounted() {
    this.getFileByType(this.files)
  },
  methods: {
    getFileByType(fileList) {
      this.imgs = fileList
    },
    // 文件上传前钩子
    beforeUpload(file) {
      // console.log(file)
      this.imgs.push(file)
      return false
    },
    // 文件上传成功的钩子
    uploadSuccess(response, file, fileList) {
      console.log(file)
    },
    // 点击文件列表中已上传的文件时的钩子
    picturePreview(file) {
      console.log(file)
      this.visible = true
    },
    // 文件列表移除文件的钩子
    handleRemove(file, fileList) {
      this.imgs = fileList
    },
    handleError () {
      const file = {
        name: "1",
        url: "http://www.17qq.com/img_qqtouxiang/69182556.jpeg"
      }
      this.imgs.push(file)
    }
  }
};
</script>
<style lang="scss">
.mini {
  & /deep/ .el-upload-list__item,
  & /deep/ .el-upload--picture-card {
    position: relative !important;
    height: 48px !important;
    width: 48px !important;
    line-height: 60px !important;
  }
  & /deep/ .el-upload-list__item {
    & /deep/ .el-icon-check:before {
      position: absolute !important;
      top: -18px !important;
      right: -18px !important;
    }
    & /deep/ .el-upload-list__item-actions {
      font-size: 1rem !important;
      line-height: 52px !important;
      text-align: left !important;
      & /deep/ .el-upload-list__item-preview {
        margin-left: 5px !important;
      }
      & /deep/ span + span {
        width: 10px !important;
        margin-left: 5px !important;
      }
    }
  }
}
.p-file {
  &:hover {
    background: #eee;
  }
  .el-icon-close {
    float: right;
    font-size: 16px;
    margin-top: 5px;
    cursor: pointer;
  }
}
.hideAdd .el-upload--picture-card {
  display: none;
}
.img-detail {
  position: relative;
  height: 90%;
}
</style>
